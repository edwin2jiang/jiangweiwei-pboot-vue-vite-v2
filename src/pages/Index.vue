<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue"

const width = 1918
    , systemCharacterArr = [{ pic: './images/banner/banner0.png', text: '便捷的模板标签', detail: '采用高效、简洁的模板标签，只要懂HTML即可快速开发网站', }, { pic: './images/banner/banner1.png', text: '自主研发的内核框架', detail: '系统采用自主研发的高速多层框架及缓存技术，代码整齐规范，便于二次开发', }, { pic: './images/banner/banner2.png', text: '便捷的数据库类型', detail: '系统默认采用Sqlite轻型数据库，放入空间即可直接使用，同时支持MySQL等数据库', }, { pic: './images/banner/banner3.png', text: '响应式管理后台', detail: '采用基于LayUI的响应式管理后台，满足各类设备随时管理的需要', }, { pic: './images/banner/banner4.png', text: '小程序、APP等程序对接', detail: '系统提供大量HTTP接口，支持小程序、APP、Ajax等方式数据调用', }, { pic: './images/banner/banner5.png', text: '自定义内容模型及字段', detail: '支持自定义内容模型及字段，实现自主增添不同模型的内容字段', }, { pic: './images/banner/banner6.png', text: '多语言区域建站', detail: '系统支持多语言多区域建站并支持绑定域名，支持配置不同模板、基础信息及内容', }, { pic: './images/banner/banner7.png', text: '不限量自定义表单', detail: '系统支持不限量自定义表单、自定义留言板，满足各类数据提交的需要', }, { pic: './images/banner/banner8.png', text: '多条件筛选及搜索', detail: '系统支持多条件筛选及搜索功能，并且使用方式极其简单', }, { pic: './images/banner/banner9.png', text: '伪静态及前端动态缓存', detail: '支持全站伪静态及前端动态缓存，自主配置缓存时间，方便快捷', }, { pic: './images/banner/banner10.png', text: '后台在线升级', detail: '系统支持后台跨版本在线升级，无需单独操作数据库及FTP，免去升级烦恼', }, { pic: './images/banner/banner11.png', text: '独立手机版或自适应', detail: '支持独立手机版建站或自适应手机版建站，满足个性化需要', }, { pic: './images/banner/banner12.png', text: '支持自定义URL', detail: '通过配置系统地址路由及自定义文件名，可以满足各类个性化SEO的需要', }, { pic: './images/banner/banner13.png', text: '支持首页分页', detail: '系统支持首页分页功能，满足建立博客等类型系统的需要', }, { pic: './images/banner/banner14.png', text: '留言发送到邮箱', detail: '系统支持留言信息发送到多个邮箱的，有留言第一时间知晓', }, { pic: './images/banner/banner15.png', text: '支持N组幻灯片', detail: '系统支持N组幻灯片，配合栏目大图可以满足各类应用场景调用的需要', }, { pic: './images/banner/banner16.png', text: '自定义标签', detail: '系统支持自定义内容标签，可将一些模板内容后台化，方便后期修改', }, { pic: './images/banner/banner17.png', text: '支持会员功能', detail: '系统支持会员注册登陆、文章评论、权限浏览等', }, { pic: './images/banner/banner18.png', text: '支持在线商城', detail: '系统支持商品下单购买及支付、满足小商城建设的需要（暂未开发）', }, { pic: './images/banner/banner19.png', text: '支持公众号管理', detail: '系统支持公众号内容、菜单、粉丝等管理的功能（暂未开发）', },]
    , articles = [{ 'title': 'PbootCMS怎么修改管理员密码', 'time': '2021-10-28' }, { 'title': 'PbootCMS灵活的多层级URL地址模式配置', 'time': '2021-10-28' }, { 'title': 'PbootCMS自定义前台404错误页面', 'time': '2021-10-28' }, { 'title': '关于PbootCMS系统用户授权的声明', 'time': '2021-09-27' }, { 'title': '阿里云ECS服务器搭建PbootCMS企业网站', 'time': '2021-02-15' }, { 'title': 'PbootCMS怎么修改域名授权提示信息', 'time': '2021-02-15' }, { 'title': 'SEO优化之扁平化目录结构', 'time': '2019-08-07' }, { 'title': '[入门版]第四课：PbootCMS标签的用处和调用-[晨星傲月]', 'time': '2019-07-24' }, { 'title': '[入门版]第三课：PbootCMS开启独立手机端和模板设置-[晨···', 'time': '2019-07-24' }, { 'title': '[入门版]第二课：PbootCMS模板设置和中英文的开启-[晨星···', 'time': '2019-07-24' }]
    , logs = [{ 'title': 'PbootCMS V3.1.3 build 2022-01-03', 'time': '2022-01-03' }, { 'title': ' PbootCMS V3.1.2 build 2021-10-28', 'time': ' 2021-10-28' }, { 'title': ' PbootCMS V3.1.1 build 2021-10-26', 'time': ' 2021-10-26' }, { 'title': ' PbootCMS V3.1.0 build 2021-10-24', 'time': ' 2021-10-24' }, { 'title': ' PbootCMS V3.0.9 build 2021-10-13', 'time': ' 2021-10-13' }, { 'title': ' PbootCMS V3.0.8 build 2021-10-11', 'time': ' 2021-10-11' }, { 'title': ' PbootCMS V3.0.7 build 2021-10-09', 'time': ' 2021-10-09' }, { 'title': ' PbootCMS V3.0.6 build 2021-09-29', 'time': ' 2021-09-29' }, { 'title': ' PbootCMS V3.0.5 build 2021-06-18', 'time': ' 2021-06-18' }, { 'title': ' PbootCMS V3.0.4 build 2021-02-14', 'time': ' 2021-02-14' }]
    , slides = ref(null)

let timer = null
    , slideActiveIndex = ref(0)


function clickPoint(index) {
    let slidesDom = slides.value
    clearTimer()
    slideActiveIndex.value = index

    slidesDom.style.marginLeft = '-' + width * index + 'px';
    slidesDom.style.transition = 1 + 's';
    startTimer()
}
function startTimer() {
    clearInterval(timer)
    timer = setInterval(() => {
        if (slideActiveIndex.value === 0) {
            clickPoint(1)
        } else if (slideActiveIndex.value === 1) {
            clickPoint(0)
        }
    }, 2000)
}
function clearTimer() {
    clearInterval(timer);
}

onMounted(() => {
    clearTimer()
    startTimer()
})

onBeforeUnmount(() => {
    clearTimer()
}) 
</script>

<template>
    <!-- 主界面 -->
    <main class="main">
        <!-- Carousels轮播图 -->
        <section class="w-100p">
            <!-- 用于裁剪出一张图 -->
            <div class="box">
                <div class="slides" ref="slides">
                    <img class="slide" src="@/assets/images/banner1.jpg" alt="图片" width="1918" />
                    <img class="slide" src="@/assets/images/banner2.jpg" alt="图片" width="1918" />
                    <img class="slide" src="@/assets/images/banner1.jpg" alt="图片" width="1918" />
                </div>
                <div class="pointers">
                    <span
                        class="inline-block pointer"
                        v-for="(item, index) in 2"
                        :key="index"
                        :class="{ 'active': index === slideActiveIndex }"
                        @click="clickPoint(index)"
                    ></span>
                </div>
            </div>
        </section>
        <!-- /Carousels轮播图 -->

        <!-- 系统简介 -->
        <article class="sysDes flex flex-col justify-center part text-center p-tb-8">
            <div class="container m-c">
                <div class="head-text fadeInDown">系统简介</div>
                <div class="des-text fadeInUp">
                    <span class="des">免费、开源、高效、简洁、强悍的CMS源码</span>
                </div>
                <div class="sys-description text text-left fadeInUp">
                    PbootCMS是全新内核且永久开源免费的PHP企业网站开发建设管理系统，是一套高效、简洁、 强悍的可免费商用的PHP
                    CMS源码，能够满足各类企业网站开发建设的需要。系统采用简单到想哭的模板标签，只要懂HTML就可快速开发企业网站。官方提供了大量网站模板免费下载和使用，将致力于为广大开发者和企业提供最佳的网站开发建设解决方案。1、系统采用高效、简洁、强悍的模板标签，只要懂HTML就可快速开发企业网站；2、系统采用PHP语言开发，使用自主研发的高速多层开发框架及缓存技术；3、系统默认采用sqlite轻型数据库，放入PHP空间即可直接使用，可选mysql.
                    pgsql等数据库，满足各类存储需求；4、系统采用响应式管理后台，满足各类设备随时管理的需要；5、系统支持后台在线升级，满足系统及时升级更新的需要；6、系统支持内容模型、多语言、自定义表单、筛选、多条件搜索、小程序、APP等功能；7、系统支持多种URL模式及模型、栏目、内容自定义地址名称，满足各类网站推广优化的需要；授权声明：1、PbootCMS是免费可商用的建站系统，用户通过官网获取免费域名授权码即算授权成功，并永久有效，授权后允许删除前后台页面版权标识。
                    <br />
                    <a href="#" style="color: #6c757d;">&nbsp;&nbsp;&nbsp;查看更多...</a>
                </div>
            </div>
        </article>
        <!-- /系统简介 -->

        <!-- 系统特色 -->
        <article class="sysCharac flex flex-col justify-center part text-center p-tb-8">
            <div class="m-center">
                <div class="head-text animated">系统特色</div>
                <div class="des-text animated">
                    <span class="des">永久开源、免费的 PHP 建站系统</span>
                </div>

                <div
                    id="system-character"
                    class="animated detail-part flex justify-center flex-wrap container"
                >
                    <div
                        class="item flex flex-col justify-center align-center"
                        v-for="(item, index) in systemCharacterArr"
                        :key="index"
                    >
                        <img :src="item.pic" alt="图片" width="60" />
                        <div class="text">{{ item.text }}</div>
                        <div class="des-detail p-4">{{ item.detail }}</div>
                    </div>
                </div>
            </div>
        </article>
        <!-- /系统特色 -->

        <!-- 技术交流 -->
        <article class="flex flex-col justify-center part text-center p-8">
            <section class="m-center">
                <div class="head-text fadeInDown">技术交流</div>
                <div class="des-text fadeInUp">
                    <span class="des">
                        为您提供CMS系统开发建设及使用知识
                        PHP 建站系统
                    </span>
                </div>
                <section class="communicate-tech flex justify-between">
                    <div
                        class="box flex flex-col justify-start text-left fadeInLeft animation-delay-1000"
                    >
                        <div>最新文章：</div>
                        <div class="articles">
                            <ul id="articles-ul">
                                <div v-for="item in articles">
                                    <li>
                                        <div class="article flex">
                                            <img src="@/assets/images/prefx.png" alt="前缀图片" />
                                            <a style="flex: 2;">{{ item.title }}</a>
                                            <span>{{ item.time }}</span>
                                        </div>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div
                        class="box flex flex-col justify-start text-left fadeInRight animation-delay-1000"
                    >
                        <div>更新日志:</div>
                        <div class="logs">
                            <ul id="logs-ul">
                                <div v-for="item in logs">
                                    <li>
                                        <div class="article flex">
                                            <img src="@/assets/images/prefx.png" alt="前缀图片" />
                                            <a style="flex: 2;">{{ item.title }}</a>
                                            <span>{{ item.time }}</span>
                                        </div>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </article>
        <!-- /技术交流 -->
    </main>
    <!-- /主界面 -->
</template>


<style scoped lang="scss">
@import "@/assets/css/index.css";

.box {
    width: 100%;
    height: 480px;
    overflow: hidden;
    position: relative;
}

.slides {
    width: 5760px;
    height: 480px;
    position: relative;
    display: flex;
    overflow: hidden;
    margin-left: 0px;
    /* transition: all 2s ease-in-out; */
}

.slide {
    width: 1918px;
    height: 480px;
}

.pointers {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-100%);
    z-index: 998;
}

.pointers .pointer {
    width: 10px;
    height: 10px;
    margin: 0 2px;
    border-radius: 100%;
    background-color: #aab8c2;
}

.pointers .pointer.active {
    background-color: #007aff;
}

.pointer:hover {
    background-color: #007aff;
}
</style>