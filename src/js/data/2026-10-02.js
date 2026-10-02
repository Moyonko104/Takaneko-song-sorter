// dataSetVersion = "2019-11-26"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSetVersion = "2026-10-02";
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Release",
    key: "release",
    tooltip: "Check this to restrict to certain singles or albums.",
    checked: true,
    sub: [
      { name: "Bokura no Ao (僕らの青)", tooltip: "Released on 2026-08-12", key: "bokura-no-ao", type: "single" },
      { name: "Heart Bouquet (ハートブーケ)", tooltip: "Released on 2026-06-07", key: "heart-bouquet", type: "single" },
      { name: "Ikiterya Ii (生きてりゃいい)", tooltip: "Released on 2026-05-13", key: "ikiterya-ii", type: "single" },
      { name: "Watashiwa Watashino Kotoga Suki (私は、わたしの事が好き。)", tooltip: "Released on 2026-04-15", key: "watashi-wa-watashi", type: "single" },
      { name: "Sekai wa Koi ni Ochiteiru (世界は恋に落ちている)", tooltip: "Released on 2026-03-05", key: "sekai-wa-koi", type: "single" },
      { name: "Miageru Tabi ni, Koi wo Suru. (見上げるたびに、恋をする。)", tooltip: "Released on 2025-12-17", key: "miageru-tabi-ni", type: "album" },
      { name: "Byoumei Koiwazurai (病名恋ワズライ)", tooltip: "Released on 2025-11-21", key: "byoumei-koiwazurai", type: "single" },
      { name: "Melancholic Honey (メランコリックハニー)", tooltip: "Released on 2025-04-30", key: "melancholic-honey", type: "single" },
      { name: "Koakuma datte Kamawanai! (小悪魔だってかまわない!)", tooltip: "Released on 2025-02-09", key: "koakuma-datte", type: "single" },
      { name: "LOVE ANTHEM", tooltip: "Released on 2024-09-09", key: "love-anthem", type: "single" },
      { name: "Maid Shijou Shugi (メイド☆至上主義)", tooltip: "Released on 2024-05-12", key: "maid-shijou-shugi", type: "single" },
      { name: "Oshi no Mahou (推しの魔法)", tooltip: "Released on 2024-03-25", key: "oshi-no-mahou", type: "single" },
      { name: "Utsukushiku Ikiro / Koi wo Shitta Sekai (美しく生きろ／恋を知った世界)", tooltip: "Released on 2024-02-21", key: "utsukushiku-ikiro", type: "single" },
      { name: "17-sai (17歳)", tooltip: "Released on 2023-09-09", key: "17sai", type: "single" },
      { name: "Sukicchuu no! (すきっちゅーの！)", tooltip: "Released on 2023-09-03", key: "sukicchuu-no", type: "single" },
      { name: "Getsuyoubi no Yuuutsu (月曜日の憂鬱)", tooltip: "Released on 2023-07-23", key: "getsuyoubi-no-yuuutsu", type: "single" },
      { name: "Heroine wa Heikin Ika (ヒロインは平均以下。)", tooltip: "Released on 2023-07-15", key: "heroine-wa-heikin-ika", type: "single" },
      { name: "Kessen Spirit (決戦スピリット)", tooltip: "Released on 2023-07-09", key: "kessen-spirit", type: "single" },
      { name: "Hatsukoi no Hito (初恋のひと。)", tooltip: "Released on 2023-07-04", key: "hatsukoi-no-hito", type: "single" },
      { name: "Kakumei no Joou (革命の女王)", tooltip: "Released on 2023-04-04", key: "kakumei-no-joou", type: "single" },
      { name: "Boku wa Kimi ni Narenai (僕は君になれない)", tooltip: "Released on 2023-04-04", key: "boku-wa-kimi-ni-narenai", type: "single" },
      { name: "Otokonoko no Mokuteki wa Nani? (男の子の目的は何？)", tooltip: "Released on 2023-03-20", key: "otokonoko-no-mokuteki", type: "single" },
      { name: "Otome Domo yo (乙女どもよ。)", tooltip: "Released on 2023-02-04", key: "otome-domo-yo", type: "single" },
      { name: "Kawaikute Gomen (可愛くてごめん)", tooltip: "Released on 2023-01-27", key: "kawaikute-gomen", type: "single" },
      { name: "Onnanoko wa Tsuyoi (女の子は強い)", tooltip: "Released on 2022-12-26", key: "onnanoko-wa-tsuyoi", type: "single" },
      { name: "Anti Fan (アンチファン)", tooltip: "Released on 2022-10-01", key: "anti-fan", type: "single" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "メランコリックハニー",
    romaji: "Melancholic Honey",
    album: "Single (2025)",
    img: "melancholic-honey.jpg",
    audio: "melancholic-honey.mp3",
    opts: {
      release: ["melancholic-honey"]
    }
  },
  {
    name: "病名恋ワズライ",
    romaji: "Byoumei Koiwazurai",
    album: "Single (2025)",
    img: "byoumei-koiwazurai.jpg",
    audio: "byoumei-koiwazurai.mp3",
    opts: {
      release: ["byoumei-koiwazurai"]
    }
  },
  {
    name: "僕らの青",
    romaji: "Bokura no Ao",
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
    album: "Single (2026)",
    img: "watashi-wa-watashi.jpg",
    audio: "watashiwa-watashino-kotoga-suki.mp3",
    opts: {
      release: ["watashi-wa-watashi"]
    }
  },
  {
    name: "世界は恋に落ちている",
    romaji: "Sekai wa Koi ni Ochiteiru",
    album: "Single (2026)",
    img: "sekai-wa-koi.jpg",
    audio: "sekai-wa-koi-ni-ochiteiru.mp3",
    opts: {
      release: ["sekai-wa-koi"]
    }
  },
  {
    name: "初恋のこたえ。",
    romaji: "Hatsukoi no Kotae",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "hatsukoi-no-kotae.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "ライフクエスト",
    romaji: "Life Quest",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "life-quest.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "花は誓いを忘れない",
    romaji: "Hana wa Chikai wo Wasurenai",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "hana-wa-chikai-wo-wasurenai.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "Cute for life",
    romaji: "Cute for life",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "cute-for-life.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "恋を知った世界",
    romaji: "Koi wo Shitta Sekai",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "koi-wo-shitta-sekai.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "I'M YOUR IDOL",
    romaji: "I'M YOUR IDOL",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "i-m-your-idol.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "アイのウイルス",
    romaji: "Ai no Virus",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "ai-no-virus.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "アイドル衣装",
    romaji: "Idol Ishou",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "idol-ishou.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "モテチェン！",
    romaji: "Mote Chen!",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "mote-chen.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "いつか私がママになったら",
    romaji: "Itsuka Watashi ga Mama ni Nattara",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "itsuka-watashi-ga-mama-ni-nattara.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "Overture",
    romaji: "Overture",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "overture.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "私より好きでいて",
    romaji: "Watashi yori Suki de Ite",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "watashi-yori-suki-de-ite.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "アドレナリンゲーム",
    romaji: "Adrenaline Game",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "adrenaline-game.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "この世界は嘘でできている",
    romaji: "Kono Sekai wa Uso de Dekiteiru",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "kono-sekai-wa-uso-de-dekiteiru.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "美しく生きろ",
    romaji: "Utsukushiku Ikiro",
    album: "Album: Miageru Tabi ni, Koi wo Suru. (2025)",
    img: "miageru-tabi-ni.jpg",
    audio: "utsukushiku-ikiro.mp3",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "小悪魔だってかまわない!",
    romaji: "Koakuma datte Kamawanai!",
    album: "Single (2025)",
    img: "koakuma-datte.jpg",
    audio: "koakuma-datte-kamawanai.mp3",
    opts: {
      release: ["koakuma-datte"]
    }
  },
  {
    name: "LOVE ANTHEM",
    romaji: "LOVE ANTHEM",
    album: "Single (2024)",
    img: "love-anthem.jpg",
    audio: "love-anthem.mp3",
    opts: {
      release: ["love-anthem"]
    }
  },
  {
    name: "メイド☆至上主義",
    romaji: "Maid Shijou Shugi",
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
    album: "Single: Utsukushiku Ikiro / Koi wo Shitta Sekai (2024)",
    img: "utsukushiku-ikiro.jpg",
    audio: "kawaii-tte-iwaretai.mp3",
    opts: {
      release: ["utsukushiku-ikiro"]
    }
  },
  {
    name: "私は怪物",
    romaji: "Watashi wa Kaibutsu",
    album: "Single: Utsukushiku Ikiro / Koi wo Shitta Sekai (2024)",
    img: "utsukushiku-ikiro.jpg",
    audio: "watashi-wa-kaibutsu.mp3",
    opts: {
      release: ["utsukushiku-ikiro"]
    }
  },
  {
    name: "17歳",
    romaji: "17-sai",
    album: "Single (2023)",
    img: "17sai.jpg",
    audio: "17-sai.mp3",
    opts: {
      release: ["17sai"]
    }
  },
  {
    name: "すきっちゅーの！",
    romaji: "Sukicchuu no!",
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
    album: "Single (2023)",
    img: "otokonoko-no-mokuteki.jpg",
    audio: "otokonoko-no-mokuteki-wa-nani.mp3",
    opts: {
      release: ["otokonoko-no-mokuteki"]
    }
  },
  {
    name: "乙女どもよ。",
    romaji: "Otome Domo yo",
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
    album: "Single: Anti Fan (2022)",
    img: "anti-fan.jpg",
    audio: "yume-musubi.mp3",
    opts: {
      release: ["anti-fan"]
    }
  }
];
