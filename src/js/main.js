/** @type {CharData} */
let characterData       = [];   // Initial character data set used.
/** @type {CharData} */
let characterDataToSort = [];   // Character data set after filtering.
/** @type {Options} */
let options             = [];   // Initial option set used.

let currentVersion      = '';   // Which version of characterData and options are used.

/** @type {(boolean|boolean[])[]} */
let optTaken  = [];             // Records which options are set.

/** Save Data. Concatenated into array, joined into string (delimited by '|') and compressed with lz-string. */
let timestamp = 0;        // savedata[0]      (Unix time when sorter was started, used as initial PRNG seed and in dataset selection)
let timeTaken = 0;        // savedata[1]      (Number of ms elapsed when sorter ends, used as end-of-sort flag and in filename generation)
let choices   = '';       // savedata[2]      (String of '0', '1' and '2' that records what sorter choices are made)
let optStr    = '';       // savedata[3]      (String of '0' and '1' that denotes top-level option selection)
let suboptStr = '';       // savedata[4...n]  (String of '0' and '1' that denotes nested option selection, separated by '|')
let timeError = false;    // Shifts entire savedata array to the right by 1 and adds an empty element at savedata[0] if true.

/** Intermediate sorter data. */
let sortedIndexList = [];
let recordDataList  = [];
let parentIndexList = [];
let tiedDataList    = [];

let leftIndex       = 0;
let leftInnerIndex  = 0;
let rightIndex      = 0;
let rightInnerIndex = 0;
let battleNo        = 1;
let sortedNo        = 0;
let pointer         = 0;

/** A copy of intermediate sorter data is recorded for undo() purposes. */
let sortedIndexListPrev = [];
let recordDataListPrev  = [];
let parentIndexListPrev = [];
let tiedDataListPrev    = [];

let leftIndexPrev       = 0;
let leftInnerIndexPrev  = 0;
let rightIndexPrev      = 0;
let rightInnerIndexPrev = 0;
let battleNoPrev        = 1;
let sortedNoPrev        = 0;
let pointerPrev         = 0;

/** Miscellaneous sorter data that doesn't need to be saved for undo(). */
let finalCharacters = [];
let loading         = false;
let totalBattles    = 0;
let sorterURL       = window.location.host + window.location.pathname;
let storedSaveType  = localStorage.getItem(`${sorterURL}_saveType`);

/**
 * Sorting mode:
 *   'full'  all songs, 1 vs 1.
 *   'top10' only the favorites are sorted, and the first 10 are shown.
 * In both modes a grid is shown first to mark favorites. In full mode they can be skipped, and when marked,
 * a favorite always beats a song that isn't one (that question is never asked), so favorites end up above the rest.
 */
let sortMode   = 'full';
let favStr     = '';      // String of '0' and '1', one per song (after filtering by release). Marks the favorites.
let favDone    = false;   // True once the favorites grid has been answered (or skipped), or a save has been loaded.
let favPicking = false;   // True while the favorites grid is open.
let autoNo     = 0;       // Number of battles decided automatically (favorite vs not favorite) so far.
let autoNoPrev = 0;
let prevSet    = false;   // True once there is a snapshot to undo to.
const modeNames = { full: 'Full ranking', top10: 'Top 10' };
const modeInfo  = {
  full:  'Sort every song, two at a time. You can mark favorites first, so they end up above the rest.',
  top10: 'Mark your favorites, then sort only those two at a time and see your Top 10.'
};

function init() {

  /** Define button behavior. */
  document.querySelector('.starting.start.button').addEventListener('click', start);
  document.querySelector('.starting.load.button').addEventListener('click', loadProgress);

  document.querySelector('.left.sort.image').addEventListener('click', () => pick('left'));
  document.querySelector('.right.sort.image').addEventListener('click', () => pick('right'));
  
  document.querySelector('.sorting.tie.button').addEventListener('click', () => pick('tie'));
  document.querySelector('.sorting.undo.button').addEventListener('click', undo);
  document.querySelector('.sorting.save.button').addEventListener('click', () => saveProgress('Progress'));
  
  document.querySelector('.finished.save.button').addEventListener('click', () => saveProgress('Last Result'));
  document.querySelector('.finished.again.button').addEventListener('click', () => location.href = `${location.protocol}//${sorterURL}`);
  document.querySelector('.finished.getimg.button').addEventListener('click', generateImage);
  document.querySelector('.finished.list.button').addEventListener('click', generateTextList);

  document.querySelector('.clearsave').addEventListener('click', clearProgress);

  document.querySelector('.starting.mode.button').addEventListener('click', () => {
    sortMode = sortMode === 'full' ? 'top10' : 'full';
    setModeButton();
  });
  document.querySelector('.favcancel.button').addEventListener('click', favCancel);
  document.querySelector('.favskip.button').addEventListener('click', favSkip);
  document.querySelector('.favdone.button').addEventListener('click', favDone_);
  setModeButton();

  document.querySelector('.left.sort.player').addEventListener('click', () => togglePlay('left'));
  document.querySelector('.right.sort.player').addEventListener('click', () => togglePlay('right'));

  /** Define keyboard controls (up/down/left/right vimlike k/j/h/l). */
  document.addEventListener('keypress', (ev) => {
    if (favPicking) return;
    /** If sorting is in progress. */
    if (timestamp && !timeTaken && !loading && choices.length === battleNo - 1) {
      switch(ev.key) {
        case 's': saveProgress('Progress'); break;
        case 'h': pick('left'); break;
        case 'l': pick('right'); break;
        case 'k': pick('tie'); break;
        case 'j': undo(); break;
        default: break;
      }
    }
    /** If sorting has ended. */
    else if (timeTaken) {
      switch(ev.key) {
        case 'k': case '1': saveProgress('Last Result'); break;
        case 'j': case '2': generateImage(); break;
        case 's': case '3': generateTextList(); break;
        default: break;
      }
    } else if (!timestamp) { // If sorting hasn't started yet.
      switch(ev.key) {
        case 'Enter': start(); break;
        case 'c':     loadProgress(); break;
        default: break;
      }
    }
  });

  /** Show load button if save data exists. */
  if (storedSaveType) {
    document.querySelector('.starting.load.button > span').insertAdjacentText('beforeend', storedSaveType);
    document.querySelectorAll('.starting.button').forEach(el => {
      el.style['grid-row'] = 'span 3';
      el.style.display = 'block';
    });
  }

  setLatestDataset();
  setBackground();

  /** Decode query string if available. */
  if (window.location.search.slice(1) !== '') decodeQuery();
}

/** Begin sorting. */
function start() {
  /** Copy data into sorting array to filter. */
  characterDataToSort = characterData.slice(0);

  /** Check selected options and convert to boolean array form. */
  optTaken = [];

  options.forEach(opt => {
    if ('sub' in opt) {
      if (!document.getElementById(`cbgroup-${opt.key}`).checked) optTaken.push(false);
      else {
        const suboptArray = opt.sub.reduce((arr, val, idx) => {
          arr.push(document.getElementById(`cb-${opt.key}-${idx}`).checked);
          return arr;
        }, []);
        optTaken.push(suboptArray);
      }
    } else { optTaken.push(document.getElementById(`cb-${opt.key}`).checked); }
  });

  /** Convert boolean array form to string form. */
  optStr    = '';
  suboptStr = '';

  optStr = optTaken
    .map(val => !!val)
    .reduce((str, val) => {
      str += val ? '1' : '0';
      return str;
    }, optStr);
  optTaken.forEach(val => {
    if (Array.isArray(val)) {
      suboptStr += '|';
      suboptStr += val.reduce((str, val) => {
        str += val ? '1' : '0';
        return str;
      }, '');
    }
  });

  /** Filter out deselected nested criteria and remove selected criteria. */
  options.forEach((opt, index) => {
    if ('sub' in opt) {
      if (optTaken[index]) {
        const subArray = optTaken[index].reduce((subList, subBool, subIndex) => {
          if (subBool) { subList.push(options[index].sub[subIndex].key); }
          return subList;
        }, []);
        characterDataToSort = characterDataToSort.filter(char => {
          if (!(opt.key in char.opts)) console.warn(`Warning: ${opt.key} not set for ${char.name}.`);
          return opt.key in char.opts && char.opts[opt.key].some(key => subArray.includes(key));
        });
      }
    } else if (optTaken[index]) {
      characterDataToSort = characterDataToSort.filter(char => !char.opts[opt.key]);
    }
  });

  /** A song can be on several of the selected releases (single, album...). Only its oldest version is kept. */
  const oldestVersion = {};
  characterDataToSort.forEach(char => {
    if (char.song && !(releaseOrder(char) >= oldestVersion[char.song])) oldestVersion[char.song] = releaseOrder(char);
  });
  characterDataToSort = characterDataToSort.filter(char => !char.song || releaseOrder(char) === oldestVersion[char.song]);

  if (characterDataToSort.length < 2) {
    alert('Cannot sort with less than two characters. Please reselect.');
    return;
  }

  /** Favorites: first mark them on a grid (full mode can skip it). */
  if (!favDone || (sortMode === 'top10' && !favStr) || (favStr && favStr.length !== characterDataToSort.length)) {
    favStr  = '';
    favDone = false;
    favShow();
    return;
  }

  characterData.forEach(char => char.isFav = false);
  characterDataToSort.forEach((char, idx) => char.isFav = favStr[idx] === '1');
  if (sortMode === 'top10') characterDataToSort = characterDataToSort.filter(char => char.isFav);

  /** Shuffle character array with timestamp seed. */
  timestamp = timestamp || new Date().getTime();
  if (new Date(timestamp) < new Date(currentVersion)) { timeError = true; }
  Math.seedrandom(timestamp);

  characterDataToSort = characterDataToSort
    .map(a => [Math.random(), a])
    .sort((a,b) => a[0] - b[0])
    .map(a => a[1]);

  /**
   * tiedDataList will keep a record of indexes on which characters are equal (i.e. tied) 
   * to another one. recordDataList will have an interim list of sorted elements during
   * the mergesort process.
   */

  recordDataList  = characterDataToSort.map(() => 0);
  tiedDataList    = characterDataToSort.map(() => -1);

  /** 
   * Put a list of indexes that we'll be sorting into sortedIndexList. These will refer back
   * to characterDataToSort.
   * 
   * Begin splitting each element into little arrays and spread them out over sortedIndexList
   * increasing its length until it become arrays of length 1 and you can't split it anymore. 
   * 
   * parentIndexList indicates each element's parent (i.e. where it was split from), except 
   * for the first element, which has no parent.
   */

  sortedIndexList[0] = characterDataToSort.map((val, idx) => idx);
  parentIndexList[0] = -1;

  let midpoint = 0;   // Indicates where to split the array.
  let marker   = 1;   // Indicates where to place our newly split array.

  for (let i = 0; i < sortedIndexList.length; i++) {
    if (sortedIndexList[i].length > 1) {
      let parent = sortedIndexList[i];
      midpoint = Math.ceil(parent.length / 2);

      sortedIndexList[marker] = parent.slice(0, midpoint);              // Split the array in half, and put the left half into the marked index.
      totalBattles += sortedIndexList[marker].length;                   // The result's length will add to our total number of comparisons.
      parentIndexList[marker] = i;                                      // Record where it came from.
      marker++;                                                         // Increment the marker to put the right half into.

      sortedIndexList[marker] = parent.slice(midpoint, parent.length);  // Put the right half next to its left half.
      totalBattles += sortedIndexList[marker].length;                   // The result's length will add to our total number of comparisons.
      parentIndexList[marker] = i;                                      // Record where it came from.
      marker++;                                                         // Rinse and repeat, until we get arrays of length 1. This is initialization of merge sort.
    }
  }

  leftIndex  = sortedIndexList.length - 2;    // Start with the second last value and...
  rightIndex = sortedIndexList.length - 1;    // the last value in the sorted list and work our way down to index 0.

  leftInnerIndex  = 0;                        // Inner indexes, because we'll be comparing the left array
  rightInnerIndex = 0;                        // to the right array, in order to merge them into one sorted array.

  /** Disable all checkboxes and hide/show appropriate parts while we preload the images. */
  document.querySelectorAll('input[type=checkbox]').forEach(cb => cb.disabled = true);
  document.querySelector('.filters').style.display = 'none';
  document.querySelectorAll('.starting.button').forEach(el => el.style.display = 'none');
  document.querySelector('.loading.button').style.display = 'block';
  document.querySelector('.progress').style.display = 'block';
  loading = true;

  preloadImages().then(() => {
    loading = false;
    document.querySelector('.loading.button').style.display = 'none';
    document.querySelectorAll('.sorting.button').forEach(el => el.style.display = 'block');
    document.querySelectorAll('.sort.text').forEach(el => el.style.display = 'block');
    document.querySelector('.sorter').classList.add('started');
    display();
  });
}

/** Audio player. One Audio object is shared by both cards, and it only gets a source when play is pressed. */
let audioPlayer = null;
let audioSide   = '';   // Card ('left'/'right') the audio is currently loaded for.
let audioFiles  = {};   // Audio filename of the song shown on each card.

/**
 * Plays or pauses the preview of the song on one side.
 *
 * @param {'left'|'right'} side
 */
function togglePlay(side) {
  if (!audioFiles[side]) return;

  if (!audioPlayer) {
    audioPlayer = new Audio();
    audioPlayer.preload = 'none';
    audioPlayer.addEventListener('timeupdate', () => {
      if (!audioSide || !audioPlayer.duration) return;
      const percent = `${audioPlayer.currentTime * 100 / audioPlayer.duration}%`;
      const current = document.querySelector(`.${audioSide}.sort.player`);
      current.querySelector('.playfill').style.width = percent;
      current.style.setProperty('--p', percent);   // The ring of the favorites grid uses this.
    });
    audioPlayer.addEventListener('ended', stopAudio);
  }

  const player = document.querySelector(`.${side}.sort.player`);

  if (audioSide === side && !audioPlayer.paused) {
    audioPlayer.pause();
    player.classList.remove('playing');
    player.querySelector('.playbtn').innerHTML = '&#9654;';
    return;
  }

  if (audioSide !== side) {
    stopAudio();
    audioSide = side;
    audioPlayer.src = audioRoot + audioFiles[side];
  }
  audioPlayer.play().catch(stopAudio);
  player.classList.add('playing');
  player.querySelector('.playbtn').innerHTML = '&#10074;&#10074;';
}

/** Stops the audio and resets both players. */
function stopAudio() {
  if (audioPlayer) {
    audioPlayer.pause();
    audioPlayer.removeAttribute('src');
    audioPlayer.load();
  }
  audioSide = '';
  document.querySelectorAll('.sort.player').forEach(el => {
    el.classList.remove('playing');
    el.querySelector('.playbtn').innerHTML = '&#9654;';
    el.querySelector('.playfill').style.width = '0%';
    el.style.setProperty('--p', '0%');
  });
}

/** Shows the current mode on its button. */
function setModeButton() {
  const btn = document.querySelector('.starting.mode.button');
  btn.textContent = `Mode: ${modeNames[sortMode]}`;
  btn.title = modeInfo[sortMode];
}

/** HTML of one row of the favorites grid: cover, title and a play button (with its own player, named by key). */
function pickCard(char, key, idx) {
  const src = char.img.indexOf('data:') === 0 ? char.img : imageRoot + char.img;
  audioFiles[key] = char.audio;
  return `<div class="card favrow" data-i="${idx}"><span class="badge"></span><img class="image" src="${src}"><div class="text"><p>${char.romaji}</p><p class="album">${char.album}</p></div>${char.audio ? `<div class="${key} sort player" data-key="${key}"><span class="playbtn">&#9654;</span><div class="playbar"><div class="playfill"></div></div></div>` : ''}</div>`;
}

/** Makes the cards of a grid clickable. The player on a card doesn't count as a pick. */
function bindPickCards(grid, onPick) {
  grid.querySelectorAll('.card').forEach(card => card.addEventListener('click', () => onPick(card)));
  grid.querySelectorAll('.player').forEach(pl => pl.addEventListener('click', ev => {
    ev.stopPropagation();
    togglePlay(pl.dataset.key);
  }));
}

/**
 * How old the release of a song is (lower is older). Releases have an "order" number, and the older data set
 * only has the "Released on ..." date in its text, which is used instead. If it has several releases, the oldest one.
 */
function releaseOrder(char) {
  const values = [];
  options.forEach(opt => {
    if (opt.key !== 'release' || !('sub' in opt) || !char.opts[opt.key]) return;
    opt.sub.forEach(sub => {
      if (!char.opts[opt.key].includes(sub.key)) return;
      const date = /\d{4}-\d{2}-\d{2}/.exec(sub.tooltip || '');
      if (sub.order !== undefined) values.push(sub.order);
      else if (date) values.push(Date.parse(date[0]));
    });
  });
  return values.length ? Math.min(...values) : Infinity;
}

/** Grid with all the songs to mark the favorites, from the oldest release to the newest. */
function favShow() {
  favPicking = true;
  stopAudio();
  audioFiles = {};
  const order = characterDataToSort
    .map((char, idx) => ({ char, idx, age: releaseOrder(char) }))
    .sort((a, b) => a.age - b.age || a.idx - b.idx);
  const grid = document.querySelector('.favgrid');
  grid.innerHTML = order.map(item => pickCard(item.char, `f${item.idx}`, item.idx)).join('');
  bindPickCards(grid, card => { card.classList.toggle('marked'); favCount(); });
  grid.querySelectorAll('.badge').forEach(el => el.textContent = '\u2713');
  document.querySelector('.favskip.button').style.display = sortMode === 'full' ? '' : 'none';
  document.querySelector('.sorter').style.display = 'none';
  document.querySelector('.filters').style.display = 'none';
  document.querySelector('.favscreen').style.display = 'block';
  favCount();
  window.scrollTo(0, 0);
}

/** Minimum number of favorites to continue. */
function favMin() {
  return sortMode === 'top10' ? Math.min(10, characterDataToSort.length) : 1;
}

/** Updates the counter and the Continue button of the favorites grid. */
function favCount() {
  const count = document.querySelectorAll('.favgrid .card.marked').length;
  const hint  = sortMode === 'top10'
    ? `Tap the songs you like most. About 15 works well, at least ${favMin()}.`
    : 'Tap the songs you like most, or press Skip. Favorites are ranked above the rest and never compared with a song that isn\'t one.';
  document.querySelector('.favhint').textContent = `${hint} Selected: ${count}`;
  document.querySelector('.favdone.button').classList.toggle('disabled', count < favMin());
}

function favHide() {
  stopAudio();
  favPicking = false;
  document.querySelector('.favscreen').style.display = 'none';
  document.querySelector('.sorter').style.display = '';
  document.querySelector('.filters').style.display = '';
  window.scrollTo(0, 0);
}

function favCancel() {
  favStr  = '';
  favDone = false;
  favHide();
}

function favSkip() {
  favStr  = '';
  favDone = true;
  favHide();
  start();
}

function favDone_() {
  if (document.querySelector('.favdone.button').classList.contains('disabled')) return;
  const marks = [];
  document.querySelectorAll('.favgrid .card').forEach(card => marks[Number(card.dataset.i)] = card.classList.contains('marked') ? '1' : '0');
  favStr  = marks.join('');
  favDone = true;
  favHide();
  start();
}

/** Displays the current state of the sorter. */
function display() {
  const percent         = Math.floor(sortedNo * 100 / totalBattles);
  const leftCharIndex   = sortedIndexList[leftIndex][leftInnerIndex];
  const rightCharIndex  = sortedIndexList[rightIndex][rightInnerIndex];
  const leftChar        = characterDataToSort[leftCharIndex];
  const rightChar       = characterDataToSort[rightCharIndex];

  /** A favorite always beats a song that isn't one, so that battle is decided without asking (and it is saved in choices). */
  if (leftChar.isFav !== rightChar.isFav) { pick(leftChar.isFav ? 'left' : 'right', true); return; }

  const charNameDisp = char => `<p>${char.romaji}</p>${char.romaji !== char.name ? `<p class="jp">${char.name}</p>` : ''}<p class="album">${char.album}</p>`;

  progressBar(`Battle No. ${battleNo - autoNo}`, percent);

  document.querySelector('.left.sort.image').src = leftChar.img;
  document.querySelector('.right.sort.image').src = rightChar.img;

  

  document.querySelector('.left.sort.text').innerHTML = charNameDisp(leftChar);
  document.querySelector('.right.sort.text').innerHTML = charNameDisp(rightChar);

  stopAudio();
  audioFiles = { left: leftChar.audio, right: rightChar.audio };
  document.querySelector('.left.sort.player').style.display = leftChar.audio ? 'flex' : 'none';
  document.querySelector('.right.sort.player').style.display = rightChar.audio ? 'flex' : 'none';

  /** Autopick if choice has been given. */
  if (choices.length !== battleNo - 1) {
    switch (Number(choices[battleNo - 1])) {
      case 0: pick('left'); break;
      case 1: pick('right'); break;
      case 2: pick('tie'); break;
      default: break;
    }
  } else { saveProgress('Autosave'); }
}

/**
 * Sort between two character choices or tie.
 * 
 * @param {'left'|'right'|'tie'} sortType
 * @param {boolean} auto True when the sorter decides by itself (favorite vs not favorite). Those are not undone one by one.
 */
function pick(sortType, auto = false) {
  if ((timeTaken && choices.length === battleNo - 1) || loading) { return; }
  else if (!timestamp) { return start(); }

  if (auto) {
    autoNo++;
  } else {
    prevSet    = true;
    autoNoPrev = autoNo;
  }

  if (!auto) {
  sortedIndexListPrev = sortedIndexList.slice(0);
  recordDataListPrev  = recordDataList.slice(0);
  parentIndexListPrev = parentIndexList.slice(0);
  tiedDataListPrev    = tiedDataList.slice(0);

  leftIndexPrev       = leftIndex;
  leftInnerIndexPrev  = leftInnerIndex;
  rightIndexPrev      = rightIndex;
  rightInnerIndexPrev = rightInnerIndex;
  battleNoPrev        = battleNo;
  sortedNoPrev        = sortedNo;
  pointerPrev         = pointer;
  }

  /** 
   * For picking 'left' or 'right':
   * 
   * Input the selected character's index into recordDataList. Increment the pointer of
   * recordDataList. Then, check if there are any ties with this character, and keep
   * incrementing until we find no more ties. 
   */
  switch (sortType) {
    case 'left': {
      if (choices.length === battleNo - 1) { choices += '0'; }
      recordData('left');
      while (tiedDataList[recordDataList[pointer - 1]] != -1) {
        recordData('left');
      }
      break;
    }
    case 'right': {
      if (choices.length === battleNo - 1) { choices += '1'; }
      recordData('right');
      while (tiedDataList[recordDataList [pointer - 1]] != -1) {
        recordData('right');
      }
      break;
    }

  /** 
   * For picking 'tie' (i.e. heretics):
   * 
   * Proceed as if we picked the 'left' character. Then, we record the right character's
   * index value into the list of ties (at the left character's index) and then proceed
   * as if we picked the 'right' character.
   */
    case 'tie': {
      if (choices.length === battleNo - 1) { choices += '2'; }
      recordData('left');
      while (tiedDataList[recordDataList[pointer - 1]] != -1) {
        recordData('left');
      }
      tiedDataList[recordDataList[pointer - 1]] = sortedIndexList[rightIndex][rightInnerIndex];
      recordData('right');
      while (tiedDataList[recordDataList [pointer - 1]] != -1) {
        recordData('right');
      }
      break;
    }
    default: return;
  }

  /**
   * Once we reach the limit of the 'right' character list, we 
   * insert all of the 'left' characters into the record, or vice versa.
   */
  const leftListLen = sortedIndexList[leftIndex].length;
  const rightListLen = sortedIndexList[rightIndex].length;

  if (leftInnerIndex < leftListLen && rightInnerIndex === rightListLen) {
    while (leftInnerIndex < leftListLen) {
      recordData('left');
    }
  } else if (leftInnerIndex === leftListLen && rightInnerIndex < rightListLen) {
    while (rightInnerIndex < rightListLen) {
      recordData('right');
    }
  }

  /**
   * Once we reach the end of both 'left' and 'right' character lists, we can remove 
   * the arrays from the initial mergesort array, since they are now recorded. This
   * record is a sorted version of both lists, so we can replace their original 
   * (unsorted) parent with a sorted version. Purge the record afterwards.
   */
  if (leftInnerIndex === leftListLen && rightInnerIndex === rightListLen) {
    for (let i = 0; i < leftListLen + rightListLen; i++) {
      sortedIndexList[parentIndexList[leftIndex]][i] = recordDataList[i];
    }
    sortedIndexList.pop();
    sortedIndexList.pop();
    leftIndex = leftIndex - 2;
    rightIndex = rightIndex - 2;
    leftInnerIndex = 0;
    rightInnerIndex = 0;

    sortedIndexList.forEach((val, idx) => recordDataList[idx] = 0);
    pointer = 0;
  }

  /**
   * If, after shifting the 'left' index on the sorted list, we reach past the beginning
   * of the sorted array, that means the entire array is now sorted. The original unsorted
   * array in index 0 is now replaced with a sorted version, and we will now output this.
   */
  if (leftIndex < 0) {
    timeTaken = timeTaken || new Date().getTime() - timestamp;

    progressBar(`Battle No. ${battleNo - autoNo} - Completed!`, 100);

    result();
  } else {
    battleNo++;
    display();
  }
}

/**
 * Records data in recordDataList.
 * 
 * @param {'left'|'right'} sortType Record from the left or the right character array.
 */
function recordData(sortType) {
  if (sortType === 'left') {
    recordDataList[pointer] = sortedIndexList[leftIndex][leftInnerIndex];
    leftInnerIndex++;
  } else {
    recordDataList[pointer] = sortedIndexList[rightIndex][rightInnerIndex];
    rightInnerIndex++;
  }
  
  pointer++;
  sortedNo++;
}

/**
 * Modifies the progress bar.
 * 
 * @param {string} indicator
 * @param {number} percentage
 */
function progressBar(indicator, percentage) {
  document.querySelector('.progressbattle').innerHTML = indicator;
  document.querySelector('.progressfill').style.width = `${percentage}%`;
  document.querySelector('.progresstext').innerHTML = `${percentage}%`;
}

/**
 * Shows the result of the sorter.
 */
function result() {
  stopAudio();
  document.querySelectorAll('.finished.button').forEach(el => el.style.display = 'block');
  document.querySelector('.time.taken').style.display = 'block';
  
  document.querySelectorAll('.sorting.button').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.sort.text').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.card').forEach(el => el.style.display = 'none');
  document.querySelector('.filters').style.display = 'none';
  document.querySelector('.info').style.display = 'none';

  const limit = sortMode === 'full' ? characterDataToSort.length : Math.min(10, sortedIndexList[0].length);
  const header = `<div class="result head">${sortMode === 'full' ? 'My Ranking' : 'My Top 10'}</div>`;
  const timeStr = `This sorter was completed on ${new Date(timestamp + timeTaken).toString()} and took ${msToReadableTime(timeTaken)}. <a href="${location.protocol}//${sorterURL}">Do another sorter?</a>`;
  const res = (char, num) => {
    return `<div class="result"><div class="left">${num}</div><div class="right"><span>${char.romaji}</span>${char.romaji !== char.name ? `<span class="jp">${char.name}</span>` : ''}<span class="album">${char.album}</span></div></div>`;
  }

  let rankNum       = 1;
  let tiedRankNum   = 1;

  const finalSortedIndexes = sortedIndexList[0].slice(0);
  const resultTable = document.querySelector('.results');
  const timeElem = document.querySelector('.time.taken');

  resultTable.innerHTML = header;
  resultTable.style.gridTemplateRows = `repeat(${Math.ceil(limit / 2) + 1}, auto)`;
  timeElem.innerHTML = timeStr;

  characterDataToSort.slice(0, limit).forEach((val, idx) => {
    const characterIndex = finalSortedIndexes[idx];
    const character = characterDataToSort[characterIndex];
    resultTable.insertAdjacentHTML('beforeend', res(character, rankNum));
    finalCharacters.push({ rank: rankNum, name: character.name, romaji: character.romaji });

    if (idx < limit - 1) {
      if (tiedDataList[characterIndex] === finalSortedIndexes[idx + 1]) {
        tiedRankNum++;            // Indicates how many people are tied at the same rank.
      } else {
        rankNum += tiedRankNum;   // Add it to the actual ranking, then reset it.
        tiedRankNum = 1;          // The default value is 1, so it increments as normal if no ties.
      }
    }
  });
}

/** Undo previous choice. */
function undo() {
  if (timeTaken || !prevSet) { return; }

  /** Goes back to the last battle that was asked, dropping the automatic ones that came after it. */
  choices = choices.slice(0, battleNoPrev - 1);
  autoNo  = autoNoPrev;

  sortedIndexList = sortedIndexListPrev.slice(0);
  recordDataList  = recordDataListPrev.slice(0);
  parentIndexList = parentIndexListPrev.slice(0);
  tiedDataList    = tiedDataListPrev.slice(0);

  leftIndex       = leftIndexPrev;
  leftInnerIndex  = leftInnerIndexPrev;
  rightIndex      = rightIndexPrev;
  rightInnerIndex = rightInnerIndexPrev;
  battleNo        = battleNoPrev;
  sortedNo        = sortedNoPrev;
  pointer         = pointerPrev;

  display();
}

/** 
 * Save progress to local browser storage.
 * 
 * @param {'Autosave'|'Progress'|'Last Result'} saveType
*/
function saveProgress(saveType) {
  const saveData = generateSavedata();

  localStorage.setItem(`${sorterURL}_saveData`, saveData);
  localStorage.setItem(`${sorterURL}_saveType`, saveType);

  if (saveType !== 'Autosave') {
    const saveURL = `${location.protocol}//${sorterURL}?${saveData}`;
    const inProgressText = 'You may click Load Progress after this to resume, or use this URL.';
    const finishedText = 'You may use this URL to share this result, or click Load Last Result to view it again.';

    window.prompt(saveType === 'Last Result' ? finishedText : inProgressText, saveURL);
  }
}

/**
 * Load progress from local browser storage.
*/
function loadProgress() {
  const saveData = localStorage.getItem(`${sorterURL}_saveData`);

  if (saveData) decodeQuery(saveData);
}

/** 
 * Clear progress from local browser storage.
*/
function clearProgress() {
  storedSaveType = '';

  localStorage.removeItem(`${sorterURL}_saveData`);
  localStorage.removeItem(`${sorterURL}_saveType`);

  document.querySelectorAll('.starting.start.button').forEach(el => el.style['grid-row'] = 'span 6');
  document.querySelectorAll('.starting.load.button').forEach(el => el.style.display = 'none');
}

function generateImage() {
  const timeFinished = timestamp + timeTaken;
  const tzoffset = (new Date()).getTimezoneOffset() * 60000;
  const filename = 'sort-' + (new Date(timeFinished - tzoffset)).toISOString().slice(0, -5).replace('T', '(') + ').png';

  html2canvas(document.querySelector('.results'), { scale: 2 }).then(canvas => {
    const dataURL = canvas.toDataURL();
    const imgButton = document.querySelector('.finished.getimg.button');
    const resetButton = document.createElement('a');

    imgButton.removeEventListener('click', generateImage);
    imgButton.innerHTML = '';
    imgButton.insertAdjacentHTML('beforeend', `<a href="${dataURL}" download="${filename}">Download Image</a><br><br>`);

    resetButton.insertAdjacentText('beforeend', 'Reset');
    resetButton.addEventListener('click', (event) => {
      imgButton.addEventListener('click', generateImage);
      imgButton.innerHTML = 'Generate Image';
      event.stopPropagation();
    });
    imgButton.insertAdjacentElement('beforeend', resetButton);
  });
}

function generateTextList() {
  const data = finalCharacters.reduce((str, char) => {
    str += `${char.rank}. ${char.name}${char.romaji !== char.name ? ` (${char.romaji})` : ''}<br>`;
    return str;
  }, '');
  const oWindow = window.open("", "", "height=640,width=480");
  oWindow.document.write(data);
}

function generateSavedata() {
  const modeStr = sortMode === 'top10' ? `|mf${favStr}` : favStr.includes('1') ? `|mw${favStr}` : '';   // Full mode without favorites adds nothing, so old links keep working.
  const saveData = `${timeError?'|':''}${timestamp}|${timeTaken}|${choices}|${optStr}${suboptStr}${modeStr}`;
  return LZString.compressToEncodedURIComponent(saveData);
}

/** Retrieve latest character data and options from dataset. */
function setLatestDataset() {
  /** Set some defaults. */
  timestamp = 0;
  timeTaken = 0;
  choices   = '';

  const latestDateIndex = Object.keys(dataSet)
    .map(date => new Date(date))
    .reduce((latestDateIndex, currentDate, currentIndex, array) => {
      return currentDate > array[latestDateIndex] ? currentIndex : latestDateIndex;
    }, 0);
  currentVersion = Object.keys(dataSet)[latestDateIndex];

  characterData = dataSet[currentVersion].characterData;
  options = dataSet[currentVersion].options;

  populateOptions();
}

/** Populate option list. */
function populateOptions() {
  const optList = document.querySelector('.options');
  const optInsert = (name, id, tooltip, checked = true, disabled = false) => {
    /** Japanese title in brackets goes below the romanized one. */
    const jp = name.match(/^(.*?)\s*\(([^()]*[^\x00-\x7F][^()]*)\)$/);
    const text = jp ? `${jp[1]}<br><span class="jpname">${jp[2]}</span>` : name;
    return `<div><label title="${tooltip?tooltip:name}"><input id="cb-${id}" type="checkbox" ${checked?'checked':''} ${disabled?'disabled':''}> ${text}</label></div>`;
  };
  const optInsertLarge = (name, id, tooltip, checked = true) => {
    return `<div class="large option"><label title="${tooltip?tooltip:name}"><input id="cbgroup-${id}" type="checkbox" ${checked?'checked':''}> ${name}</label></div>`;
  };

  /** Clear out any previous options. */
  optList.innerHTML = '';

  /** Insert sorter options and set grouped option behavior. */
  options.forEach(opt => {
    if ('sub' in opt) {
      optList.insertAdjacentHTML('beforeend', optInsertLarge(opt.name, opt.key, opt.tooltip, opt.checked));
      /** Suboptions are grouped by release type in collapsible sections. The indexes stay the same. */
      [['single', 'Singles'], ['album', 'Albums']].forEach(([type, title]) => {
        const subs = opt.sub.map((subopt, subindex) => ({ subopt, subindex })).filter(sub => (sub.subopt.type || 'single') === type);
        if (!subs.length) return;
        optList.insertAdjacentHTML('beforeend', `<details class="subgroup"><summary>${title} (${subs.length})</summary><div class="suboptions"></div></details>`);
        const subList = optList.lastElementChild.querySelector('.suboptions');
        subs.forEach(({ subopt, subindex }) => {
          subList.insertAdjacentHTML('beforeend', optInsert(subopt.name, `${opt.key}-${subindex}`, subopt.tooltip, subopt.checked, opt.checked === false));
        });
      });
      optList.insertAdjacentHTML('beforeend', '<hr>');

      const groupbox = document.getElementById(`cbgroup-${opt.key}`);

      groupbox.parentElement.addEventListener('click', () => {
        opt.sub.forEach((subopt, subindex) => {
          document.getElementById(`cb-${opt.key}-${subindex}`).disabled = !groupbox.checked;
          if (groupbox.checked) { document.getElementById(`cb-${opt.key}-${subindex}`).checked = true; }
        });
      });
    } else {
      optList.insertAdjacentHTML('beforeend', optInsert(opt.name, opt.key, opt.tooltip, opt.checked));
    }
  });
}

/**
 * Decodes compressed shareable link query string.
 * @param {string} queryString
 */
function decodeQuery(queryString = window.location.search.slice(1)) {
  let successfulLoad;

  try {
    /** 
     * Retrieve data from compressed string. 
     * @type {string[]}
     */
    const decoded = LZString.decompressFromEncodedURIComponent(queryString).split('|');
    if (!decoded[0]) {
      decoded.splice(0, 1);
      timeError = true;
    }

    timestamp = Number(decoded.splice(0, 1)[0]);
    timeTaken = Number(decoded.splice(0, 1)[0]);
    choices   = decoded.splice(0, 1)[0];

    /** Sorting mode is the last piece, if there is one. */
    sortMode = 'full';
    favStr   = '';
    favDone  = true;
    if (decoded.length > 1 && /^m[wf]/.test(decoded[decoded.length - 1])) {
      const modePiece = decoded.pop();
      sortMode = modePiece[1] === 'f' ? 'top10' : 'full';
      favStr   = modePiece.slice(2);
    }
    setModeButton();

    const optDecoded    = decoded.splice(0, 1)[0];
    const suboptDecoded = decoded.slice(0);

    /** 
     * Get latest data set version from before the timestamp.
     * If timestamp is before or after any of the datasets, get the closest one.
     * If timestamp is between any of the datasets, get the one in the past, but if timeError is set, get the one in the future.
     */
    const seedDate = { str: timestamp, val: new Date(timestamp) };
    const dateMap = Object.keys(dataSet)
      .map(date => {
        return { str: date, val: new Date(date) };
      })
    const beforeDateIndex = dateMap
      .reduce((prevIndex, currDate, currIndex) => {
        return currDate.val < seedDate.val ? currIndex : prevIndex;
      }, -1);
    const afterDateIndex = dateMap.findIndex(date => date.val > seedDate.val);
    
    if (beforeDateIndex === -1) {
      currentVersion = dateMap[afterDateIndex].str;
    } else if (afterDateIndex === -1) {
      currentVersion = dateMap[beforeDateIndex].str;
    } else {
      currentVersion = dateMap[timeError ? afterDateIndex : beforeDateIndex].str;
    }

    options = dataSet[currentVersion].options;
    characterData = dataSet[currentVersion].characterData;

    /** Populate option list and decode options selected. */
    populateOptions();

    let suboptDecodedIndex = 0;
    options.forEach((opt, index) => {
      if ('sub' in opt) {
        const optIsTrue = optDecoded[index] === '1';
        document.getElementById(`cbgroup-${opt.key}`).checked = optIsTrue;
        opt.sub.forEach((subopt, subindex) => {
          const subIsTrue = optIsTrue ? suboptDecoded[suboptDecodedIndex][subindex] === '1' : true;
          document.getElementById(`cb-${opt.key}-${subindex}`).checked = subIsTrue;
          document.getElementById(`cb-${opt.key}-${subindex}`).disabled = optIsTrue;
        });
        suboptDecodedIndex = suboptDecodedIndex + optIsTrue ? 1 : 0;
      } else { document.getElementById(`cb-${opt.key}`).checked = optDecoded[index] === '1'; }
    });

    successfulLoad = true;
  } catch (err) {
    console.error(`Error loading shareable link: ${err}`);
    setLatestDataset(); // Restore to default function if loading link does not work.
  }

  if (successfulLoad) { start(); }
}

/** 
 * Preloads images in the filtered character data and converts to base64 representation.
*/
function preloadImages() {
  const totalLength = characterDataToSort.length;
  let imagesLoaded = 0;

  const loadImage = async (src) => {
    const blob = await fetch(src).then(res => res.blob());
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = ev => {
        progressBar(`Loading Image ${++imagesLoaded}`, Math.floor(imagesLoaded * 100 / totalLength));
        res(ev.target.result);
      };
      reader.onerror = rej;
      reader.readAsDataURL(blob);
    });
  };

  return Promise.all(characterDataToSort.map(async (char, idx) => {
    characterDataToSort[idx].img = await loadImage(imageRoot + char.img);
  }));
}

/**
 * Returns a readable time string from milliseconds.
 * 
 * @param {number} milliseconds
 */
function msToReadableTime (milliseconds) {
  let t = Math.floor(milliseconds/1000);
  const years = Math.floor(t / 31536000);
  t = t - (years * 31536000);
  const months = Math.floor(t / 2592000);
  t = t - (months * 2592000);
  const days = Math.floor(t / 86400);
  t = t - (days * 86400);
  const hours = Math.floor(t / 3600);
  t = t - (hours * 3600);
  const minutes = Math.floor(t / 60);
  t = t - (minutes * 60);
  const content = [];
	if (years) content.push(years + " year" + (years > 1 ? "s" : ""));
	if (months) content.push(months + " month" + (months > 1 ? "s" : ""));
	if (days) content.push(days + " day" + (days > 1 ? "s" : ""));
	if (hours) content.push(hours + " hour"  + (hours > 1 ? "s" : ""));
	if (minutes) content.push(minutes + " minute" + (minutes > 1 ? "s" : ""));
	if (t) content.push(t + " second" + (t > 1 ? "s" : ""));
  return content.slice(0,3).join(', ');
}

/**
 * Reduces text to a certain rendered width.
 *
 * @param {string} text Text to reduce.
 * @param {string} font Font applied to text. Example "12px Arial".
 * @param {number} width Width of desired width in px.
 */
function reduceTextWidth(text, font, width) {
  const canvas = reduceTextWidth.canvas || (reduceTextWidth.canvas = document.createElement("canvas"));
  const context = canvas.getContext("2d");
  context.font = font;
  if (context.measureText(text).width < width * 0.8) {
    return text;
  } else {
    let reducedText = text;
    while (context.measureText(reducedText).width + context.measureText('..').width > width * 0.8) {
      reducedText = reducedText.slice(0, -1);
    }
    return reducedText + '..';
  }
}

window.onload = init;
