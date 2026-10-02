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
      { name: "僕らの青 (Bokura no Ao)", tooltip: "Released on 2026-08-12", key: "bokura-no-ao" },
      { name: "ハートブーケ (Heart Bouquet)", tooltip: "Released on 2026-06-07", key: "heart-bouquet" },
      { name: "生きてりゃいい (Ikiterya Ii)", tooltip: "Released on 2026-05-13", key: "ikiterya-ii" },
      { name: "私は、わたしの事が好き。 (Watashiwa Watashino Kotoga Suki)", tooltip: "Released on 2026-04-15", key: "watashi-wa-watashi" },
      { name: "世界は恋に落ちている (Sekai wa Koi ni Ochiteiru)", tooltip: "Released on 2026-03-05", key: "sekai-wa-koi" },
      { name: "見上げるたびに、恋をする。 (Miageru Tabi ni, Koi wo Suru.)", tooltip: "Released on 2025-12-17", key: "miageru-tabi-ni" },
      { name: "病名恋ワズライ (Byoumei Koiwazurai)", tooltip: "Released on 2025-11-21", key: "byoumei-koiwazurai" },
      { name: "メランコリックハニー (Melancholic Honey)", tooltip: "Released on 2025-04-30", key: "melancholic-honey" },
      { name: "小悪魔だってかまわない! (Koakuma datte Kamawanai!)", tooltip: "Released on 2025-02-09", key: "koakuma-datte" },
      { name: "LOVE ANTHEM", tooltip: "Released on 2024-09-09", key: "love-anthem" },
      { name: "メイド☆至上主義 (Maid Shijou Shugi)", tooltip: "Released on 2024-05-12", key: "maid-shijou-shugi" },
      { name: "推しの魔法 (Oshi no Mahou)", tooltip: "Released on 2024-03-25", key: "oshi-no-mahou" },
      { name: "美しく生きろ／恋を知った世界 (Utsukushiku Ikiro / Koi wo Shitta Sekai)", tooltip: "Released on 2024-02-21", key: "utsukushiku-ikiro" },
      { name: "17歳 (17-sai)", tooltip: "Released on 2023-09-09", key: "17sai" },
      { name: "すきっちゅーの！ (Sukicchuu no!)", tooltip: "Released on 2023-09-03", key: "sukicchuu-no" },
      { name: "月曜日の憂鬱 (Getsuyoubi no Yuuutsu)", tooltip: "Released on 2023-07-23", key: "getsuyoubi-no-yuuutsu" },
      { name: "ヒロインは平均以下。 (Heroine wa Heikin Ika)", tooltip: "Released on 2023-07-15", key: "heroine-wa-heikin-ika" },
      { name: "決戦スピリット (Kessen Spirit)", tooltip: "Released on 2023-07-09", key: "kessen-spirit" },
      { name: "初恋のひと。 (Hatsukoi no Hito)", tooltip: "Released on 2023-07-04", key: "hatsukoi-no-hito" },
      { name: "革命の女王 (Kakumei no Joou)", tooltip: "Released on 2023-04-04", key: "kakumei-no-joou" },
      { name: "僕は君になれない (Boku wa Kimi ni Narenai)", tooltip: "Released on 2023-04-04", key: "boku-wa-kimi-ni-narenai" },
      { name: "男の子の目的は何？ (Otokonoko no Mokuteki wa Nani?)", tooltip: "Released on 2023-03-20", key: "otokonoko-no-mokuteki" },
      { name: "乙女どもよ。 (Otome Domo yo)", tooltip: "Released on 2023-02-04", key: "otome-domo-yo" },
      { name: "可愛くてごめん (Kawaikute Gomen)", tooltip: "Released on 2023-01-27", key: "kawaikute-gomen" },
      { name: "女の子は強い (Onnanoko wa Tsuyoi)", tooltip: "Released on 2022-12-26", key: "onnanoko-wa-tsuyoi" },
      { name: "アンチファン (Anti Fan)", tooltip: "Released on 2022-10-01", key: "anti-fan" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "メランコリックハニー",
    romaji: "Melancholic Honey",
    img: "melancholic-honey.jpg",
    opts: {
      release: ["melancholic-honey"]
    }
  },
  {
    name: "病名恋ワズライ",
    romaji: "Byoumei Koiwazurai",
    img: "byoumei-koiwazurai.jpg",
    opts: {
      release: ["byoumei-koiwazurai"]
    }
  },
  {
    name: "僕らの青",
    romaji: "Bokura no Ao",
    img: "bokura-no-ao.jpg",
    opts: {
      release: ["bokura-no-ao"]
    }
  },
  {
    name: "ハートブーケ",
    romaji: "Heart Bouquet",
    img: "heart-bouquet.jpg",
    opts: {
      release: ["heart-bouquet"]
    }
  },
  {
    name: "生きてりゃいい",
    romaji: "Ikiterya Ii",
    img: "ikiterya-ii.jpg",
    opts: {
      release: ["ikiterya-ii"]
    }
  },
  {
    name: "私は、わたしの事が好き。",
    romaji: "Watashiwa Watashino Kotoga Suki",
    img: "watashi-wa-watashi.jpg",
    opts: {
      release: ["watashi-wa-watashi"]
    }
  },
  {
    name: "世界は恋に落ちている",
    romaji: "Sekai wa Koi ni Ochiteiru",
    img: "sekai-wa-koi.jpg",
    opts: {
      release: ["sekai-wa-koi"]
    }
  },
  {
    name: "初恋のこたえ。",
    romaji: "Hatsukoi no Kotae",
    img: "miageru-tabi-ni.jpg",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "ライフクエスト",
    romaji: "Life Quest",
    img: "miageru-tabi-ni.jpg",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "花は誓いを忘れない",
    romaji: "Hana wa Chikai wo Wasurenai",
    img: "miageru-tabi-ni.jpg",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "Cute for life",
    romaji: "Cute for life",
    img: "miageru-tabi-ni.jpg",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "恋を知った世界",
    romaji: "Koi wo Shitta Sekai",
    img: "miageru-tabi-ni.jpg",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "I'M YOUR IDOL",
    romaji: "I'M YOUR IDOL",
    img: "miageru-tabi-ni.jpg",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "アイのウイルス",
    romaji: "Ai no Virus",
    img: "miageru-tabi-ni.jpg",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "アイドル衣装",
    romaji: "Idol Ishou",
    img: "miageru-tabi-ni.jpg",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "モテチェン！",
    romaji: "Mote Chen!",
    img: "miageru-tabi-ni.jpg",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "いつか私がママになったら",
    romaji: "Itsuka Watashi ga Mama ni Nattara",
    img: "miageru-tabi-ni.jpg",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "Overture",
    romaji: "Overture",
    img: "miageru-tabi-ni.jpg",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "私より好きでいて",
    romaji: "Watashi yori Suki de Ite",
    img: "miageru-tabi-ni.jpg",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "アドレナリンゲーム",
    romaji: "Adrenaline Game",
    img: "miageru-tabi-ni.jpg",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "この世界は嘘でできている",
    romaji: "Kono Sekai wa Uso de Dekiteiru",
    img: "miageru-tabi-ni.jpg",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "美しく生きろ",
    romaji: "Utsukushiku Ikiro",
    img: "miageru-tabi-ni.jpg",
    opts: {
      release: ["miageru-tabi-ni"]
    }
  },
  {
    name: "小悪魔だってかまわない!",
    romaji: "Koakuma datte Kamawanai!",
    img: "koakuma-datte.jpg",
    opts: {
      release: ["koakuma-datte"]
    }
  },
  {
    name: "LOVE ANTHEM",
    romaji: "LOVE ANTHEM",
    img: "love-anthem.jpg",
    opts: {
      release: ["love-anthem"]
    }
  },
  {
    name: "メイド☆至上主義",
    romaji: "Maid Shijou Shugi",
    img: "maid-shijou-shugi.jpg",
    opts: {
      release: ["maid-shijou-shugi"]
    }
  },
  {
    name: "推しの魔法",
    romaji: "Oshi no Mahou",
    img: "oshi-no-mahou.jpg",
    opts: {
      release: ["oshi-no-mahou"]
    }
  },
  {
    name: "可愛いって言われたい",
    romaji: "Kawaii tte Iwaretai",
    img: "utsukushiku-ikiro.jpg",
    opts: {
      release: ["utsukushiku-ikiro"]
    }
  },
  {
    name: "私は怪物",
    romaji: "Watashi wa Kaibutsu",
    img: "utsukushiku-ikiro.jpg",
    opts: {
      release: ["utsukushiku-ikiro"]
    }
  },
  {
    name: "17歳",
    romaji: "17-sai",
    img: "17sai.jpg",
    opts: {
      release: ["17sai"]
    }
  },
  {
    name: "すきっちゅーの！",
    romaji: "Sukicchuu no!",
    img: "sukicchuu-no.jpg",
    opts: {
      release: ["sukicchuu-no"]
    }
  },
  {
    name: "月曜日の憂鬱",
    romaji: "Getsuyoubi no Yuuutsu",
    img: "getsuyoubi-no-yuuutsu.jpg",
    opts: {
      release: ["getsuyoubi-no-yuuutsu"]
    }
  },
  {
    name: "決戦スピリット",
    romaji: "Kessen Spirit",
    img: "kessen-spirit.jpg",
    opts: {
      release: ["kessen-spirit"]
    }
  },
  {
    name: "初恋のひと。",
    romaji: "Hatsukoi no Hito",
    img: "hatsukoi-no-hito.jpg",
    opts: {
      release: ["hatsukoi-no-hito"]
    }
  },
  {
    name: "ヒロインは平均以下。",
    romaji: "Heroine wa Heikin Ika",
    img: "heroine-wa-heikin-ika.jpg",
    opts: {
      release: ["heroine-wa-heikin-ika"]
    }
  },
  {
    name: "革命の女王",
    romaji: "Kakumei no Joou",
    img: "kakumei-no-joou.jpg",
    opts: {
      release: ["kakumei-no-joou"]
    }
  },
  {
    name: "僕は君になれない",
    romaji: "Boku wa Kimi ni Narenai",
    img: "boku-wa-kimi-ni-narenai.jpg",
    opts: {
      release: ["boku-wa-kimi-ni-narenai"]
    }
  },
  {
    name: "男の子の目的は何？",
    romaji: "Otokonoko no Mokuteki wa Nani?",
    img: "otokonoko-no-mokuteki.jpg",
    opts: {
      release: ["otokonoko-no-mokuteki"]
    }
  },
  {
    name: "乙女どもよ。",
    romaji: "Otome Domo yo",
    img: "otome-domo-yo.jpg",
    opts: {
      release: ["otome-domo-yo"]
    }
  },
  {
    name: "可愛くてごめん",
    romaji: "Kawaikute Gomen",
    img: "kawaikute-gomen.jpg",
    opts: {
      release: ["kawaikute-gomen"]
    }
  },
  {
    name: "女の子は強い",
    romaji: "Onnanoko wa Tsuyoi",
    img: "onnanoko-wa-tsuyoi.jpg",
    opts: {
      release: ["onnanoko-wa-tsuyoi"]
    }
  },
  {
    name: "アンチファン",
    romaji: "Anti Fan",
    img: "anti-fan.jpg",
    opts: {
      release: ["anti-fan"]
    }
  },
  {
    name: "ユメムスビ",
    romaji: "Yume Musubi",
    img: "anti-fan.jpg",
    opts: {
      release: ["anti-fan"]
    }
  }
];
