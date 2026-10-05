// dataSetVersion = "2019-11-26"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSetVersion = "2026-10-05";
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Release",
    key: "release",
    tooltip: "Check this to restrict to certain singles or albums. If a song is on several of the ones you pick, only its first version is used.",
    checked: true,
    sub: [
      { name: "Bokura no Ao (僕らの青)", tooltip: "Released on 2026-08-12", key: "bokura-no-ao", type: "single", order: 41 },
      { name: "Heart Bouquet (ハートブーケ)", tooltip: "Released on 2026-06-07", key: "heart-bouquet", type: "single", order: 40 },
      { name: "Ikiterya Ii (生きてりゃいい)", tooltip: "Released on 2026-05-13", key: "ikiterya-ii", type: "single", order: 39 },
      { name: "Watashiwa Watashino Kotoga Suki (私は、わたしの事が好き。)", tooltip: "Released on 2026-04-15", key: "watashi-wa-watashi", type: "single", order: 38 },
      { name: "Sekai wa Koi ni Ochiteiru (世界は恋に落ちている)", tooltip: "Released on 2026-03-05", key: "sekai-wa-koi", type: "single", order: 37 },
      { name: "Miageru Tabi ni, Koi wo Suru. (見上げるたびに、恋をする。)", tooltip: "Released on 2025-12-17", key: "miageru-tabi-ni", type: "album", order: 36 },
      { name: "Hana wa Chikai wo Wasurenai (花は誓いを忘れない)", tooltip: "Digital single (2025)", key: "hana-wa-chikai-wo-wasurenai", type: "single", order: 35 },
      { name: "Byoumei Koiwazurai (病名恋ワズライ)", tooltip: "Released on 2025-11-21", key: "byoumei-koiwazurai", type: "single", order: 34 },
      { name: "Kono Sekai wa Uso de Dekiteiru (この世界は嘘でできている)", tooltip: "Digital single (2025)", key: "kono-sekai-wa-uso-de-dekiteiru", type: "single", order: 33 },
      { name: "Life Quest (ライフクエスト)", tooltip: "Digital single (2025)", key: "life-quest", type: "single", order: 32 },
      { name: "Hatsukoi no Kotae (初恋のこたえ。)", tooltip: "Digital single (2025)", key: "hatsukoi-no-kotae", type: "single", order: 31 },
      { name: "Idol Ishou (アイドル衣装)", tooltip: "Digital single (2025)", key: "idol-ishou", type: "single", order: 30 },
      { name: "Melancholic Honey (メランコリックハニー)", tooltip: "Released on 2025-04-30", key: "melancholic-honey", type: "single", order: 29 },
      { name: "Cute for life", tooltip: "Digital single (2025)", key: "cute-for-life", type: "single", order: 28 },
      { name: "Koakuma datte Kamawanai! (小悪魔だってかまわない!)", tooltip: "Released on 2025-02-09", key: "koakuma-datte", type: "single", order: 27 },
      { name: "I'M YOUR IDOL / Adrenaline Game (I'M YOUR IDOL／アドレナリンゲーム)", tooltip: "Single (2024)", key: "i-m-your-idol-adrenaline-game", type: "single", order: 26 },
      { name: "I'M YOUR IDOL", tooltip: "Digital single (2024)", key: "i-m-your-idol", type: "single", order: 25 },
      { name: "Adrenaline Game (アドレナリンゲーム)", tooltip: "Digital single (2024)", key: "adrenaline-game", type: "single", order: 24 },
      { name: "LOVE ANTHEM", tooltip: "Released on 2024-09-09", key: "love-anthem", type: "single", order: 23 },
      { name: "Mote Chen! (モテチェン！)", tooltip: "Digital single (2024)", key: "mote-chen", type: "single", order: 22 },
      { name: "Watashi yori Suki de Ite (私より好きでいて)", tooltip: "Digital single (2024)", key: "watashi-yori-suki-de-ite", type: "single", order: 21 },
      { name: "Maid Shijou Shugi (メイド☆至上主義)", tooltip: "Released on 2024-05-12", key: "maid-shijou-shugi", type: "single", order: 20 },
      { name: "Oshi no Mahou (推しの魔法)", tooltip: "Released on 2024-03-25", key: "oshi-no-mahou", type: "single", order: 19 },
      { name: "Utsukushiku Ikiro / Koi wo Shitta Sekai (美しく生きろ／恋を知った世界)", tooltip: "Released on 2024-02-21", key: "utsukushiku-ikiro", type: "single", order: 18 },
      { name: "Watashi wa Kaibutsu (私は怪物)", tooltip: "Digital single (2024)", key: "watashi-wa-kaibutsu", type: "single", order: 17 },
      { name: "Kawaii tte Iwaretai (可愛いって言われたい)", tooltip: "Digital single (2024)", key: "kawaii-tte-iwaretai", type: "single", order: 16 },
      { name: "Utsukushiku Ikiro (美しく生きろ)", tooltip: "Digital single (2024)", key: "utsukushiku-ikiro-digital", type: "single", order: 15 },
      { name: "Itsuka Watashi ga Mama ni Nattara (いつか私がママになったら)", tooltip: "Digital single (2023)", key: "itsuka-watashi-ga-mama-ni-nattara", type: "single", order: 14 },
      { name: "17-sai (17歳)", tooltip: "Released on 2023-09-09", key: "17sai", type: "single", order: 13 },
      { name: "Sukicchuu no! (すきっちゅーの！)", tooltip: "Released on 2023-09-03", key: "sukicchuu-no", type: "single", order: 12 },
      { name: "Getsuyoubi no Yuuutsu (月曜日の憂鬱)", tooltip: "Released on 2023-07-23", key: "getsuyoubi-no-yuuutsu", type: "single", order: 11 },
      { name: "Heroine wa Heikin Ika (ヒロインは平均以下。)", tooltip: "Released on 2023-07-15", key: "heroine-wa-heikin-ika", type: "single", order: 10 },
      { name: "Kessen Spirit (決戦スピリット)", tooltip: "Released on 2023-07-09", key: "kessen-spirit", type: "single", order: 9 },
      { name: "Hatsukoi no Hito (初恋のひと。)", tooltip: "Released on 2023-07-04", key: "hatsukoi-no-hito", type: "single", order: 8 },
      { name: "Kakumei no Joou (革命の女王)", tooltip: "Released on 2023-04-04", key: "kakumei-no-joou", type: "single", order: 7 },
      { name: "Boku wa Kimi ni Narenai (僕は君になれない)", tooltip: "Released on 2023-04-04", key: "boku-wa-kimi-ni-narenai", type: "single", order: 6 },
      { name: "Otokonoko no Mokuteki wa Nani? (男の子の目的は何？)", tooltip: "Released on 2023-03-20", key: "otokonoko-no-mokuteki", type: "single", order: 5 },
      { name: "Otome Domo yo (乙女どもよ。)", tooltip: "Released on 2023-02-04", key: "otome-domo-yo", type: "single", order: 4 },
      { name: "Kawaikute Gomen (可愛くてごめん)", tooltip: "Released on 2023-01-27", key: "kawaikute-gomen", type: "single", order: 3 },
      { name: "Onnanoko wa Tsuyoi (女の子は強い)", tooltip: "Released on 2022-12-26", key: "onnanoko-wa-tsuyoi", type: "single", order: 2 },
      { name: "Anti Fan (アンチファン)", tooltip: "Released on 2022-10-01", key: "anti-fan", type: "single", order: 1 }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "僕らの青",
    romaji: "Bokura no Ao",
    song: "bokura-no-ao",
    album: "Single (2026)",
    img: "bokura-no-ao.jpg",
    audio: "bokura-no-ao.mp3",
    opts: {
      release: ["bokura-no-ao"]
    }
  },
  {
    name: "ハートブーケ",
    romaji: "Heart Bouquet",
    song: "heart-bouquet",
    album: "Single (2026)",
    img: "heart-bouquet.jpg",
    audio: "heart-bouquet.mp3",
    opts: {
      release: ["heart-bouquet"]
    }
  },
  {
    name: "生きてりゃいい",
    romaji: "Ikiterya Ii",
    song: "ikiterya-ii",
    album: "Single (2026)",
    img: "ikiterya-ii.jpg",
    audio: "ikiterya-ii.mp3",
    opts: {
      release: ["ikiterya-ii"]
    }
  },
  {
    name: "私は、わたしの事が好き。",
    romaji: "Watashiwa Watashino Kotoga Suki",
    song: "watashiwa-watashino-kotoga-suki",
    album: "Single (2026)",
    img: "watashi-wa-watashi.jpg",
    audio: "watashiwa-watashino-kotoga-suki--watashi-wa-watashi.mp3",
    opts: {
      release: ["watashi-wa-watashi"]
    }
  },
  {
    name: "世界は恋に落ちている",
    romaji: "Sekai wa Koi ni Ochiteiru",
    song: "sekai-wa-koi-ni-ochiteiru",
    album: "Single (2026)",
    img: "sekai-wa-koi.jpg",
    audio: "sekai-wa-koi-ni-ochiteiru--sekai-wa-koi.mp3",
    opts: {
      release: ["sekai-wa-koi"]
    }
  },
  {
    name: "初恋のこたえ。",
    romaji: "Hatsukoi no Kotae",
    song: "hatsukoi-no-kotae",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "hatsukoi-no-kotae--miageru-tabi-ni.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "ライフクエスト",
    romaji: "Life Quest",
    song: "life-quest",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "life-quest--miageru-tabi-ni.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "花は誓いを忘れない",
    romaji: "Hana wa Chikai wo Wasurenai",
    song: "hana-wa-chikai-wo-wasurenai",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "hana-wa-chikai-wo-wasurenai--miageru-tabi-ni.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "Cute for life",
    romaji: "Cute for life",
    song: "cute-for-life",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "cute-for-life--miageru-tabi-ni.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "恋を知った世界",
    romaji: "Koi wo Shitta Sekai",
    song: "koi-wo-shitta-sekai",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "koi-wo-shitta-sekai--miageru-tabi-ni.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "I'M YOUR IDOL",
    romaji: "I'M YOUR IDOL",
    song: "i-m-your-idol",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "i-m-your-idol--miageru-tabi-ni.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "アイのウイルス",
    romaji: "Ai no Virus",
    song: "ai-no-virus",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "ai-no-virus--miageru-tabi-ni.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "アイドル衣装",
    romaji: "Idol Ishou",
    song: "idol-ishou",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "idol-ishou--miageru-tabi-ni.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "モテチェン！",
    romaji: "Mote Chen!",
    song: "mote-chen",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "mote-chen--miageru-tabi-ni.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "メランコリックハニー",
    romaji: "Melancholic Honey",
    song: "melancholic-honey",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "melancholic-honey--miageru-tabi-ni.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "いつか私がママになったら",
    romaji: "Itsuka Watashi ga Mama ni Nattara",
    song: "itsuka-watashi-ga-mama-ni-nattara",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "itsuka-watashi-ga-mama-ni-nattara--miageru-tabi-ni.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "Overture",
    romaji: "Overture",
    song: "overture",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "overture--miageru-tabi-ni.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "私より好きでいて",
    romaji: "Watashi yori Suki de Ite",
    song: "watashi-yori-suki-de-ite",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "watashi-yori-suki-de-ite--miageru-tabi-ni.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "アドレナリンゲーム",
    romaji: "Adrenaline Game",
    song: "adrenaline-game",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "adrenaline-game--miageru-tabi-ni.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "この世界は嘘でできている",
    romaji: "Kono Sekai wa Uso de Dekiteiru",
    song: "kono-sekai-wa-uso-de-dekiteiru",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "kono-sekai-wa-uso-de-dekiteiru--miageru-tabi-ni.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "美しく生きろ",
    romaji: "Utsukushiku Ikiro",
    song: "utsukushiku-ikiro",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "utsukushiku-ikiro--miageru-tabi-ni.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "花は誓いを忘れない",
    romaji: "Hana wa Chikai wo Wasurenai",
    song: "hana-wa-chikai-wo-wasurenai",
    album: "Single (2025)",
    img: "hana-wa-chikai-wo-wasurenai.jpg",
    audio: "hana-wa-chikai-wo-wasurenai.mp3",
    opts: {
      release: ["hana-wa-chikai-wo-wasurenai"]
    }
  },
  {
    name: "病名恋ワズライ",
    romaji: "Byoumei Koiwazurai",
    song: "byoumei-koiwazurai",
    album: "Single (2025)",
    img: "byoumei-koiwazurai.jpg",
    audio: "byoumei-koiwazurai.mp3",
    opts: {
      release: ["byoumei-koiwazurai"]
    }
  },
  {
    name: "この世界は嘘でできている",
    romaji: "Kono Sekai wa Uso de Dekiteiru",
    song: "kono-sekai-wa-uso-de-dekiteiru",
    album: "Single (2025)",
    img: "kono-sekai-wa-uso-de-dekiteiru.jpg",
    audio: "kono-sekai-wa-uso-de-dekiteiru.mp3",
    opts: {
      release: ["kono-sekai-wa-uso-de-dekiteiru"]
    }
  },
  {
    name: "ライフクエスト",
    romaji: "Life Quest",
    song: "life-quest",
    album: "Single (2025)",
    img: "life-quest.jpg",
    audio: "life-quest.mp3",
    opts: {
      release: ["life-quest"]
    }
  },
  {
    name: "初恋のこたえ。",
    romaji: "Hatsukoi no Kotae",
    song: "hatsukoi-no-kotae",
    album: "Single (2025)",
    img: "hatsukoi-no-kotae.jpg",
    audio: "hatsukoi-no-kotae.mp3",
    opts: {
      release: ["hatsukoi-no-kotae"]
    }
  },
  {
    name: "アイドル衣装",
    romaji: "Idol Ishou",
    song: "idol-ishou",
    album: "Single (2025)",
    img: "idol-ishou.jpg",
    audio: "idol-ishou.mp3",
    opts: {
      release: ["idol-ishou"]
    }
  },
  {
    name: "メランコリックハニー",
    romaji: "Melancholic Honey",
    song: "melancholic-honey",
    album: "Single (2025)",
    img: "melancholic-honey.jpg",
    audio: "melancholic-honey.mp3",
    opts: {
      release: ["melancholic-honey"]
    }
  },
  {
    name: "Cute for life",
    romaji: "Cute for life",
    song: "cute-for-life",
    album: "Single (2025)",
    img: "cute-for-life.jpg",
    audio: "cute-for-life.mp3",
    opts: {
      release: ["cute-for-life"]
    }
  },
  {
    name: "小悪魔だってかまわない!",
    romaji: "Koakuma datte Kamawanai!",
    song: "koakuma-datte-kamawanai",
    album: "Single (2025)",
    img: "koakuma-datte.jpg",
    audio: "koakuma-datte-kamawanai--koakuma-datte.mp3",
    opts: {
      release: ["koakuma-datte"]
    }
  },
  {
    name: "アイのウイルス",
    romaji: "Ai no Virus",
    song: "ai-no-virus",
    album: "Single: I'M YOUR IDOL / Adrenaline Game (2024)",
    img: "i-m-your-idol-adrenaline-game.jpg",
    audio: "ai-no-virus--i-m-your-idol-adrenaline-game.mp3",
    opts: {
      release: ["i-m-your-idol-adrenaline-game"]
    }
  },
  {
    name: "モテチェン！",
    romaji: "Mote Chen!",
    song: "mote-chen",
    album: "Single: I'M YOUR IDOL / Adrenaline Game (2024)",
    img: "i-m-your-idol-adrenaline-game.jpg",
    audio: "mote-chen--i-m-your-idol-adrenaline-game.mp3",
    opts: {
      release: ["i-m-your-idol-adrenaline-game"]
    }
  },
  {
    name: "I'M YOUR IDOL",
    romaji: "I'M YOUR IDOL",
    song: "i-m-your-idol",
    album: "Single (2024)",
    img: "i-m-your-idol-adrenaline-game.jpg",
    audio: "i-m-your-idol--i-m-your-idol-adrenaline-game.mp3",
    opts: {
      release: ["i-m-your-idol-adrenaline-game"]
    }
  },
  {
    name: "アドレナリンゲーム",
    romaji: "Adrenaline Game",
    song: "adrenaline-game",
    album: "Single (2024)",
    img: "i-m-your-idol-adrenaline-game.jpg",
    audio: "adrenaline-game--i-m-your-idol-adrenaline-game.mp3",
    opts: {
      release: ["i-m-your-idol-adrenaline-game"]
    }
  },
  {
    name: "私より好きでいて",
    romaji: "Watashi yori Suki de Ite",
    song: "watashi-yori-suki-de-ite",
    album: "Single: I'M YOUR IDOL / Adrenaline Game (2024)",
    img: "i-m-your-idol-adrenaline-game.jpg",
    audio: "watashi-yori-suki-de-ite--i-m-your-idol-adrenaline-game.mp3",
    opts: {
      release: ["i-m-your-idol-adrenaline-game"]
    }
  },
  {
    name: "I'M YOUR IDOL",
    romaji: "I'M YOUR IDOL",
    song: "i-m-your-idol",
    album: "Single (2024)",
    img: "i-m-your-idol.jpg",
    audio: "i-m-your-idol.mp3",
    opts: {
      release: ["i-m-your-idol"]
    }
  },
  {
    name: "アドレナリンゲーム",
    romaji: "Adrenaline Game",
    song: "adrenaline-game",
    album: "Single (2024)",
    img: "adrenaline-game.jpg",
    audio: "adrenaline-game.mp3",
    opts: {
      release: ["adrenaline-game"]
    }
  },
  {
    name: "LOVE ANTHEM",
    romaji: "LOVE ANTHEM",
    song: "love-anthem",
    album: "Single (2024)",
    img: "love-anthem.jpg",
    audio: "love-anthem.mp3",
    opts: {
      release: ["love-anthem"]
    }
  },
  {
    name: "モテチェン！",
    romaji: "Mote Chen!",
    song: "mote-chen",
    album: "Single (2024)",
    img: "mote-chen.jpg",
    audio: "mote-chen.mp3",
    opts: {
      release: ["mote-chen"]
    }
  },
  {
    name: "私より好きでいて",
    romaji: "Watashi yori Suki de Ite",
    song: "watashi-yori-suki-de-ite",
    album: "Single (2024)",
    img: "watashi-yori-suki-de-ite.jpg",
    audio: "watashi-yori-suki-de-ite.mp3",
    opts: {
      release: ["watashi-yori-suki-de-ite"]
    }
  },
  {
    name: "メイド☆至上主義",
    romaji: "Maid Shijou Shugi",
    song: "maid-shijou-shugi",
    album: "Single (2024)",
    img: "maid-shijou-shugi.jpg",
    audio: "maid-shijou-shugi.mp3",
    opts: {
      release: ["maid-shijou-shugi"]
    }
  },
  {
    name: "推しの魔法",
    romaji: "Oshi no Mahou",
    song: "oshi-no-mahou",
    album: "Single (2024)",
    img: "oshi-no-mahou.jpg",
    audio: "oshi-no-mahou.mp3",
    opts: {
      release: ["oshi-no-mahou"]
    }
  },
  {
    name: "可愛いって言われたい",
    romaji: "Kawaii tte Iwaretai",
    song: "kawaii-tte-iwaretai",
    album: "Single: Utsukushiku Ikiro / Koi wo Shitta Sekai (2024)",
    img: "utsukushiku-ikiro.jpg",
    audio: "kawaii-tte-iwaretai--utsukushiku-ikiro.mp3",
    opts: {
      release: ["utsukushiku-ikiro"]
    }
  },
  {
    name: "恋を知った世界",
    romaji: "Koi wo Shitta Sekai",
    song: "koi-wo-shitta-sekai",
    album: "Single (2024)",
    img: "utsukushiku-ikiro.jpg",
    audio: "koi-wo-shitta-sekai--utsukushiku-ikiro.mp3",
    opts: {
      release: ["utsukushiku-ikiro"]
    }
  },
  {
    name: "いつか私がママになったら",
    romaji: "Itsuka Watashi ga Mama ni Nattara",
    song: "itsuka-watashi-ga-mama-ni-nattara",
    album: "Single: Utsukushiku Ikiro / Koi wo Shitta Sekai (2024)",
    img: "utsukushiku-ikiro.jpg",
    audio: "itsuka-watashi-ga-mama-ni-nattara--utsukushiku-ikiro.mp3",
    opts: {
      release: ["utsukushiku-ikiro"]
    }
  },
  {
    name: "私は怪物",
    romaji: "Watashi wa Kaibutsu",
    song: "watashi-wa-kaibutsu",
    album: "Single: Utsukushiku Ikiro / Koi wo Shitta Sekai (2024)",
    img: "utsukushiku-ikiro.jpg",
    audio: "watashi-wa-kaibutsu--utsukushiku-ikiro.mp3",
    opts: {
      release: ["utsukushiku-ikiro"]
    }
  },
  {
    name: "美しく生きろ",
    romaji: "Utsukushiku Ikiro",
    song: "utsukushiku-ikiro",
    album: "Single (2024)",
    img: "utsukushiku-ikiro.jpg",
    audio: "utsukushiku-ikiro.mp3",
    opts: {
      release: ["utsukushiku-ikiro"]
    }
  },
  {
    name: "私は怪物",
    romaji: "Watashi wa Kaibutsu",
    song: "watashi-wa-kaibutsu",
    album: "Single (2024)",
    img: "watashi-wa-kaibutsu.jpg",
    audio: "watashi-wa-kaibutsu.mp3",
    opts: {
      release: ["watashi-wa-kaibutsu"]
    }
  },
  {
    name: "可愛いって言われたい",
    romaji: "Kawaii tte Iwaretai",
    song: "kawaii-tte-iwaretai",
    album: "Single (2024)",
    img: "kawaii-tte-iwaretai.jpg",
    audio: "kawaii-tte-iwaretai.mp3",
    opts: {
      release: ["kawaii-tte-iwaretai"]
    }
  },
  {
    name: "美しく生きろ",
    romaji: "Utsukushiku Ikiro",
    song: "utsukushiku-ikiro",
    album: "Single (2024)",
    img: "utsukushiku-ikiro-digital.jpg",
    audio: "utsukushiku-ikiro--utsukushiku-ikiro-digital.mp3",
    opts: {
      release: ["utsukushiku-ikiro-digital"]
    }
  },
  {
    name: "いつか私がママになったら",
    romaji: "Itsuka Watashi ga Mama ni Nattara",
    song: "itsuka-watashi-ga-mama-ni-nattara",
    album: "Single (2023)",
    img: "itsuka-watashi-ga-mama-ni-nattara.jpg",
    audio: "itsuka-watashi-ga-mama-ni-nattara.mp3",
    opts: {
      release: ["itsuka-watashi-ga-mama-ni-nattara"]
    }
  },
  {
    name: "17歳",
    romaji: "17-sai",
    song: "17-sai",
    album: "Single (2023)",
    img: "17sai.jpg",
    audio: "17-sai--17sai.mp3",
    opts: {
      release: ["17sai"]
    }
  },
  {
    name: "すきっちゅーの！",
    romaji: "Sukicchuu no!",
    song: "sukicchuu-no",
    album: "Single (2023)",
    img: "sukicchuu-no.jpg",
    audio: "sukicchuu-no.mp3",
    opts: {
      release: ["sukicchuu-no"]
    }
  },
  {
    name: "月曜日の憂鬱",
    romaji: "Getsuyoubi no Yuuutsu",
    song: "getsuyoubi-no-yuuutsu",
    album: "Single (2023)",
    img: "getsuyoubi-no-yuuutsu.jpg",
    audio: "getsuyoubi-no-yuuutsu.mp3",
    opts: {
      release: ["getsuyoubi-no-yuuutsu"]
    }
  },
  {
    name: "決戦スピリット",
    romaji: "Kessen Spirit",
    song: "kessen-spirit",
    album: "Single (2023)",
    img: "kessen-spirit.jpg",
    audio: "kessen-spirit.mp3",
    opts: {
      release: ["kessen-spirit"]
    }
  },
  {
    name: "初恋のひと。",
    romaji: "Hatsukoi no Hito",
    song: "hatsukoi-no-hito",
    album: "Single (2023)",
    img: "hatsukoi-no-hito.jpg",
    audio: "hatsukoi-no-hito.mp3",
    opts: {
      release: ["hatsukoi-no-hito"]
    }
  },
  {
    name: "ヒロインは平均以下。",
    romaji: "Heroine wa Heikin Ika",
    song: "heroine-wa-heikin-ika",
    album: "Single (2023)",
    img: "heroine-wa-heikin-ika.jpg",
    audio: "heroine-wa-heikin-ika.mp3",
    opts: {
      release: ["heroine-wa-heikin-ika"]
    }
  },
  {
    name: "革命の女王",
    romaji: "Kakumei no Joou",
    song: "kakumei-no-joou",
    album: "Single (2023)",
    img: "kakumei-no-joou.jpg",
    audio: "kakumei-no-joou.mp3",
    opts: {
      release: ["kakumei-no-joou"]
    }
  },
  {
    name: "僕は君になれない",
    romaji: "Boku wa Kimi ni Narenai",
    song: "boku-wa-kimi-ni-narenai",
    album: "Single (2023)",
    img: "boku-wa-kimi-ni-narenai.jpg",
    audio: "boku-wa-kimi-ni-narenai.mp3",
    opts: {
      release: ["boku-wa-kimi-ni-narenai"]
    }
  },
  {
    name: "男の子の目的は何？",
    romaji: "Otokonoko no Mokuteki wa Nani?",
    song: "otokonoko-no-mokuteki-wa-nani",
    album: "Single (2023)",
    img: "otokonoko-no-mokuteki.jpg",
    audio: "otokonoko-no-mokuteki-wa-nani--otokonoko-no-mokuteki.mp3",
    opts: {
      release: ["otokonoko-no-mokuteki"]
    }
  },
  {
    name: "乙女どもよ。",
    romaji: "Otome Domo yo",
    song: "otome-domo-yo",
    album: "Single (2023)",
    img: "otome-domo-yo.jpg",
    audio: "otome-domo-yo.mp3",
    opts: {
      release: ["otome-domo-yo"]
    }
  },
  {
    name: "可愛くてごめん",
    romaji: "Kawaikute Gomen",
    song: "kawaikute-gomen",
    album: "Single (2023)",
    img: "kawaikute-gomen.jpg",
    audio: "kawaikute-gomen.mp3",
    opts: {
      release: ["kawaikute-gomen"]
    }
  },
  {
    name: "女の子は強い",
    romaji: "Onnanoko wa Tsuyoi",
    song: "onnanoko-wa-tsuyoi",
    album: "Single (2022)",
    img: "onnanoko-wa-tsuyoi.jpg",
    audio: "onnanoko-wa-tsuyoi.mp3",
    opts: {
      release: ["onnanoko-wa-tsuyoi"]
    }
  },
  {
    name: "アンチファン",
    romaji: "Anti Fan",
    song: "anti-fan",
    album: "Single (2022)",
    img: "anti-fan.jpg",
    audio: "anti-fan.mp3",
    opts: {
      release: ["anti-fan"]
    }
  },
  {
    name: "ユメムスビ",
    romaji: "Yume Musubi",
    song: "yume-musubi",
    album: "Single: Anti Fan (2022)",
    img: "anti-fan.jpg",
    audio: "yume-musubi--anti-fan.mp3",
    opts: {
      release: ["anti-fan"]
    }
  }
];

