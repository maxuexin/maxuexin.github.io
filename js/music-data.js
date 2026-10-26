/* ==========================================================================
   音乐收藏数据 —— html/yinyue.html 的唯一数据源（js/collection.js 渲染）
   --------------------------------------------------------------------------
   共 316 位歌手 / 718 首，按歌曲数量从多到少排序（同数量按歌手名拼音）

   结构：groups[].name = 歌手名（也用作网址 #锚点），groups[].items = 歌名数组
   增删歌曲：直接在对应歌手的 items 里加一行  "歌名",
   ========================================================================== */

window.COLLECTION_DATA = {
    title: '音乐收藏',
    note: '316 位歌手 · 718 首歌 · 按歌曲数量排序',
    config: {
        groupNoun: '歌手',
        itemNoun: '首歌曲',
        itemWord: '歌曲',
        itemUnit: '首',
        searchPlaceholder: '搜索歌名 / 歌手',
        dataFile: 'js/music-data.js'
    },
    groups: [
        {
            name: "周杰伦",
            items: [
                "还在流浪",
                "爱情废柴",
                "爱在西元前",
                "安静",
                "暗号",
                "爸，我回来了",
                "白色风车",
                "半岛铁盒",
                "彩虹",
                "超人不会飞",
                "稻香",
                "等你下课(with 杨瑞代)",
                "东风破",
                "反方向的钟",
                "枫",
                "告白气球",
                "搁浅",
                "给我一首歌的时间",
                "黑色毛衣",
                "黑色幽默",
                "红颜如霜",
                "花海",
                "回到过去",
                "简单爱",
                "借口",
                "开不了口",
                "浪漫手机",
                "明明就",
                "默 - 现场版",
                "哪里都是你",
                "你听得到",
                "蒲公英的约定",
                "七里香",
                "晴天",
                "傻笑",
                "珊瑚海",
                "说好不哭 (with 五月天阿信)",
                "说好的幸福呢",
                "说了再见",
                "甜甜的",
                "听见下雨的声音",
                "退后",
                "外婆",
                "我不配",
                "我落泪情绪零碎",
                "我是如此相信",
                "星晴",
                "爷爷泡的茶",
                "夜的第七章",
                "夜曲",
                "一点点",
                "一路向北",
                "以父之名",
                "最长的电影"
            ] },
        {
            name: "陶喆",
            items: [
                "2Night",
                "0932",
                "Angel",
                "Dear God",
                "Forever Penny",
                "Melody",
                "Olia",
                "Stupid Pop Songs",
                "爱，很简单",
                "爱是个什么东西",
                "爱我还是他",
                "暗恋",
                "二十二",
                "飞机场的十点半",
                "宫保鸡丁",
                "鬼",
                "黑色柳丁",
                "蝴蝶",
                "寂寞的季节",
                "就是爱你",
                "泪桥",
                "梦在",
                "那个女孩",
                "普通朋友",
                "千言万语",
                "沙滩",
                "十七岁",
                "似曾相识",
                "是是非非",
                "讨厌红楼梦",
                "天天",
                "我们的故事",
                "无奈",
                "星心",
                "摇篮曲",
                "月亮代表谁的心",
                "再见以前先说再见",
                "中国姑娘"
            ] },
        {
            name: "孙燕姿",
            items: [
                "180度",
                "Hey Jude",
                "Honey Honey",
                "Outro",
                "爱情证书",
                "半句再见",
                "超快感",
                "当冬夜渐暖",
                "第一天",
                "风衣",
                "咕叽咕叽",
                "和平",
                "坏天气",
                "简爱",
                "开始懂了",
                "克卜勒",
                "逆光",
                "浓眉毛",
                "尚好的青春",
                "神奇",
                "天黑黑",
                "我不难过",
                "我怀念的",
                "我要的幸福",
                "我也很想他",
                "眼泪成诗",
                "雨天",
                "遇见",
                "原点",
                "原来你什么都不想要",
                "在，也不见",
                "直来直往",
                "自然",
                "作战"
            ] },
        {
            name: "王力宏",
            items: [
                "ONE",
                "爱错",
                "大城小爱",
                "改变自己",
                "好心分手",
                "你不知道的事",
                "你是我心内的一首歌",
                "唯一",
                "我们的歌",
                "心跳",
                "心中的日月",
                "需要人陪",
                "一首简单的歌",
                "依然爱你"
            ] },
        {
            name: "蔡依林",
            items: [
                "Love Love Love",
                "爱情36计",
                "布拉格广场",
                "倒带",
                "今天你要嫁给我",
                "看我72变",
                "马德里不思议",
                "说爱你",
                "舞娘",
                "心引力",
                "野蛮游戏",
                "海盗"
            ] },
        {
            name: "林俊杰",
            items: [
                "Always Online",
                "爱笑的眼睛",
                "背对背拥抱",
                "不懂",
                "豆浆油条",
                "加油",
                "江南",
                "杀手",
                "手心的蔷薇",
                "小酒窝",
                "只对你说"
            ] },
        {
            name: "Michael Jackson",
            items: [
                "Bad",
                "Beat It",
                "Billie Jean",
                "Cry",
                "Dangerous",
                "Heal The World",
                "Jackson Street",
                "Leave Me Alone",
                "Rock With You",
                "Scream",
                "The Way You Make Me Feel"
            ] },
        {
            name: "阿涵",
            items: [
                "备爱",
                "敷衍",
                "过客",
                "落了空",
                "如果早知道",
                "失眠",
                "讨厌你",
                "我要变好看",
                "语气词",
                "走不出来"
            ] },
        {
            name: "方大同",
            items: [
                "Love Song",
                "黑白",
                "红豆",
                "麦恩莉",
                "每个人都会",
                "三人游",
                "特别的人",
                "听",
                "笑开",
                "总结"
            ] },
        {
            name: "秘密花园",
            items: [
                "You are my everything",
                "不能",
                "出现",
                "那个男人 (白智英 ver.)",
                "那个男人 (玄彬 ver.)",
                "你是我的春天",
                "伤痕",
                "眼泪星座",
                "注视"
            ] },
        {
            name: "郑中基",
            items: [
                "爱是最大权利",
                "答应不爱你",
                "都是你的错",
                "可惜我是水瓶座",
                "美女与野兽",
                "你的眼睛背叛你的心",
                "无赖-(电影《龙咁威2皇母娘娘呢》主题曲)",
                "有种",
                "左右为难"
            ] },
        {
            name: "Westlife",
            items: [
                "Beautiful In White (Demo)",
                "I Lay My Love on You",
                "If I Let You Go",
                "My Love",
                "Nothing's Gonna Change My",
                "Seasons In The Sun",
                "Soledad",
                "Why Do I Love You",
                "You Raise Me Up"
            ] },
        {
            name: "陈奕迅",
            items: [
                "单车",
                "孤勇者",
                "人来人往",
                "十年 (粤语)",
                "十年",
                "淘汰",
                "无条件",
                "阴天快乐"
            ] },
        {
            name: "翻唱",
            items: [
                "周杰伦串烧",
                "I Wanted You (温柔版)",
                "暴风雨 (翻唱)",
                "反方向的钟",
                "如愿",
                "我想《晴天》里刮的应该是《龙卷风》！_哔哩哔哩_bilibili",
                "小姐姐.Fla你翻唱火爆全球的《Despacito》_哔哩哔哩_bil...",
                "新人报道。《花粥遥不可及的你》- 1.新人报道。《花粥遥不..."
            ] },
        {
            name: "张惠妹",
            items: [
                "好胆你就来",
                "火",
                "记得",
                "解脱",
                "人质",
                "如果你也听说",
                "听海",
                "我可以抱你吗"
            ] },
        {
            name: "梁静茹",
            items: [
                "会呼吸的痛",
                "可惜不是你",
                "明明很爱你",
                "宁夏",
                "暖暖",
                "偶阵雨",
                "勇气"
            ] },
        {
            name: "杨千嬅",
            items: [
                "处处吻",
                "可惜我是水瓶座",
                "烈女",
                "少女的祈祷",
                "稀客",
                "小城大事",
                "野孩子"
            ] },
        {
            name: "张学友",
            items: [
                "饿狼传说",
                "烦恼歌",
                "只想一生跟你走",
                "如果这都不算爱",
                "吻别",
                "遥远的她",
                "一千个伤心的理由"
            ] },
        {
            name: "梁博",
            items: [
                "出现又离开",
                "男孩",
                "日落大道",
                "危险",
                "我不知道2020",
                "一往深情"
            ] },
        {
            name: "Anson Seabra",
            items: [
                "Hindenburg Lover",
                "It's Raining, It's Pouring",
                "Peter Pan Was Right",
                "Stay With Me",
                "That's Us",
                "Welcome to Wonderland"
            ] },
        {
            name: "Tank",
            items: [
                "城里的月光",
                "会长大的幸福",
                "千年泪",
                "如果我变成回忆",
                "三国恋",
                "专属天使"
            ] },
        {
            name: "陈冠希",
            items: [
                "I can fly",
                "I Never Told You",
                "超速游戏",
                "故意",
                "战争"
            ] },
        {
            name: "李圣杰",
            items: [
                "不过一切的爱",
                "痴心绝对",
                "关于你的歌",
                "你那么爱她",
                "手放开"
            ] },
        {
            name: "莫文蔚",
            items: [
                "I Do",
                "电台情歌",
                "他不爱我",
                "阴天",
                "这世界那么多人"
            ] },
        {
            name: "王菲",
            items: [
                "爱与痛的边缘",
                "棋子",
                "容易受伤的女人",
                "如愿",
                "世界赠予我的"
            ] },
        {
            name: "许嵩",
            items: [
                "幻听",
                "灰色头像",
                "玫瑰花的葬礼",
                "素颜",
                "雅俗共赏"
            ] },
        {
            name: "Taylor Swift",
            items: [
                "All Too Well",
                "Blank Space",
                "Last Christmas",
                "Love Story",
                "Lover (Live From Paris)"
            ] },
        {
            name: "凤凰传奇",
            items: [
                "全是爱",
                "奢香夫人",
                "天籁传奇",
                "自由飞翔"
            ] },
        {
            name: "古巨基",
            items: [
                "爱得太迟",
                "必杀技",
                "情歌王",
                "找到你是我最伟大的成功"
            ] },
        {
            name: "郭静",
            items: [
                "爱情讯息",
                "不药而愈",
                "心墙",
                "在树上唱歌"
            ] },
        {
            name: "林忆莲",
            items: [
                "词不达意",
                "分分钟需要你",
                "为你我受冷风吹",
                "至少还有你"
            ] },
        {
            name: "田馥甄",
            items: [
                "陪我看日出",
                "爱了很久的朋友",
                "魔鬼中的天使",
                "你就不要想起我"
            ] },
        {
            name: "王心凌",
            items: [
                "爱的天国",
                "爱你",
                "第一次爱的人",
                "梦的光点"
            ] },
        {
            name: "伍佰",
            items: [
                "Last Dance",
                "梦醒时分",
                "挪威的森林",
                "突然的自我"
            ] },
        {
            name: "一口甜",
            items: [
                "晚安喵",
                "文字游戏",
                "我超喜欢你",
                "想和你在一起"
            ] },
        {
            name: "张韶涵",
            items: [
                "淋雨一直走",
                "梦里花",
                "亲爱的那不是爱情",
                "隐形的翅膀"
            ] },
        {
            name: "周传雄",
            items: [
                "花香",
                "黄昏",
                "记事本",
                "寂寞沙洲冷"
            ] },
        {
            name: "BEYOND",
            items: [
                "不再犹豫",
                "灰色轨迹",
                "情人",
                "真的爱你"
            ] },
        {
            name: "Mariah Carey",
            items: [
                "Bye Bye",
                "Dreamlover",
                "We Belong Together",
                "Without You"
            ] },
        {
            name: "Maroon 5",
            items: [
                "Lost Stars",
                "One More Night",
                "Payphone",
                "Sugar"
            ] },
        {
            name: "S.H.E",
            items: [
                "安静了",
                "波斯猫",
                "恋人未满",
                "五月天"
            ] },
        {
            name: "陈慧娴",
            items: [
                "情意结",
                "人生何处不相逢",
                "傻女"
            ] },
        {
            name: "杜德伟",
            items: [
                "黑色契约",
                "情人",
                "脱掉"
            ] },
        {
            name: "任贤齐",
            items: [
                "伤心太平洋",
                "我是一只鱼",
                "心太软"
            ] },
        {
            name: "萧亚轩",
            items: [
                "爱的主打歌",
                "突然想起你",
                "最熟悉的陌生人"
            ] },
        {
            name: "许巍",
            items: [
                "曾经的你",
                "少年",
                "喜悦"
            ] },
        {
            name: "薛之谦",
            items: [
                "暧昧",
                "天外来物",
                "演员"
            ] },
        {
            name: "杨宗纬",
            items: [
                "其实都没有",
                "我们好像在哪儿见过",
                "洋葱"
            ] },
        {
            name: "倚天屠龙记",
            items: [
                "爱上张无忌",
                "似水柔情",
                "心爱"
            ] },
        {
            name: "赵紫骅",
            items: [
                "可乐",
                "你还好吗",
                "一滴泪的时间"
            ] },
        {
            name: "G.E.M.邓紫棋",
            items: [
                "多远都要在一起",
                "句号",
                "喜欢你"
            ] },
        {
            name: "Jason Mraz",
            items: [
                "I'm Yours",
                "Life Is Wonderful",
                "Try Try Try"
            ] },
        {
            name: "傲七爷",
            items: [
                "礼物",
                "选择性回避"
            ] },
        {
            name: "曾轶可",
            items: [
                "夜车",
                "有可能的夜晚"
            ] },
        {
            name: "戴佩妮",
            items: [
                "你要的爱",
                "怎样"
            ] },
        {
            name: "丁当",
            items: [
                "猜不透",
                "我爱他"
            ] },
        {
            name: "房东的猫",
            items: [
                "New Boy",
                "第一次"
            ] },
        {
            name: "钢琴",
            items: [
                "梦中的婚礼",
                "永远同在"
            ] },
        {
            name: "胡夏",
            items: [
                "爱夏",
                "你怎么舍得我难过"
            ] },
        {
            name: "黄家驹",
            items: [
                "光辉岁月",
                "灰色轨迹"
            ] },
        {
            name: "棱镜",
            items: [
                "无法拥有的人要好好道别",
                "总有一天你会出现在我身边"
            ] },
        {
            name: "李克勤",
            items: [
                "飞花",
                "月半小夜曲"
            ] },
        {
            name: "林宥嘉",
            items: [
                "残酷月光",
                "说谎"
            ] },
        {
            name: "刘德华",
            items: [
                "17岁",
                "情感的禁区"
            ] },
        {
            name: "刘若英",
            items: [
                "当爱在靠近",
                "后来"
            ] },
        {
            name: "乱炖",
            items: [
                "APT",
                "简单爱，每个人都会！"
            ] },
        {
            name: "孟凡明",
            items: [
                "知秋",
                "只只"
            ] },
        {
            name: "潘玮柏",
            items: [
                "反转地球",
                "双人舞"
            ] },
        {
            name: "群星",
            items: [
                "手牵手",
                "相亲相爱"
            ] },
        {
            name: "五月天",
            items: [
                "步步",
                "突然好想你"
            ] },
        {
            name: "杨丞琳",
            items: [
                "雨爱",
                "左边"
            ] },
        {
            name: "张国荣",
            items: [
                "沉默是金",
                "倩女幽魂"
            ] },
        {
            name: "张杰",
            items: [
                "我们都一样",
                "最熟悉的陌生人"
            ] },
        {
            name: "张敬轩",
            items: [
                "断点",
                "酷爱"
            ] },
        {
            name: "周慧敏",
            items: [
                "自作多情",
                "最爱"
            ] },
        {
            name: "周兴哲",
            items: [
                "你，好不好？",
                "怎么了"
            ] },
        {
            name: "Ailee",
            items: [
                "给你看 (过山车歌版)",
                "给你看"
            ] },
        {
            name: "AKMU",
            items: [
                "DINOSAUR",
                "Give Love"
            ] },
        {
            name: "Babyface",
            items: [
                "Every Time I Close My Eyes",
                "The Loneliness"
            ] },
        {
            name: "Billie Eilish",
            items: [
                "bad guy",
                "Therefore I Am"
            ] },
        {
            name: "Brian McKnight",
            items: [
                "Back at One",
                "天天"
            ] },
        {
            name: "Daniel Powter",
            items: [
                "Best of Me",
                "Free Loop"
            ] },
        {
            name: "Ke$ha",
            items: [
                "Take It Off",
                "Tik Tok"
            ] },
        {
            name: "Ne-Yo",
            items: [
                "Because Of You",
                "So Sick"
            ] },
        {
            name: "RADWIMPS",
            items: [
                "スパークル (火花)",
                "夢灯籠"
            ] },
        {
            name: "The Silent League",
            items: [
                "Breathe",
                "Conversation"
            ] },
        {
            name: "Yuna",
            items: [
                "Crush",
                "Dance Like Nobody's Watching"
            ] },
        {
            name: "88rising, BIBI",
            items: [
                "The Weekend"
            ] },
        {
            name: "阿杜",
            items: [
                "他一定很爱你"
            ] },
        {
            name: "阿桑",
            items: [
                "一直很安静 (Cover 阿桑)"
            ] },
        {
            name: "白小白",
            items: [
                "一万年"
            ] },
        {
            name: "白小白, 庄心妍",
            items: [
                "我爱你不如归期(粤语版)"
            ] },
        {
            name: "蔡健雅",
            items: [
                "Beautiful Love"
            ] },
        {
            name: "草蜢",
            items: [
                "失恋阵线联盟"
            ] },
        {
            name: "曾沛慈, 东城卫",
            items: [
                "泪了"
            ] },
        {
            name: "柴亚飞",
            items: [
                "我还记得"
            ] },
        {
            name: "陈百强",
            items: [
                "偏偏喜欢你"
            ] },
        {
            name: "陈柏宇",
            items: [
                "你瞒我瞒"
            ] },
        {
            name: "陈楚生",
            items: [
                "有没有人告诉你"
            ] },
        {
            name: "陈冠希, 应采儿",
            items: [
                "Everywhere We Go"
            ] },
        {
            name: "陈冠希, MC仁, 厨房仔, 应采儿",
            items: [
                "Everywhere We Go"
            ] },
        {
            name: "陈洁丽",
            items: [
                "猪猪侠"
            ] },
        {
            name: "陈小春",
            items: [
                "独家记忆"
            ] },
        {
            name: "春梨哥哥",
            items: [
                "Thinkin Bout You"
            ] },
        {
            name: "导演开玩唱",
            items: [
                "(青花瓷 套马 默 一起摇摆)"
            ] },
        {
            name: "邓丽君",
            items: [
                "漫步人生路"
            ] },
        {
            name: "丁可",
            items: [
                "if"
            ] },
        {
            name: "东城卫",
            items: [
                "够爱"
            ] },
        {
            name: "动力火车",
            items: [
                "那就这样吧"
            ] },
        {
            name: "窦靖童",
            items: [
                "Monday"
            ] },
        {
            name: "樊凡",
            items: [
                "我想大声告诉你"
            ] },
        {
            name: "范倪",
            items: [
                "南半球与北海道"
            ] },
        {
            name: "范玮琪",
            items: [
                "最重要的决定"
            ] },
        {
            name: "范逸臣",
            items: [
                "放生"
            ] },
        {
            name: "飞儿乐团",
            items: [
                "千年之恋"
            ] },
        {
            name: "非洲方大同",
            items: [
                "新鸳鸯蝴蝶梦"
            ] },
        {
            name: "伏仪",
            items: [
                "记昨日书"
            ] },
        {
            name: "高进",
            items: [
                "别想她"
            ] },
        {
            name: "告五人",
            items: [
                "给你一瓶魔法药水"
            ] },
        {
            name: "葛东琪",
            items: [
                "悬溺"
            ] },
        {
            name: "关喆",
            items: [
                "想你的夜"
            ] },
        {
            name: "光良",
            items: [
                "童话"
            ] },
        {
            name: "广西靓妹",
            items: [
                "爱蜜温you"
            ] },
        {
            name: "郭顶",
            items: [
                "水星记"
            ] },
        {
            name: "海鸣威",
            items: [
                "老人与海"
            ] },
        {
            name: "韩红",
            items: [
                "飞云之下"
            ] },
        {
            name: "韩红, 孙楠",
            items: [
                "美丽的神话"
            ] },
        {
            name: "汉堡黄",
            items: [
                "滥俗的歌"
            ] },
        {
            name: "和田光司",
            items: [
                "Butter-Fly"
            ] },
        {
            name: "黑鸭子",
            items: [
                "请先说你好(温柔男声版)"
            ] },
        {
            name: "很美味",
            items: [
                "跟我在一起"
            ] },
        {
            name: "后弦",
            items: [
                "下完这场雨"
            ] },
        {
            name: "胡彦斌, 张靓颖",
            items: [
                "如果你也听说"
            ] },
        {
            name: "虎二",
            items: [
                "尘土"
            ] },
        {
            name: "华语群星",
            items: [
                "北京欢迎你"
            ] },
        {
            name: "黄立行",
            items: [
                "黑夜尽头"
            ] },
        {
            name: "黄品源",
            items: [
                "小薇"
            ] },
        {
            name: "火星哥",
            items: [
                "Uptown Funk"
            ] },
        {
            name: "江语晨",
            items: [
                "最后一页"
            ] },
        {
            name: "金莎",
            items: [
                "星月神话"
            ] },
        {
            name: "九宝乐队",
            items: [
                "特斯河之赞"
            ] },
        {
            name: "橘子海",
            items: [
                "夏日漱石"
            ] },
        {
            name: "浪漫屋",
            items: [
                "Why"
            ] },
        {
            name: "雷军",
            items: [
                "Are you OK!"
            ] },
        {
            name: "李昊瀚",
            items: [
                "如果爱能早些说出来"
            ] },
        {
            name: "李健",
            items: [
                "如果沉默是金 (Live)"
            ] },
        {
            name: "李玖哲",
            items: [
                "夏天"
            ] },
        {
            name: "李俊",
            items: [
                "幕后玩家"
            ] },
        {
            name: "李璐瑶",
            items: [
                "痴心绝对"
            ] },
        {
            name: "李飘飘",
            items: [
                "你住的城市"
            ] },
        {
            name: "李荣浩",
            items: [
                "不将就"
            ] },
        {
            name: "李雅微",
            items: [
                "我们的纪念"
            ] },
        {
            name: "梁博, 刘德华",
            items: [
                "无间道"
            ] },
        {
            name: "梁咏琪, 古巨基",
            items: [
                "许愿"
            ] },
        {
            name: "林依晨",
            items: [
                "你 (新版)"
            ] },
        {
            name: "林志炫",
            items: [
                "单身情歌"
            ] },
        {
            name: "刘大壮",
            items: [
                "我很好"
            ] },
        {
            name: "刘莱斯",
            items: [
                "浮生"
            ] },
        {
            name: "刘瑞琦",
            items: [
                "房间"
            ] },
        {
            name: "刘若英, 黄立行",
            items: [
                "分开旅行"
            ] },
        {
            name: "刘涛",
            items: [
                "红颜旧"
            ] },
        {
            name: "刘惜君",
            items: [
                "我很快乐"
            ] },
        {
            name: "刘小芸",
            items: [
                "初恋情人"
            ] },
        {
            name: "卢冠廷",
            items: [
                "一生所爱"
            ] },
        {
            name: "鹿晗",
            items: [
                "我们的明天"
            ] },
        {
            name: "旅行新蜜蜂",
            items: [
                "金风玉露"
            ] },
        {
            name: "罗大佑",
            items: [
                "童年"
            ] },
        {
            name: "罗文, 甄妮",
            items: [
                "铁血丹心"
            ] },
        {
            name: "罗志祥",
            items: [
                "爱转角"
            ] },
        {
            name: "马天宇",
            items: [
                "该死的温柔"
            ] },
        {
            name: "毛华锋",
            items: [
                "奇迹再现"
            ] },
        {
            name: "梅艳芳",
            items: [
                "夕阳之歌"
            ] },
        {
            name: "梦然",
            items: [
                "是你"
            ] },
        {
            name: "米津玄師",
            items: [
                "LOSER"
            ] },
        {
            name: "南拳妈妈",
            items: [
                "下雨天"
            ] },
        {
            name: "南游记乐队",
            items: [
                "孤独演说家"
            ] },
        {
            name: "牛奶咖啡",
            items: [
                "明天，你好"
            ] },
        {
            name: "潘广益",
            items: [
                "凌晨两点半"
            ] },
        {
            name: "潘玮柏, 苏芮",
            items: [
                "我想更懂你"
            ] },
        {
            name: "潘玮柏, 弦子",
            items: [
                "不得不爱"
            ] },
        {
            name: "盘尼西林",
            items: [
                "再谈记忆"
            ] },
        {
            name: "朴彩英, 火星哥",
            items: [
                "APT"
            ] },
        {
            name: "朴树",
            items: [
                "平凡之路"
            ] },
        {
            name: "戚薇, A-Lin",
            items: [
                "Save Your Tears"
            ] },
        {
            name: "曲婉婷",
            items: [
                "我的歌声里"
            ] },
        {
            name: "全仁权",
            items: [
                "걱정말아요 그대 (你不要担心)"
            ] },
        {
            name: "任然",
            items: [
                "飞鸟和蝉"
            ] },
        {
            name: "山崎まさよし",
            items: [
                "One more time, One more chance"
            ] },
        {
            name: "邵帅, 梁靖昆, 王楚钦",
            items: [
                "吉林的风吹过唐山吹到了河南"
            ] },
        {
            name: "申升勋",
            items: [
                "I Believe"
            ] },
        {
            name: "施文敬",
            items: [
                "老鼠爱大米"
            ] },
        {
            name: "苏打绿",
            items: [
                "小情歌"
            ] },
        {
            name: "宿舍",
            items: [
                "加州旅馆"
            ] },
        {
            name: "孙子涵, 李潇潇",
            items: [
                "全世界宣布爱你"
            ] },
        {
            name: "谭咏麟",
            items: [
                "讲不出再见"
            ] },
        {
            name: "陶喆 feat.玛丽亚凯莉",
            items: [
                "二十二 x Dreamlover"
            ] },
        {
            name: "汪苏泷",
            items: [
                "像晴天像雨天"
            ] },
        {
            name: "汪苏泷, 单依纯",
            items: [
                "如果爱忘了"
            ] },
        {
            name: "王北车",
            items: [
                "陷阱-(电影《再见班花》主题曲)"
            ] },
        {
            name: "王杰",
            items: [
                "不浪漫罪名"
            ] },
        {
            name: "王强",
            items: [
                "秋天不回来"
            ] },
        {
            name: "王若琳",
            items: [
                "有你的快乐"
            ] },
        {
            name: "王OK",
            items: [
                "这条小鱼在乎"
            ] },
        {
            name: "韦礼安",
            items: [
                "女孩"
            ] },
        {
            name: "温岚",
            items: [
                "夏天的风"
            ] },
        {
            name: "五音Jw",
            items: [
                "明月天涯"
            ] },
        {
            name: "夏奇拉",
            items: [
                "Try Everything"
            ] },
        {
            name: "夏日入侵企画",
            items: [
                "想去海边"
            ] },
        {
            name: "弦子",
            items: [
                "醉清风"
            ] },
        {
            name: "萧敬腾",
            items: [
                "王妃"
            ] },
        {
            name: "小咪",
            items: [
                "我走后"
            ] },
        {
            name: "谢安琪",
            items: [
                "喜帖街"
            ] },
        {
            name: "谢霆锋",
            items: [
                "因为爱所以爱"
            ] },
        {
            name: "新乐尘符",
            items: [
                "每一句都很甜"
            ] },
        {
            name: "信乐团",
            items: [
                "死了都要爱"
            ] },
        {
            name: "徐良, 阿悄",
            items: [
                "红装"
            ] },
        {
            name: "徐良, 孙羽幽",
            items: [
                "七秒钟的记忆"
            ] },
        {
            name: "徐誉滕",
            items: [
                "等一分钟"
            ] },
        {
            name: "许镜清",
            items: [
                "云宫迅音"
            ] },
        {
            name: "雅尼",
            items: [
                "夜莺"
            ] },
        {
            name: "羊毛衫乐队",
            items: [
                "Communication"
            ] },
        {
            name: "姚贝娜",
            items: [
                "战争世界"
            ] },
        {
            name: "余佳运",
            items: [
                "九月底"
            ] },
        {
            name: "袁成杰, 戚薇",
            items: [
                "外滩十八号"
            ] },
        {
            name: "詹雯婷",
            items: [
                "决爱"
            ] },
        {
            name: "张碧晨",
            items: [
                "只要平凡"
            ] },
        {
            name: "张朝阳, 张韶涵",
            items: [
                "亲爱的那不是爱情"
            ] },
        {
            name: "张靓颖",
            items: [
                "如果这就是爱情"
            ] },
        {
            name: "张靓颖, 王铮亮",
            items: [
                "是你"
            ] },
        {
            name: "张韶涵, 潘玮柏",
            items: [
                "快乐崇拜"
            ] },
        {
            name: "张韶涵, 王赫野",
            items: [
                "篇章"
            ] },
        {
            name: "张卫健",
            items: [
                "真英雄"
            ] },
        {
            name: "张小伙",
            items: [
                "她是"
            ] },
        {
            name: "张信哲",
            items: [
                "爱如潮水"
            ] },
        {
            name: "张阳阳",
            items: [
                "习惯"
            ] },
        {
            name: "张芸京",
            items: [
                "偏爱"
            ] },
        {
            name: "郑欣宜",
            items: [
                "上心"
            ] },
        {
            name: "郑中基, 陈慧琳",
            items: [
                "制造浪漫"
            ] },
        {
            name: "郑中基, 杨千嬅",
            items: [
                "无赖 VS 烈女"
            ] },
        {
            name: "芝芙ChiPu, 龚琳娜, 刘雅瑟",
            items: [
                "迷迭香"
            ] },
        {
            name: "至上励合",
            items: [
                "棉花糖"
            ] },
        {
            name: "中岛美嘉",
            items: [
                "曾经我也想过一了百了"
            ] },
        {
            name: "钟炳文",
            items: [
                "人生如棋"
            ] },
        {
            name: "周笔畅",
            items: [
                "最美的期待"
            ] },
        {
            name: "Adele",
            items: [
                "Rolling In The Deep"
            ] },
        {
            name: "aespa",
            items: [
                "Savage"
            ] },
        {
            name: "BABY DRIVER",
            items: [
                "DEJA VU"
            ] },
        {
            name: "Beyoncé",
            items: [
                "Halo"
            ] },
        {
            name: "Billkin",
            items: [
                "ถ้าเธอรักฉันจริง (永远美丽)"
            ] },
        {
            name: "Billy Raffoul",
            items: [
                "Acoustic"
            ] },
        {
            name: "Blue",
            items: [
                "U Make Me Wanna"
            ] },
        {
            name: "Brandy, Monica",
            items: [
                "The Boy Is Mine"
            ] },
        {
            name: "BY2",
            items: [
                "爱丫爱丫"
            ] },
        {
            name: "Cardi B",
            items: [
                "hipop"
            ] },
        {
            name: "Caroline",
            items: [
                "Lonely Halloween"
            ] },
        {
            name: "Carpenters",
            items: [
                "Yesterday Once More"
            ] },
        {
            name: "Cody Fry, Abby Cates",
            items: [
                "Things You Said"
            ] },
        {
            name: "Coldplay",
            items: [
                "Yellow"
            ] },
        {
            name: "David Archuleta",
            items: [
                "Losin' Sleep"
            ] },
        {
            name: "Dia Frampton",
            items: [
                "Walk Away"
            ] },
        {
            name: "Dido",
            items: [
                "Thank You"
            ] },
        {
            name: "Dua Lipa",
            items: [
                "Don't Start Now"
            ] },
        {
            name: "Eminem, Dido",
            items: [
                "Stan"
            ] },
        {
            name: "F.I.R.",
            items: [
                "我们的爱"
            ] },
        {
            name: "Fine 乐队",
            items: [
                "想淋雨就别走"
            ] },
        {
            name: "Fine乐团",
            items: [
                "吸决定"
            ] },
        {
            name: "Frank Ocean",
            items: [
                "Pyramids"
            ] },
        {
            name: "GAI周延, 吉克隽逸",
            items: [
                "问风"
            ] },
        {
            name: "Gavin DeGraw",
            items: [
                "Fire"
            ] },
        {
            name: "Greyson Chance",
            items: [
                "Summertrain"
            ] },
        {
            name: "Higher Brothers, HARIKIRI",
            items: [
                "暴风雨"
            ] },
        {
            name: "Imagine Dragons",
            items: [
                "Bones"
            ] },
        {
            name: "Ina Wroldsen",
            items: [
                "I wanted you"
            ] },
        {
            name: "Jamie Miller",
            items: [
                "Here's Your Perfect"
            ] },
        {
            name: "John Lennon",
            items: [
                "Imagine"
            ] },
        {
            name: "Jordann",
            items: [
                "Dehors"
            ] },
        {
            name: "Kelly Clarkson",
            items: [
                "Because of You"
            ] },
        {
            name: "Keyshia Cole",
            items: [
                "Fallin' Out"
            ] },
        {
            name: "Khalid",
            items: [
                "Talk"
            ] },
        {
            name: "Lady Gaga",
            items: [
                "Abracadabra"
            ] },
        {
            name: "Lana Del Rey",
            items: [
                "West Coast"
            ] },
        {
            name: "Leah Marie Perez",
            items: [
                "Nothin' on Me"
            ] },
        {
            name: "Lisa Miskovsky",
            items: [
                "A Brand New Day"
            ] },
        {
            name: "Lola Coca",
            items: [
                "GQ"
            ] },
        {
            name: "MARUV",
            items: [
                "Drunk Groove"
            ] },
        {
            name: "MARUV, Boosin",
            items: [
                "Drunk Groove"
            ] },
        {
            name: "Minnie",
            items: [
                "Devil's angel"
            ] },
        {
            name: "Morphine",
            items: [
                "Early to Bed"
            ] },
        {
            name: "Nelly, Kelly Rowland",
            items: [
                "Dilemma"
            ] },
        {
            name: "Nick Lopez",
            items: [
                "Pink Champagne"
            ] },
        {
            name: "Ollie Wride",
            items: [
                "Running in the Night"
            ] },
        {
            name: "P!nk, Nate Ruess",
            items: [
                "Just Give Me a Reason"
            ] },
        {
            name: "Passenger",
            items: [
                "Let Her Go"
            ] },
        {
            name: "Pink Floyd",
            items: [
                "Wish You Were Here"
            ] },
        {
            name: "Prince",
            items: [
                "Kiss"
            ] },
        {
            name: "Prince, The Revolution",
            items: [
                "Purple Rain"
            ] },
        {
            name: "Prinzhorn Dance School",
            items: [
                "Reign"
            ] },
        {
            name: "Radiohead",
            items: [
                "Creep"
            ] },
        {
            name: "Red Hot Chili Peppers",
            items: [
                "Factory of Faith"
            ] },
        {
            name: "Reynard Silva",
            items: [
                "The Way I Still Love You"
            ] },
        {
            name: "Sasha Alex Sloan",
            items: [
                "Dancing With Your Ghost"
            ] },
        {
            name: "Sia",
            items: [
                "Unstoppable"
            ] },
        {
            name: "Soler",
            items: [
                "风的季节"
            ] },
        {
            name: "Tessa Violet",
            items: [
                "Crush"
            ] },
        {
            name: "The Cranberries",
            items: [
                "Dying In The Sun"
            ] },
        {
            name: "The Marias",
            items: [
                "Hush"
            ] },
        {
            name: "The Wildcardz",
            items: [
                "overflow"
            ] },
        {
            name: "Thomas Rhett",
            items: [
                "Marry Me"
            ] },
        {
            name: "Tom Speight",
            items: [
                "My Name"
            ] },
        {
            name: "Tragédie",
            items: [
                "Hey Oh"
            ] },
        {
            name: "Twins",
            items: [
                "下一站天后"
            ] },
        {
            name: "Two Steps From Hell",
            items: [
                "Victory"
            ] },
        {
            name: "Whitney Houston",
            items: [
                "Call You Tonight"
            ] },
        {
            name: "Yo Trance",
            items: [
                "Time & Space"
            ] },
        {
            name: "未知",
            items: [
                "Bye Bye Bye",
                "Would you like to drive at dawn",
                "团结人民之歌",
                "Dear John",
                "不要理我",
                "此生不换",
                "大东北我的家乡",
                "等一场大雨",
                "好想你",
                "玫瑰",
                "甚至我就喜欢你",
                "男孩别哭",
                "你从未离去，就在这里",
                "骑在银龙的背上",
                "写给黄淮",
                "要不要约我看电影啊 - 1.要不要约我看电影啊",
                "unnatural×Lemon"
            ] },
        {
            name: "未知歌手",
            items: [
                "我们的拼好歌"
            ] }
    ]
};
