<script setup lang="ts">
</script>
<template>
    <img src="/images/updateLog/log1.jpg" width="100%" />
    <main>
        <div class="log-container">
            <p class="font14">
                当前位置：
                <a>首页</a>>
                <a>更新日志</a>
            </p>
            <br />

            <h2>PbootCMS更新日志</h2>

            <p class="font14">累计发布 60 个版本</p>

            <div class="logs">
                <!-- 第一个 -->
                <p>
                    <span class="time-label">2022-01-03</span>
                </p>
                <div class="left-log">
                    <div class="left-log-child">
                        <a class="font14">PbootCMS V3.1.3 build 2022-01-03</a>
                        <p class="font14">
                            1、修复自定义路径存在注入问题；
                            <br />2、修复API接口搜索存在注入问题；
                            <br />3、修复用户信息修改存在CSRF问题；
                            <br />4、修复伪静态搜索结果分页问题；
                            <br />5、修改授权码存储位置为数据库；
                            <br />6、修复sitemap.txt不换行问题；
                            <br />7、兼容PHP8.1版本;
                            <br />
                        </p>
                        <div class="right-trangle"></div>
                        <div class="left-icon">
                            <img src="/images/updateLog/cloud.jpg" width="80%" />
                        </div>
                    </div>
                </div>

                <!-- 第二个 -->
                <p>
                    <span class="time-label">2021-10-28</span>
                </p>
                <div class="right-log">
                    <div class="right-log-child">
                        <a class="font14">PbootCMS V3.1.2 build 2021-10-28</a>
                        <p class="font14">
                            1、修复扩展多图字段编码长度问题；
                            <br />2、修复sitemap未过滤定时文章问题；
                            <br />3、修复上个版本导致邮件标题不对问题;
                            <br />4、新增自动记录蜘蛛访问到后台系统日志；
                            <br />5、优化nav参数parent支持传递多个栏目编码；
                            <br />6、新增nav参数scode='1,2,3'方式限制栏目范围；
                            <br />7、其他问题修复与优化；
                            <br />
                        </p>
                        <div class="left-trangle"></div>
                        <div class="right-icon">
                            <img src="/images/updateLog/cloud.jpg" width="80%" />
                        </div>
                    </div>
                </div>

                <!-- 第三个 -->
                <p>
                    <span class="time-label">2021-10-26</span>
                </p>
                <div class="left-log">
                    <div class="left-log-child">
                        <a class="font14">PbootCMS V3.1.1 build 2021-10-26</a>
                        <p class="font14">
                            1、修复上版本sitemap短路径模式不统一问题；
                            <br />2、修复栏目名称必填导致外链跳转栏目无法添加；
                            <br />3、修复数据库备份引号未转义问题；
                            <br />4、优化栏目管理跳转内容支持跳转指定子栏目；
                            <br />5、优化会话清理功能；
                            <br />6、优化更彻底的OEM定义；
                            <br />7、优化轮播及友链支持修改分组；
                            <br />8、新增sitemap.txt格式的支持；
                            <br />
                        </p>
                        <div class="right-trangle"></div>
                        <div class="left-icon">
                            <img src="/images/updateLog/cloud.jpg" width="80%" />
                        </div>
                    </div>
                </div>

                <!-- 第四个 -->
                <p>
                    <span class="time-label">2021-10-24</span>
                </p>
                <div class="right-log">
                    <div class="right-log-child">
                        <a class="font14">PbootCMS V3.1.0 build 2021-10-24</a>
                        <p class="font14">
                            1、修复地址串栏目及模型可访问问题；
                            <br />2、优化if语句执行性能提高系统速度；
                            <br />3、新增详情页URL路径支持层级路径定义；
                            <br />4、新增后台栏目及内容开关无刷新操作；
                            <br />5、新增文章新增时自动提取缩略图；
                            <br />6、新增后台栏目管理跳转文章链接；
                            <br />7、新增文章扩展字段多图类型的支持；
                            <br />
                            8、配合多图扩展新增多图标签{pboot:pics}指定field字段参数；
                            <br />9、新增详情页URL是否带目录路径控制参数；
                            <br />10、修复自适应标题标签无站点副标题时横线问题；
                            <br />11、其他问题修复与优化；
                            <br />
                        </p>
                        <div class="left-trangle"></div>
                        <div class="right-icon">
                            <img src="/images/updateLog/cloud.jpg" width="80%" />
                        </div>
                    </div>
                </div>

                <!-- 第五个 -->
                <p>
                    <span class="time-label">2021-10-13</span>
                </p>
                <div class="left-log">
                    <div class="left-log-child">
                        <a class="font14">PbootCMS V3.0.9 build 2021-10-13</a>
                        <p class="font14">
                            1、修复上版本栏目分享到微信出现打不开问题；
                            <br />2、修复pboot@sql循环标签无法传带引号参数问题；
                            <br />3、增强系统安全性;
                            <br />
                        </p>

                        <div class="right-trangle"></div>
                        <div class="left-icon">
                            <img src="/images/updateLog/cloud.jpg" width="80%" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
 
<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
}

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
    margin-top: 30px;
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
    z-index: 99;
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

a {
    text-decoration: none;
    color: #999;
}

.log-container {
    width: 1110px;
    margin: auto;
    padding: 10px 15px;
}

.log-container > p:nth-of-type(1) {
    text-align: right;
    color: #999;
    margin-bottom: 14px;
}

h2 {
    text-align: center;
    margin: 21px 0;
}

.log-container > p:nth-of-type(2) {
    text-align: center;
    margin: 21px;
}

.logs {
    padding: 15px 0;
    /* height: 1000px; */
    text-align: center;
    /* border: 1px solid red; */
    background: url("/images/updateLog/dashed_bg.jpg") center top;
}

.logs > p {
    margin-bottom: 20px;
}

.time-label {
    padding: 0.25em 0.4em;
    border-radius: 0.25rem;
    color: #fff;
    background-color: #28a745;
}

.left-log {
    position: relative;
    width: 100%;
    margin-bottom: 20px;
}

.right-log {
    position: relative;
    float: right;
    width: 100%;
    margin-bottom: 20px;
}

.left-log-child {
    position: relative;
    width: 508px;
    text-align: left;
    background: #fff;
    border: 1px solid #888;
    color: #555;
    border-radius: 3px;
}

.right-log-child {
    position: relative;
    float: right;
    width: 508px;
    text-align: left;
    background: #fff;
    border: 1px solid #888;
    color: #555;
    border-radius: 3px;
}

.logs a {
    color: #000;
    padding: 4px 10px;
    font-size: 17.5px;
}

/* .left-log-child a{
    color: #000;
    padding: 4px 10px;
} */

.left-log-child p,
.right-log-child p {
    color: #999;
    padding: 10px;
    line-height: 2;
}

.right-trangle {
    right: -11px;
    top: 30px;
    position: absolute;
    background: #fff;

    width: 20px;
    height: 20px;
    position: absolute;
    border-left: 1px solid #999;
    border-bottom: 1px solid #999;
    -webkit-transform: translate(0, -50%) rotate(-135deg);
    transform: translate(0, -50%) rotate(-135deg);
}

.left-trangle {
    left: -11px;
    top: 30px;
    position: absolute;
    background: #fff;

    width: 20px;
    height: 20px;
    position: absolute;
    border-right: 1px solid #999;
    border-top: 1px solid #999;
    -webkit-transform: translate(0, -50%) rotate(-135deg);
    transform: translate(0, -50%) rotate(-135deg);
}

.left-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    right: -58px;
    top: 20px;
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid #72b92e;
    border-radius: 100%;
}

.right-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    left: -58px;
    top: 20px;
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid #72b92e;
    border-radius: 100%;
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
</style>