<script setup lang="ts">
import { computed, ref } from "vue"

let text = ref("")
let realText = ref("")

function changeText() {
    realText.value = text.value
}

const arr = [
    {
        "title": "织梦园",
        "pic": "/images/sysRec/mw600_mh_1636708270923910.JPEG",
        "cardtext": "织梦园模板网(www.DedeYuan.Com)专注网站模板制作7年.网站内容主要提供包括···\n\t\t\t\t\t\n\t\t\t\t",
        "badge": "推荐",
        "cardfooter": "\n\t\t\t\t浏览量：235068 \n\t\t\t\t上架日期：2021-11-12\n\t\t\t  ",
        "time": "上架日期：2021-11-12",
        "isRec": true,
        "isFirst": true,
    },
    {
        "title": "跟版网模板",
        "pic": "/images/sysRec/mw600_mh_1646034643735622.JPEG",
        "cardtext": "跟版网（genban.org）是专业的网站模板和源码下载站，提供PBootCMS模板和PB···\n\t\t\t\t\t\n\t\t\t\t",
        "badge": "推荐",
        "cardfooter": "\n\t\t\t\t浏览量：992 \n\t\t\t\t上架日期：2022-02-28\n\t\t\t  ",
        "time": "上架日期：2022-02-28",
        "isRec": true,
        "isFirst": true,
    },
    {
        "title": "PB模板库",
        "pic": "/images/sysRec/mw600_mh_1641910879977293.JPEG",
        "cardtext": "PB模板网(5moban.com)专注整站带数据的pbootcms模板制作,更新频率快。主要包···\n\t\t\t\t\t\n\t\t\t\t",
        "badge": "推荐",
        "cardfooter": "\n\t\t\t\t浏览量：2604394 \n\t\t\t\t上架日期：2021-11-20\n\t\t\t  ",
        "time": "上架日期：2021-11-20",
        "isRec": true,
        "isFirst": true,
    },
    {
        "title": "麦站网",
        "pic": "/images/sysRec/mw600_mh_1634977859734112.JPEG",
        "cardtext": "麦站隶属于秀站网络科技有限公司，提供精品与原创Pbootcms模板，一站式建站···\n\t\t\t\t\t\n\t\t\t\t",
        "badge": "推荐",
        "cardfooter": "\n\t\t\t\t浏览量：72477 \n\t\t\t\t上架日期：2021-10-23\n\t\t\t  ",
        "time": "上架日期：2021-10-23",
        "isRec": true,
        "isFirst": true,
    },
    {
        "title": "易排名SEO",
        "pic": "/images/sysRec/mw600_mh_1641874881423888.JPEG",
        "cardtext": "易排名【seo.wtc.cn】专注于SEO单词优化_整站优化_整站收录_词库分析_AI写作···\n\t\t\t\t\t\n\t\t\t\t",
        "badge": "推荐",
        "cardfooter": "\n\t\t\t\t浏览量：163500 \n\t\t\t\t上架日期：2022-01-11\n\t\t\t  ",
        "time": "上架日期：2022-01-11",
        "isRec": true,
        "isFirst": true,
    },
    {
        "title": "快模板",
        "pic": "/images/sysRec/mw600_mh_1641819271465013.PNG",
        "cardtext": "快模板(moban.511h.com)专注提供pbootcms模板下载及分享\n\t\t\t\t\t\n\t\t\t\t",
        "badge": "推荐",
        "cardfooter": "\n\t\t\t\t浏览量：3208881 \n\t\t\t\t上架日期：2022-01-10\n\t\t\t  ",
        "time": "上架日期：2022-01-10",
        "isRec": true,
        "isFirst": true,
    },
    {
        "title": "金黑网络",
        "pic": "/images/sysRec/mw600_mh_1634117618108982.JPEG",
        "cardtext": "\n\t\t\t\t\t推荐\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t金黑网络专注网站建设,小程序app开发,系统开发,关键词优化,全网推广...\n\t\t\t\t\t\n\t\t\t\t",
        "badge": "推荐",
        "cardfooter": "\n\t\t\t\t浏览量：1455 \n\t\t\t\t上架日期：2021-10-26\n\t\t\t  ",
        "time": "上架日期：2021-10-26"
    },
    {
        "title": "格展网络",
        "pic": "/images/sysRec/mw600_mh_1636456233691886.JPEG",
        "cardtext": "\n\t\t\t\t\t推荐\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t格展网络主要扩展网站模板制作，pbootcms模板，企业网站模板，网站源码下载，营销···\n\t\t\t\t\t\n\t\t\t\t",
        "badge": "推荐",
        "cardfooter": "\n\t\t\t\t浏览量：6649 \n\t\t\t\t上架日期：2021-10-17\n\t\t\t  ",
        "time": "上架日期：2021-10-17"
    },
    {
        "title": "PB素材网",
        "pic": "/images/sysRec/mw600_mh_1634117618108982.JPEG",
        "cardtext": "\n\t\t\t\t\t推荐\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t专注开发PBOOTCMS企业模板，海量PBOOTCMS模板源码可下,持续更新PBOOTCMS模板\n\t\t\t\t\t\n\t\t\t\t",
        "badge": "推荐",
        "cardfooter": "\n\t\t\t\t浏览量：5006 \n\t\t\t\t上架日期：2021-10-13\n\t\t\t  ",
        "time": "上架日期：2021-10-13"
    },
    {
        "title": "Aii文章生成器",
        "pic": "/images/sysRec/mw600_mh_1635840987701087.PNG",
        "cardtext": "\n\t\t\t\t\t推荐\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t一键批量生成搜索引擎高收录、高原创度文章，定时自动发布到Pboot等CMS打造一站式···\n\t\t\t\t\t\n\t\t\t\t",
        "badge": "推荐",
        "cardfooter": "\n\t\t\t\t浏览量：2626 \n\t\t\t\t上架日期：2021-11-02\n\t\t\t  ",
        "time": "上架日期：2021-11-02"
    },
    {
        "title": "AB模板网",
        "pic": "/images/sysRec/mw600_mh_1634115995412272.PNG",
        "cardtext": "\n\t\t\t\t\t推荐\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tAB模板网专注企业网站模板制作，包括pbootcms模板，企业网站模板，网站源码下载，···\n\t\t\t\t\t\n\t\t\t\t",
        "badge": "推荐",
        "cardfooter": "\n\t\t\t\t浏览量：6238 \n\t\t\t\t上架日期：2021-10-13\n\t\t\t  ",
        "time": "上架日期：2021-10-13"
    },
    {
        "title": "牛蚁写作伪原创工具",
        "pic": "/images/sysRec/mw600_mh_1634201401164832.JPEG",
        "cardtext": "\n\t\t\t\t\t推荐\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t打造一站式CMS文章收集、原创、发布、收录工具，在线文章全场景解决方案\n\t\t\t\t\t\n\t\t\t\t",
        "badge": "推荐",
        "cardfooter": "\n\t\t\t\t浏览量：21602 \n\t\t\t\t上架日期：2021-10-14\n\t\t\t  ",
        "time": "上架日期：2021-10-14"
    },
    {
        "title": "缇墨网络科技有限公司",
        "pic": "/images/sysRec/mw600_mh_1538389049170805.JPEG",
        "cardtext": "\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t专注制作精美的网站、网站建设、logo/名片设计、淘宝装修、照片处理等\n\t\t\t\t\t\n\t\t\t\t",
        "badge": "",
        "cardfooter": "\n\t\t\t\t浏览量：17913 \n\t\t\t\t上架日期：2021-02-14\n\t\t\t  ",
        "time": "上架日期：2021-02-14"
    },
    {
        "title": "PbootCMS小程序 DIY拖拽可···",
        "pic": "/images/sysRec/mw600_mh_1639743934200815.JPEG",
        "cardtext": "\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t基于PbootCMS二次开发的插件覆盖包。与网站数据打通，多端同步，实现一站式内容管···\n\t\t\t\t\t\n\t\t\t\t",
        "badge": "",
        "cardfooter": "\n\t\t\t\t浏览量：1838 \n\t\t\t\t上架日期：2021-12-17\n\t\t\t  ",
        "time": "上架日期：2021-12-17"
    },
    {
        "title": "酷夫资源网",
        "pic": "/images/sysRec/mw600_mh_1635177047209769.PNG",
        "cardtext": "\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t酷夫资源网火车头采集规则定制，正版源码折扣销售，模板制作，包括pbootcms模板，···\n\t\t\t\t\t\n\t\t\t\t",
        "badge": "",
        "cardfooter": "\n\t\t\t\t浏览量：6060 \n\t\t\t\t上架日期：2021-10-25\n\t\t\t  ",
        "time": "上架日期：2021-10-25"
    },
    {
        "title": "PB企业小程序模板-青草飘飘···",
        "pic": "/images/sysRec/mw600_mh_1539220874495404.JPEG",
        "cardtext": "\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t企业网站小程序模板，和PBOOTCMS同后台，更新网站同步更新到小程序，可以自己修改···\n\t\t\t\t\t\n\t\t\t\t",
        "badge": "",
        "cardfooter": "\n\t\t\t\t浏览量：13794 \n\t\t\t\t上架日期：2021-02-15\n\t\t\t  ",
        "time": "上架日期：2021-02-15"
    },
    {
        "title": "广州程爸爸技术有限公司",
        "pic": "/images/sysRec/mw600_mh_1619744447965958.JPEG",
        "cardtext": "\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t广州程爸爸技术有限公司是经过广州市政府批准成立的专业技术公司，提供编程代写、···\n\t\t\t\t\t\n\t\t\t\t",
        "badge": "",
        "cardfooter": "\n\t\t\t\t浏览量：2611 \n\t\t\t\t上架日期：2021-04-30\n\t\t\t  ",
        "time": "上架日期：2021-04-30"
    },
    {
        "title": "山东千鹿网络-好易搜",
        "pic": "/images/sysRec/mw600_mh_1634201650868767.PNG",
        "cardtext": "\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t好易搜，主接业务：网站建设、网站优化、整站优化、万词霸屏、信息发布、网络推广···\n\t\t\t\t\t\n\t\t\t\t",
        "badge": "",
        "cardfooter": "\n\t\t\t\t浏览量：1209 \n\t\t\t\t上架日期：2021-10-14\n\t\t\t  ",
        "time": "上架日期：2021-10-14"
    },
    {
        "title": "远方资源网",
        "pic": "/images/sysRec/mw600_mh_1648432264393801.JPEG",
        "cardtext": "\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t远方资源网(www.gree020.cn)-免费PHP网站源码模板,游戏,字体,插件,软件,教程资源分···\n\t\t\t\t\t\n\t\t\t\t",
        "badge": "",
        "cardfooter": "\n\t\t\t\t浏览量：21 \n\t\t\t\t上架日期：2022-03-28\n\t\t\t  ",
        "time": "上架日期：2022-03-28"
    },
    {
        "title": "贵州易商网络",
        "pic": "/images/sysRec/mw600_mh_1634201650868767.PNG",
        "cardtext": "\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t贵州易商网络专注于定制网站、百度竞价优化、关键词霸屏、短视频推广及网络营销。\n\t\t\t\t\t\n\t\t\t\t",
        "badge": "",
        "cardfooter": "\n\t\t\t\t浏览量：1203 \n\t\t\t\t上架日期：2021-10-14\n\t\t\t  ",
        "time": "上架日期：2021-10-14"
    },
    {
        "title": "北京名创亿达科技有限公司",
        "pic": "/images/sysRec/mw600_mh_1634808831529752.JPEG",
        "cardtext": "\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t名创亿达致力于网站定制开发、百度SEO优化、快抖获客、竞价托管、竞价包年、百度爱···\n\t\t\t\t\t\n\t\t\t\t",
        "badge": "",
        "cardfooter": "\n\t\t\t\t浏览量：5346 \n\t\t\t\t上架日期：2021-10-21\n\t\t\t  ",
        "time": "上架日期：2021-10-21"
    },
    {
        "title": "常州布谷鸟信息技术有限公···",
        "pic": "/images/sysRec/mw600_mh_1619276327791247.JPEG",
        "cardtext": "\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t常州布谷鸟信息技术有限公司主要服务项目有：企业网站建设、商城网站开发、微信商···\n\t\t\t\t\t\n\t\t\t\t",
        "badge": "",
        "cardfooter": "\n\t\t\t\t浏览量：2810 \n\t\t\t\t上架日期：2021-04-24\n\t\t\t  ",
        "time": "上架日期：2021-04-24"
    },
    {
        "title": "无忧资源网",
        "pic": "/images/sysRec/mw600_mh_1634130407149347.JPEG",
        "cardtext": "\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t无忧资源网优质虚拟资源分享、网赚教程、网站源码、营销软件、pbootcms模板等资源···\n\t\t\t\t\t\n\t\t\t\t",
        "badge": "",
        "cardfooter": "\n\t\t\t\t浏览量：30253 \n\t\t\t\t上架日期：2021-10-13\n\t\t\t  ",
        "time": "上架日期：2021-10-13"
    }
]

const getFilterList = computed(() => {
    return arr.filter(item => item.title.indexOf(realText.value) > -1)
})

</script>

<template>
    <main>
        <section class="part1 w-1200">
            <img src="/images/recommendShopper/rmd1.jpg" style="width:100%" />
            <img src="/images/recommendShopper/rmd2.jpg" style="width:100%" />
            <p class="font14">
                需要入驻？
                <a>点击查看入驻须知</a>
            </p>
        </section>

        <section class="part2">
            <h1 style="color:red">
                <span>可以输入关键词,进行搜索</span>
            </h1>
            <div class="search">
                <input type="text" placeholder="请输入关键字" v-model="text" @keyup.enter="changeText"/>
                <input type="button" value="搜索" class="font14" @click="changeText" />
            </div>

            <div class="shoppers">
                <div v-for="(item, index) in getFilterList" :key="index">
                    <div>
                        <a>
                            <img :src="item.pic" style="width:100%;" />
                        </a>
                    </div>

                    <div class="card-body">
                        <h5>{{ item.title }}</h5>
                        <span class="font12 top" v-if="item.isFirst" style="margin-right:8px;">置顶</span>
                        <span
                            class="font12 recommend"
                            v-if="item.isRec"
                            style="margin-right:8px;"
                        >推荐</span>
                        <span class="font14 info">{{ item.cardtext }}</span>
                    </div>

                    <div class="card-footer font12">
                        浏览量:12345
                        <span class="fr">上架日期:2021-11-21</span>
                    </div>
                </div>
                <p style="margin-right:auto;outline:none"></p>
            </div>

            <div
                v-if="getFilterList.length === 0"
                style="margin-bottom:100px;font-size:30px;"
            >暂无相关数据</div>
        </section>
    </main>
</template>
 
<style scoped lang="scss">
#header {
    position: fixed;
    height: 57px;
    width: 100%;
    padding: 7px 14px;
    background-color: #f8f9fa;
    z-index: 999;
}

.container {
    width: 1110px;
    padding: 0 15px;
    margin: auto;
    display: flex;
    align-items: center;
}

.navbar {
    width: 100%;
}

.navbar ul {
    font-size: 14px;
    list-style: none;
    float: right;
}

.navbar a {
    color: rgba(0, 0, 0, 0.5);
}

.navbar ul li {
    text-align: center;
    padding: 7px 21px;
    float: left;
}

.navbar ul li:hover {
    color: #000000;
    cursor: pointer;
}

.nav-active {
    color: #000000;
}

.footer {
    background-color: #f8f9fa;
    text-align: center;
}

.footer p {
    color: #6c757d;
    padding: 10px 0;
}

.footer p:nth-child(1),
.footer p:nth-child(3) {
    border-top: 1px solid #dee2e6;
}

.arrow {
    margin: auto;
    border: 10px solid #27a8e1;
    border-bottom-color: white;
    width: 0;
    height: 0;
}

.back-top {
    position: fixed;
    padding-bottom: 10px;
    width: 60px;
    bottom: 50px;
    right: 50px;
    font-size: 12px;
    text-align: center;
    color: white;
    background-color: #27a8e1;
}

.back-top:hover {
    cursor: pointer;
}

.arrow {
    margin: auto;
    border: 10px solid #27a8e1;
    border-bottom-color: white;
    width: 0;
    height: 0;
    margin-bottom: 5px;
}

.part1,
.part2 {
    margin: 20px auto 0;
    width: 1140px;
}

.part1 p {
    margin-top: 14px;
}

.part1 a {
    text-decoration: none;
    color: red;
}

.search {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 7px;
}

.search input:nth-child(1) {
    padding: 7px 10px;
    margin-right: 15px;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    outline: none;
    /* outline-color: #b9daf0; */
}

.search input:nth-child(1):focus {
    border: none;
    box-shadow: 0 0 0 1px #42a7ff, 0 0 0 3px #bde7ff;
}

.search input:nth-child(2) {
    color: white;
    border: 0;
    /* border: 1px solid #17a2b8; */
    padding: 5px 10px;
    background-color: #17a2b8;
    border-radius: 0.25rem;
}

.shoppers {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.shoppers > div {
    width: 253px;
    border: 1px solid rgba(0, 0, 0, 0.125);
    /* border: 0 15px 0 15px solid antiquewhite; */
    /* height: 288px; */
    margin: 15px;
    /* background-color: antiquewhite; */
}

.empty {
    width: 253px;
    height: 0 !important;
}

/* .shoppers::after{
    content:' ';
    width: 50%;
} */

.card-body {
    line-height: 20px;
    width: 218px;
    margin: auto;
    margin: 17.5px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}

.card-body h5 {
    margin-bottom: 10.5px;
    height: 21px;
}

.top {
    color: white;
    background-color: #dc3545;
    border-radius: 0.25rem;
    padding: 2px 4px;
}

.recommend {
    background-color: #ffc107;
    border-radius: 0.25rem;
    padding: 2px 4px;
}

.card-footer {
    border-top: 1px solid #dee2e6;
    padding: 10.5px 17.5px;
}

.font12 {
    font-size: 12px;
}

.font14 {
    font-size: 14px;
}

.fr {
    float: right;
}

/* 消除content */
.top::before {
    content: "" !important;
}

/* 悬浮效果 */
.shoppers > div:hover {
    box-shadow: 11px 10px 8px 0px #ccc;
}

.shoppers > div {
    overflow: hidden;
}

.shoppers > div:hover img {
    transform: scale(1.2);
    transition-duration: 1s;
}

.shoppers > div:hover h5 {
    transform: translateX(60%);
    transition-duration: 1s;
}
</style>