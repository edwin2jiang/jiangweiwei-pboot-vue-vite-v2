<script>
import DevManualCompOne from "../components/devManual/DevManualCompOne.vue";
import DevManualCompSecond from "../components/devManual/DevManualCompSecond.vue";
import DevManualCompThird from "../components/devManual/DevManualCompThird.vue";
export default {
    data() {
        return {
            componentIndex: 0,
            arr: [
                "快速入门",
                "公共标签",
                "伪静态配置",
                "站点地图",
                "独立手机版",
                "公司信息",
                "站点信息",
                "导航菜单",
                "当前栏目",
                "指定栏目",
                "内容列表",
                "分页条",
                "内容详情",
                "指定内容",
                "内容多图遍历",
                "内容tags标签",
                "内容多选遍历",
                "幻灯片轮播",
                "友情链接",
                "留言板",
                "自定义表单",
                "会员标签",
                "文章评论",
                "我的评论",
                "多条件筛选",
                "多条件搜索",
                "多语言建站",
                "IF条件语句",
                "万能SQL标签",
                "Loop循环语句",
                "API接口"
            ]
        };
    },
    computed: {
        getComponent() {
            switch (this.componentIndex) {
                case 0:
                    return DevManualCompOne;
                case 1:
                    return DevManualCompSecond;
                case 2:
                    return DevManualCompThird;
                default:
                    return DevManualCompOne;
            }
        }
    },
    methods: {
        switchIndex(index) {
            this.componentIndex = index;
        }
    },
    components: { DevManualCompOne }
};
</script>

<template>
    <main id="app">
        <div class="container m-c">
            <header class="m-4">
                <img src="/images/devManual/txBanner.jpg" alt="图片" style="width: 100%;" />
            </header>

            <div class="contentBox m-4">
                <div class="left">
                    <ul id="uls">
                        <li
                            class="list-group-item list-group-item-action"
                            @click="switchIndex(index)"
                            v-for="(item, index) in arr"
                            :key="index"
                        >{{ item }}</li>
                    </ul>
                </div>

                <div class="right">
                    <div class="input-bar">
                        <input class="form-input" type="text" placeholder="请输入内容" />
                        <div class="btn btn-dark">搜索</div>
                    </div>

                    <p class="hot-link" style="padding: 1em 0;">
                        <span class="badge badge-danger">Hot</span>
                        热门查看：
                        <a
                            href="#"
                        >内容列表(211310次)&nbsp;&nbsp;&nbsp;&nbsp;</a>

                        <a href="#">导航菜单(169459次)&nbsp;&nbsp;&nbsp;&nbsp;</a>

                        <a href="#">公共标签(160615次)&nbsp;&nbsp;&nbsp;&nbsp;</a>

                        <a href="#">站点信息(160439次)&nbsp;&nbsp;&nbsp;&nbsp;</a>

                        <a href="#">指定栏目(159697次)&nbsp;&nbsp;&nbsp;&nbsp;</a>
                    </p>

                    <component :is="getComponent"></component>
                </div>
            </div>
        </div>
    </main>
</template>
 
<style  lang="scss">
.contentBox {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
}

.left {
    width: 12%;
}

.right {
    width: 80%;
}
.list-group-item {
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
}

.list-group-item-action {
    width: 100%;
    color: #495057;
    text-align: inherit;
}

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

.list-group-item:focus,
.list-group-item:hover {
    z-index: 1;
    text-decoration: none;
    background-color: #f8f9fa;
    cursor: pointer;
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

.form-input {
    display: inline-block;
    width: 400px;
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
.badge {
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
}

.badge-danger {
    color: #fff;
    background-color: #dc3545;
}

.hot-link {
    font-size: 12px;
}

.bd-callout {
    padding: 1.25rem;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    border: 1px solid #eee;
    border-left-width: 0.25rem;
    border-radius: 0.25rem;
}

.bd-callout-info {
    border-left-color: #5bc0de;
}
.bd-callout-info h4 {
    color: #5bc0de;
    font-size: 1.4rem;
    line-height: 2rem;
}

.bd-callout-info p {
    font-size: 14px;
    line-height: 1.8rem;
}
</style>