/* ==========================================================================
   网站收藏数据 —— html/wangzhan.html 的唯一数据源
   --------------------------------------------------------------------------
   【怎么填】把下面的 categories 数组替换/扩充成你自己的分类和网站：

   · 分类：{ id: 'common', name: '常用', sites: [ ... ] }
           id 用英文字母（会出现在网址 #后面，如 wangzhan.html#common）
   · 网站：{ name: '网站名', url: 'https://...', desc: '一句话说明（可省略）' }

   网站多/分类多都可以随便加，页面自动生成标签页和卡片。
   ========================================================================== */

window.SITES_DATA = {
    title: '网站收藏',
    note: '常用网站的快速入口，点击卡片直达',

    /* ↓↓↓ 以下为示例数据，拿到真实清单后整体替换 ↓↓↓ */
    categories: [
        {
            id: 'common',
            name: '常用',
            sites: [
                { name: 'GitHub', url: 'https://github.com', desc: '全球最大的代码托管平台' },
                { name: '打字速度测试', url: 'https://monkeytype.com/', desc: '简洁的打字测速网站' },
                { name: '哔哩哔哩', url: 'https://www.bilibili.com', desc: '视频弹幕网站' },
                { name: '知乎', url: 'https://www.zhihu.com', desc: '问答社区' },
                { name: '图虫', url: 'https://tuchong.com', desc: '摄影师社区与图片库' },
                { name: 'MDN Web Docs', url: 'https://developer.mozilla.org', desc: 'Web 开发权威文档' },
                { name: '中国大学 MOOC', url: 'https://www.icourse163.org', desc: '国家精品课程在线学习平台' },
                { name: '500px', url: 'https://500px.com', desc: '国际摄影社区' },
                { name: '我要自学网', url: 'https://www.51zxw.net', desc: '综合技能自学教程网站' },
                { name: '茶杯狐', url: 'https://www.cupfox.app', desc: '影视资源搜索聚合' },
                { name: 'CNU', url: 'http://www.cnu.cc/', desc: '视觉联盟' },
                { name: '美国国家地理', url: 'https://www.nationalgeographic.com/', desc: '地理杂志网站' },
                { name: 'YouTube', url: 'https://www.youtube.com/', desc: '全球最大的视频网站' },
                { name: 'Wallhaven', url: 'https://wallhaven.cc/', desc: '高品质壁纸网站' },
                { name: 'CSDN', url: 'https://www.csdn.net/', desc: '国内开发者社区' },
                { name: '油叉', url: 'https://greasyfork.org/zh-CN/scripts', desc: '脚本网站' },
                { name: 'W3school', url: 'https://www.w3school.com.cn/', desc: '代码学习网站' },
                { name: '今日热榜', url: 'https://tophub.today/', desc: '各平台热搜' },
                { name: 'INS', url: 'https://www.instagram.com/', desc: '全球图片社交网站' },
                { name: '优设网', url: 'https://www.uisdc.com/', desc: '国内设计师平台' },
                { name: '歌词搜索', url: 'https://lyrics.net.cn/', desc: '歌词网站' },
                { name: '电影资源站', url: 'https://www.hdmo.li/', desc: '有点东西的网站' },
                { name: '音乐资源站', url: 'https://music.gdstudio.xyz/', desc: '有点东西的网站' },
                { name: '大悟读书网', url: 'https://5165.org/#gsc.tab=0', desc: '有点东西的网站' },
                { name: '卫星地图八九网', url: 'https://bajiu.cn/', desc: '卫星地图网站' },
                
            ]
        },
        
        
        
    ]
    /* ↑↑↑ 示例数据到此为止 ↑↑↑ */
};
