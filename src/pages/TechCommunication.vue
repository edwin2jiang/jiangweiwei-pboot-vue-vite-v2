<script >
export default {
    data() {
        return {
            textArr: [
                {
                    text: 'PbootCMS怎么修改管理员密码',
                    time: '2021-10-28',
                    isRecommend: false,
                },
                {
                    text: 'PbootCMS灵活的多层级URL地址模式配置',
                    time: '2021-10-28',
                    isRecommend: false,
                },
                {
                    text: 'PbootCMS自定义前台404错误页面',
                    time: '2021-10-28',
                    isRecommend: false,
                },
                {
                    text: '关于PbootCMS系统用户授权的声明',
                    time: '2021-09-27',
                    isRecommend: false,
                },
                {
                    text: '阿里云ECS服务器搭建PbootCMS企业网站',
                    time: '2021-02-15',
                    isRecommend: false,
                },
                {
                    text: 'PbootCMS怎么修改域名授权提示信息',
                    time: '2021-02-15',
                    isRecommend: false,
                },
                { text: 'SEO优化之扁平化目录结构', time: '2019-08-07', isRecommend: false },
                {
                    text: '[入门版] 第四课：PbootCMS标签的用处和调用-[晨星傲月]',
                    time: '2019-07-24',
                    isRecommend: true,
                },
                {
                    text: '[入门版] 第三课：PbootCMS开启独立手机端和模板设置-[晨星傲月]',
                    time: '2019-07-24',
                    isRecommend: true,
                },
                {
                    text: '[入门版] 第二课：PbootCMS模板设置和中英文的开启-[晨星傲月]',
                    time: '2019-07-24',
                    isRecommend: true,
                },
                {
                    text: 'PbootCMS灵活的多层级URL地址模式配置',
                    time: '2021-10-28',
                    isRecommend: false,
                },
                {
                    text: 'PbootCMS自定义前台404错误页面',
                    time: '2021-10-28',
                    isRecommend: false,
                },
                {
                    text: '关于PbootCMS系统用户授权的声明',
                    time: '2021-09-27',
                    isRecommend: false,
                },
                {
                    text: '阿里云ECS服务器搭建PbootCMS企业网站',
                    time: '2021-02-15',
                    isRecommend: false,
                },
                {
                    text: 'PbootCMS怎么修改域名授权提示信息',
                    time: '2021-02-15',
                    isRecommend: false,
                },
            ],
            inputText: '',
            pageNum: 10, // 一页10条数据
            currentPage: 1,
            itemStyle: {
                borderBottom: '1px solid #dee2e6',
                padding: '10px',
                justifyContent: 'space-between',
                display: 'flex'
            }
        }
    },
    computed: {
        getPages() {
            return Math.ceil(this.getList.length / this.pageNum)
        },
        getList() {
            const { textArr, inputText } = this
            const list = textArr.filter(item => item.text.toLowerCase().indexOf(inputText.toLowerCase()) != -1)
            return list
        },
        getListWithFilter() {
            const { currentPage, pageNum } = this
            return this.getList.slice((currentPage - 1) * pageNum, (currentPage) * pageNum)
        }
    },
    methods: {
        changeCurrentPage(index) {
            console.log(index)
            if (index < this.getPages && index >= 0)
                this.currentPage = index + 1
        }
    },
}
</script>

<template>
    <main>
        <div class="container m-c">
            <header class="m-4">
                <img src="/images/techCommunication/txBanner.jpg" alt="图片" style="width: 100%;" />
            </header>

            <!-- 广告文本 -->
            <div class="text-red m-2">投稿邮箱：286545339@qq.com，投稿可留友情链接。</div>

            <!-- 标签跳转 -->
            <nav class="nav p-4">
                <!-- 
                        全部 56
                        系统使用 30
                        环境部署 5
                        建站工具 6
                        视频教程 15
                -->
                <div class="btn btn-dark">
                    <span class="text">全部</span>
                    <span class="btn btn-light sm">56</span>
                </div>
                <div class="btn btn-light">
                    <span class="text">系统使用</span>
                    <span class="btn btn-dark sm">30</span>
                </div>
                <div class="btn btn-light">
                    <span class="text">环境部署</span>
                    <span class="btn btn-dark sm">5</span>
                </div>
                <div class="btn btn-light">
                    <span class="text">建站工具</span>
                    <span class="btn btn-dark sm">6</span>
                </div>
                <div class="btn btn-light">
                    <span class="text">视频教程</span>
                    <span class="btn btn-dark sm">15</span>
                </div>
            </nav>

            <!-- 提示 -->
            <h1 style="color: blueviolet;">已实现搜索和分页, 可以尝试输入关键词哦。例如输入关键词,阿里云</h1>

            <!-- 搜索信息页 -->
            <section class="searchContentBox">
                <div class="input-bar flex justify-center m-4">
                    <input class="form-input" type="text" placeholder="请输入内容" v-model="inputText" />
                    <div class="btn btn-dark">搜索</div>
                </div>

                <div id="content" class="content p-4">
                    <div :style="itemStyle" v-for="(item, index) in getListWithFilter" :key="index">
                        <div :class="{ 'text-link': true, 'recommend': item.isRecommend }">
                            <img src="/images/techCommunication/prefx.png" alt="图片" />
                            <a href="#">{{ item.text }}</a>
                        </div>
                        <span class="time">{{ item.time }}</span>
                    </div>
                </div>

                <div class="pages flex justify-center p-4" v-show="getPages !== 0">
                    <a class="page-item page-link" href="#" @click="changeCurrentPage(0)">首页</a>
                    <a
                        class="page-item page-link"
                        href="#"
                        @click="changeCurrentPage(currentPage - 2)"
                    >上一页</a>

                    <a
                        href="javascript:void(0)"
                        :class="{ 'page-num': true, 'page-num-current': (currentPage === index + 1) }"
                        v-for="(item, index) in getPages"
                        :key="index"
                        @click="changeCurrentPage(index)"
                    >{{ index + 1 }}</a>

                    <a
                        class="page-item page-link"
                        href="#"
                        @click="changeCurrentPage(currentPage)"
                    >下一页</a>
                    <a
                        class="page-item page-link"
                        href="#"
                        @click="changeCurrentPage(getPages - 1)"
                    >尾页</a>
                </div>

                <div v-show="getPages === 0" style="margin-bottom: 40px; font-size: 18px;">暂无相关数据</div>
            </section>
        </div>
    </main>
</template>
 
<style scoped lang="scss">
.btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;

    font-size: 14px;

    cursor: pointer;

    margin: 0 3px;
    border: 1px solid transparent;
    padding: 0.175rem 0.65rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    /* 禁止用户选择 */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.btn.sm {
    padding: 0rem 0.25rem;
}

.btn-light {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
}

.btn-dark {
    color: #fff;
    background-color: #17a2b8;
    border-color: #17a2b8;
}

.btn-info:hover {
    color: #fff;
    background-color: #138496;
    border-color: #117a8b;
}

.btn-light:hover {
    color: #212529;
    background-color: #e2e6ea;
    border-color: #dae0e5;
}

.content .item {
    border-bottom: 1px solid #dee2e6;
    padding: 10px;
}

.text-link.recommend::after {
    content: "推荐";
    display: inline-block;
    background-color: #ffc107;
    padding: 4px;
    color: #212529;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
}

.page-link {
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #007bff;
    background-color: #fff;
    border: 1px solid #dee2e6;
    cursor: pointer;
}

.page-num,
.page-link {
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #17a2b8;
    background-color: #fff;
    border: 1px solid #dee2e6;
}

.page-num-current {
    z-index: 1;
    color: #fff;
    background-color: #17a2b8;
    border-color: #17a2b8;
}

.form-input {
    display: inline-block;
    width: 180px;
    height: 18px;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    margin-right: 10px;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-input:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
</style>