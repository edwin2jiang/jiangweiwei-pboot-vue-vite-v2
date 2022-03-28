<script setup lang="ts">
</script>

<template>
    <main style="width: 1100px;margin: 0 auto;">
        <h2 class="h2">PbootCMS系统简介</h2>
        <div class="content">
            <p class="p1">
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;PbootCMS是全新内核且永久开源免费的PHP企业网站开发建设管理系统，是一套高效、简洁、 强悍的可免费商用的PHP
                    CMS源码，能够满足各类企业网站开发建设的需要。系统采用简单到想哭的模板标签，只要懂HTML就可快速开发企业网站。官方提供了大量网站模板免费下载和使用，将致力于为广大开发者和企业提供最佳的网站开发建设解决方案。
                </span>
            </p>
            <p class="p2">&nbsp;&nbsp;&nbsp;&nbsp;1、系统采用高效、简洁、强悍的模板标签，只要懂HTML就可快速开发企业网站；</p>
            <p class="p2">&nbsp;&nbsp;&nbsp;&nbsp;2、系统采用PHP语言开发，使用自主研发的高速多层开发框架及缓存技术；</p>
            <p
                class="p2"
            >&nbsp;&nbsp;&nbsp;&nbsp;3、系统默认采用sqlite轻型数据库，放入PHP空间即可直接使用，可选mysql. pgsql等数据库，满足各类存储需求；</p>
            <p class="p2">&nbsp;&nbsp;&nbsp;&nbsp;4、系统采用响应式管理后台，满足各类设备随时管理的需要；</p>
            <p class="p2">&nbsp;&nbsp;&nbsp;&nbsp;5、系统支持后台在线升级，满足系统及时升级更新的需要；</p>
            <p class="p2">&nbsp;&nbsp;&nbsp;&nbsp;6、系统支持内容模型、多语言、自定义表单、筛选、多条件搜索、小程序、APP等功能；</p>
            <p class="p2">&nbsp;&nbsp;&nbsp;&nbsp;7、系统支持多种URL模式及模型、栏目、内容自定义地址名称，满足各类网站推广优化的需要；</p>
            <p>
                <br />
            </p>
            <p class="p3">
                <strong>
                    <span style="font-size: 18px;">授权声明：</span>
                </strong>
            </p>
            <p class="p3">
                <span>1、PbootCMS是免费可商用的建站系统，用户通过官网获取免费域名授权码即算授权成功，并永久有效，授权后允许删除前后台页面版权标识。</span>当然，为了支持PbootCMS的发展，我们也欢迎各位老板购买万能授权码（900元/个），通过万能授权码将可以适配任意域名，不限制网站使用数量，避免每个域名都要到官网获取授权码的烦恼。
            </p>
            <p class="p3">
                <span>2、PbootCMS系统允许个人或公司进行任意二开及商用，但是不允许任何形式的破解或绕过系统授权的行为，</span>包括但不限于通过PbootCMS系统建设网站、二次开发、发布衍生版本等情况，对于任何破解或绕过PbootCMS官网授权的行为，我们将保留依法追究法律责任的权力，对于使用破解版本的用户，也将视为非法使用。
            </p>
            <p class="p3">
                <span>3、PbootCMS除了一个授权文件代码外，其它代码全部开源，并使用Apache2开源协议。</span>对于任何基于PbootCMS进行二开的系统，应该遵守Apache2开源协议的有关要求。
            </p>
            <p
                class="p3"
            >PbootCMS官方不对使用本软件所构建网站中的文章、商品和其它任何信息承担责任，不管您通过任何渠道下载本软件，您一旦开始安装PbootCMS，即被视为完全理解并接受PbootCMS授权声明的各项条款。</p>
            <p>
                <br />
            </p>
            <p>
                <br />
            </p>
            <p class="p3">
                <strong>
                    <span style="font-size: 18px;">源码托管地址：</span>
                </strong>
            </p>
            <p class="p3">Gitee：https://gitee.com/hnaoyun/PbootCMS</p>
            <p>
                <br />
            </p>
            <p class="p3">
                <strong>
                    <span style="font-size: 18px;">简单到想哭的标签：</span>
                </strong>
            </p>
            <pre>1、全局标签示意：
{pboot:sitetitle} &nbsp;站点标题 &nbsp;
{pboot:sitelogo} &nbsp;站点logo&nbsp;
2、列表页标签示意：
{pboot:list &nbsp; num=10 &nbsp;order=date}&nbsp;&nbsp;&nbsp;&nbsp; 
        &lt;p&gt;&lt;a &nbsp; href="[list:link]"&gt;[list:title]&lt;/a&gt;/&lt;p&gt;
{/pboot:list}
3、内容页标签示意：
{content:title} &nbsp;标题
{content:subtitle}副标题
{content:author} &nbsp;作者
{content:source} &nbsp;来源
更多简单到想哭的标签请参考开发手册...</pre>
            <p>
                <br />
            </p>
            <p class="p3">
                <strong>
                    <span style="font-size: 18px;">强大的管理后台：</span>
                </strong>
            </p>
            <p class="p3">
                <img src="@/assets/images/systemDescription/introduce3.png" alt="图片" style="width: 1100px;" />
            </p>
            <p>
                <br />
            </p>
        </div>
    </main>
</template>
 
<style scoped lang="scss">
/* 浏览器样式重置 */
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}
body {
    line-height: 1;
}
ol,
ul {
    list-style: none;
}
blockquote,
q {
    quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
    content: "";
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
/* 自己的css */

/* 头部栏 */
#nav {
    width: 100%;
    margin: auto;
    position: fixed;
    height: 71px !important;
    background-color: rgb(248, 249, 250);
    text-align: center;
}

#nav img {
    float: left;
    margin-left: 330px;
    margin-top: 5px;
}
.nav {
    list-style: none;
    margin: 0 auto;
}
#list {
    float: right;
    text-align: center;
    width: 900px;
}
.nav li {
    float: left;
    margin: 20px;
    text-align: center;
    color: grey;
    font-size: 12px;
}
.nav li a {
    text-decoration: none;
    color: grey;
}
.nav li:hover,
.nav a:hover {
    color: black;
}
#contain {
    height: 71px;
}
#location {
    width: 1100px;
    height: 21px;
    margin: 10px auto 0 auto;
}
.location {
    text-align: right !important;
    color: grey;
}
.location a {
    text-decoration: none;
    color: grey;
}

/* main的内容 */
.h2 {
    width: 1100px;
    margin: 1.5rem auto 1.5rem auto;
    text-align: center;
    font-weight: 500;
    font-size: 2rem;
}
.content {
    display: flex;
    max-width: 1100px;
    flex-wrap: wrap;
}
p {
    line-height: 2 !important;
    color: #666;
    font-size: 14px;
    width: 1100px;
}
.p1 {
    font-size: 18px;
}
.p3 > span {
    color: rgb(255, 0, 0);
    font-size: 16px;
    font-weight: 500;
}
pre {
    font-style: normal;
    font-size: 0.875rem;
    line-height: 1.5;
    tab-size: 4;
    overflow: auto;
    padding: 10px;
    border-radius: 3px;
    background: #171a27;
    color: #fff;
    width: 1100px;
    font-size: 12.5px;
}

/* 底部栏 */
.foot,
.footer {
    height: 50px;
    position: relative;
    margin: auto;
    background-color: rgb(248, 249, 250);
    text-align: center;
    border: 1px solid rgb(222, 226, 230);
}
.foot span {
    font-size: 13px;
    text-align: center;
    color: #6c757d;
    line-height: 25px;
}
.span1 {
    font-size: 13px;
    text-align: center;
    color: #6c757d;
    line-height: 50px;
}
.p3 > strong > span {
    color: #666;
    line-height: 2;
    font-weight: 1000;
}
</style>