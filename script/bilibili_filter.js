class URL {

    constructor(url) {
        let match = url.match(/^(https?:)\/\/(([^:\/?#]*)(?::([0-9]+))?)([\/]?[^?#]*)(\?[^#]*|)(#.*|)$/);
        this.href = url;
        this.protocol = match[1];
        this.host = match[2];
        this.hostname = match[3];
        this.port = match[4];
        this.pathname = match[5];
        this.search = match[6];
        this.hash = match[7];
    }
}

let url = new URL($request.url)
let body = JSON.parse($response.body);

switch (url.pathname) {
    case "/x/v2/splash/list":
        body.data = {};
        break;
    case "/x/resource/show/tab":
        body.data.top = [
            {
                "id": 176,
                "icon": "http://i0.hdslb.com/bfs/archive/d43047538e72c9ed8fd8e4e34415fbe3a4f632cb.png",
                "name": "消息",
                "uri": "bilibili://link/im_home",
                "tab_id": "消息Top",
                "pos": 1
            }
        ];
        body.data.tab = [
            {
                "id": 42,
                "name": "番剧",
                "uri": "bilibili://pgc/home",
                "tab_id": "追番Tab",
                "pos": 1,
                "default_selected": 1
            },
            {
                "id": 40,
                "name": "推荐",
                "uri": "bilibili://pegasus/promo",
                "tab_id": "推荐tab",
                "pos": 2
            },
            {
                "id": 41,
                "name": "热门",
                "uri": "bilibili://pegasus/hottopic",
                "tab_id": "热门tab",
                "pos": 3
            },
            {
                "id": 151,
                "name": "影视",
                "uri": "bilibili://pgc/cinema-tab",
                "tab_id": "影视tab",
                "pos": 4
            },
            {
                "id": 39,
                "name": "直播",
                "uri": "bilibili://live/home",
                "tab_id": "直播tab",
                "pos": 5
            },
        ];
        body.data.bottom = [
            {
                "id": 177,
                "icon": "http://i0.hdslb.com/bfs/archive/63d7ee88d471786c1af45af86e8cb7f607edf91b.png",
                "icon_selected": "http://i0.hdslb.com/bfs/archive/e5106aa688dc729e7f0eafcbb80317feb54a43bd.png",
                "name": "首页",
                "uri": "bilibili://main/home/",
                "tab_id": "首页Bottom",
                "pos": 1
            },
            {
                "id": 178,
                "icon": "http://i0.hdslb.com/bfs/archive/9c453a54eb83f5140cd098bf2e8ed8a599edc7fe.png",
                "icon_selected": "http://i0.hdslb.com/bfs/archive/79d29e6ac3b6e52652881b050e63988e2038130f.png",
                "name": "频道",
                "uri": "bilibili://pegasus/channel/",
                "tab_id": "频道Bottom",
                "pos": 2
            },
            {
                "id": 179,
                "icon": "http://i0.hdslb.com/bfs/archive/86dfbe5fa32f11a8588b9ae0fccb77d3c27cedf6.png",
                "icon_selected": "http://i0.hdslb.com/bfs/archive/25b658e1f6b6da57eecba328556101dbdcb4b53f.png",
                "name": "动态",
                "uri": "bilibili://following/home/",
                "tab_id": "动态Bottom",
                "pos": 3
            },
            {
                "id": 181,
                "icon": "http://i0.hdslb.com/bfs/archive/4b0b2c49ffeb4f0c2e6a4cceebeef0aab1c53fe1.png",
                "icon_selected": "http://i0.hdslb.com/bfs/archive/a54a8009116cb896e64ef14dcf50e5cade401e00.png",
                "name": "我的",
                "uri": "bilibili://user_center/",
                "tab_id": "我的Bottom",
                "pos": 4
            }
        ];
        break;
    case "/x/v2/account/mine":
        body.data.sections_v2[3] = {
            "title": "推荐服务",
            "items": [
                {
                    "id": 400,
                    "title": "我的课程",
                    "uri": "https://m.bilibili.com/cheese/mine?navhide=1",
                    "icon": "http://i0.hdslb.com/bfs/archive/aa3a13c287e4d54a62b75917dd9970a3cde472e1.png"
                },
                {
                    "id": 402,
                    "title": "个性装扮",
                    "uri": "https://www.bilibili.com/h5/mall/home?navhide=1\u0026from=myservice",
                    "icon": "http://i0.hdslb.com/bfs/archive/0bcad10661b50f583969b5a188c12e5f0731628c.png"
                },
                {
                    "id": 403,
                    "title": "游戏中心",
                    "uri": "bilibili://game_center/user?sourceFrom=100003",
                    "icon": "http://i0.hdslb.com/bfs/archive/873e3c16783fe660b111c02ebc4c50279cb5db57.png"
                },
                {
                    "id": 404,
                    "title": "我的钱包",
                    "uri": "bilibili://bilipay/mine_wallet",
                    "icon": "http://i0.hdslb.com/bfs/archive/f416634e361824e74a855332b6ff14e2e7c2e082.png"
                },
                {
                    "id": 405,
                    "title": "会员购中心",
                    "uri": "bilibili://mall/mine?msource=mine",
                    "icon": "http://i0.hdslb.com/bfs/archive/19c794f01def1a267b894be84427d6a8f67081a9.png"
                },
                {
                    "id": 421,
                    "title": "创作学院",
                    "uri": "https://member.bilibili.com/college?navhide=1\u0026from=my",
                    "icon": "http://i0.hdslb.com/bfs/archive/12327dba191bc36e9e65a815aa56aa9bb9225c7e.png",
                    "need_login": 1
                },
                {
                    "id": 514,
                    "title": "反馈论坛",
                    "uri": "bilibili://following/activity_group_landing/7?page_id=262\u0026tab_module_id=19",
                    "icon": "http://i0.hdslb.com/bfs/archive/551a39b7539e64d3b15775295c4b2e13e5513b43.png",
                    "need_login": 1
                }
            ],
            "style": 1,
            "button": {}
        }
        break;
    case "/x/v2/search/square":
        body.data = [
            {
                "type": "history",
                "title": "搜索历史"
            }
        ];
        break;
    case "/x/v2/search/defaultwords":
        body.data = {};
        break;
    case "/x/v2/feed/index":
        body.data.items = body.data.items.filter(function (item) {
            return item.card_goto !== "ad_web_s" && item.card_goto !== "ad_web_gif";
        });
        break;
}

$done({
    body: JSON.stringify(body)
});
