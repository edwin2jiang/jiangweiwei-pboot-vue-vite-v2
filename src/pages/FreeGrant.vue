<script setup lang="ts">
</script>

<template>
    <main>
        <!-- 广告图片 -->
        <div class="container">
            <a href="#" title="【腾讯云】云产品限时秒杀，爆款1核2G服务器，首年99元">
                <img class="adv" src="/images/freeGrant/adv1.jpg" />
            </a>
            <a href="#" title="SEO2022011">
                <img class="adv" src="/images/freeGrant/adv2.jpg" />
            </a>
        </div>

        <!-- 主要内容 -->
        <div class="container" style="margin-top: 20px;">
            <div id="mian-box">
                <!-- 左半部分 -->
                <div class="mian_part">
                    <!-- 表单部分 -->
                    <div>
                        <form>
                            <div class="font_style_1" style="margin-bottom: 14px;">免费获取永久授权码</div>
                            <div class="text_name_margin">域名</div>
                            <input
                                type="text"
                                value
                                placeholder="请输入要授权的域名"
                                class="input_text wd_style1"
                            />
                            <div class="text_name_margin">验证码</div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="请输入验证码"
                                    class="input_text"
                                    style="vertical-align: middle;"
                                />
                                <img
                                    src="/images/freeGrant/code1.png"
                                    width="88px"
                                    height="35px"
                                    style="vertical-align: middle;margin-bottom: 14px;cursor: pointer;"
                                    onclick="changImage()"
                                    id="veriCode"
                                />
                            </div>
                            <div>
                                <button type="submit" class="btn-primary">立即获取</button>
                            </div>
                            <!-- 分割线 -->
                            <div class="hr_style"></div>
                        </form>
                    </div>
                    <!-- 授权声明 -->
                    <div>
                        <div class="font_style_2" style="margin-bottom: 20px;">授权声明:</div>
                        <div class="grant_a">
                            <a
                                href="https://www.pbootcms.com/system-usage/277.html"
                            >https://www.pbootcms.com/system-usage/277.html</a>
                        </div>
                    </div>
                    <!-- 免费授权说明 -->
                    <div>
                        <div class="font_style_2">免费授权说明:</div>
                        <p>
                            1、获取
                            <span class="font_color2">域名授权码永久免费</span>，并且
                            <span class="font_color2">永久有效</span>；
                        </p>
                        <p>
                            2、授权码
                            <span class="font_color2">不需要联网验证</span>，官方服务器故障不会影响使用本系统的任何网站
                        </p>
                        <p>3、对本系统授权码离线验证机制有疑问的，可以自行断网测试网站运行情况；</p>
                        <p>4、获取授权码时请输入网站当前访问的网址，也可以是当前访问的IP地址；</p>
                        <p>5、对于输入主域名时，系统会自动生成两个授权码，请全部复制填写到网站后台；</p>
                        <p>6、如果需要绑定多个域名，请多次获取，然后将授权码逗号隔开后填写到网站后台；</p>
                        <p>7、如果访问地址带有端口，请连带端口一起进行授权码获取；</p>
                        <p
                            style="text-indent: 2em;"
                        >星梦一直秉承大道至简分享便可改变世界的理念，坚持做最简约的PbootCMS开源软件！您的每一份帮助都将支持PbootCMS做的更好，走的更远！我们一直在坚持不懈地努力，并尽可能让PbootCMS完全开源免费，您的帮助将使我们更有动力和信心^_^！</p>
                        <p>有任何对PbootCMS发展的建议或意见，请通过邮件进行反馈：286545339@qq.com</p>
                        <p style="height: 1px;"></p>
                        <p style="text-indent: 2em;">下图为PbootCMS授权微信小程序，欢迎大家关注！</p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <img src="/images/freeGrant/wxLink.png" style="width: 249px;height: 257px;" />
                        </p>
                    </div>
                </div>
                <!-- 右半部分 -->
                <div class="mian_part">
                    <!-- part1 -->
                    <div>
                        <div class="font_style_2" style="padding-top: 0;">1、加入模板分享群，享受海量模板</div>
                        <p
                            style="text-indent: 2em;"
                        >欢迎大家加入模板交流群，入驻模板群需赞助50元，然后由管理员拉进群，请扫码付费后及时联系星梦。需要特别提醒的是：此赞助费仅为入群费用，不包含任何其它定向服务！联系人：286545339（星梦）、1403971329（JIANG）</p>
                        <p>
                            <img
                                src="/images/freeGrant/collectionCode.png"
                                style="max-width: 100%; max-height: 150px;"
                            />
                        </p>
                    </div>
                    <!-- part2 -->
                    <div>
                        <div class="font_style_2">2、购买万能授权码，支持PbootCMS发展</div>
                        <p style="text-indent: 2em;">
                            <span
                                class="font_color2"
                            >虽然PbootCMS域名授权永久免费，但是为了更好的支撑PbootCMS的开发，建议大家购买万能授权码。</span>万能授权码可以用于任意域名、任意主机、任意网站，无限制网站及域名使用，购买授权码，不仅建站更加方便、便捷，同时也可以避免极端情况下没有地方获取免费域名授权码的问题，更重要的是对我们的极大支持。您的每一份帮助都将支持PbootCMS做的更好，走的更远！请有意购买万能授权码
                            <span class="font_color2">（900元/个）</span>的同学到技术交流群联系星梦。另外需要提示的是，万能授权码只限于自用，不允许任意形式的出卖和分享，对于非法倒卖PbootCMS万能授权码的行为，欢迎大家积极举报，对于举报人员我们将免费赠送万能授权码。
                            <span
                                class="font_color2"
                            >PbootCMS属于具有自主知识产权的产品，对于非法破解或倒卖万能授权码造成不良影响的行为，我们将依法追究法律责任。</span>
                        </p>
                    </div>
                    <!-- part3 -->
                    <div>
                        <div class="font_style_2">3、加入技术交流群，共同学习和进步</div>
                        <p>PbootCMS模板群：1023986271（付费入群，50元）</p>
                        <p>PbootCMS交流群①：137083872（已满）</p>
                        <p>PbootCMS交流群②：636759350（已满）</p>
                        <p>PbootCMS交流群③：511953276（开放中）</p>
                        <p>PbootCMS交流群④：964501393（已满）</p>
                        <p>PbootCMS交流群⑤：686979800（已满）</p>
                        <p>PbootCMS交流群⑥：822430453（已满）</p>
                        <p>PbootCMS交流群⑦：794519782（关闭中）</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
 
<style scoped lang="scss">
header {
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}

a {
  cursor: pointer;
  text-decoration: none;
}

li {
  list-style: none;
}
p {
  line-height: 2 !important;
  width: 590px !important;
  font-size: 0.9em !important;
}

.font_color {
  color: #7a8489;
}

.font_color2 {
  color: red;
}

.container {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
}
/* 返回顶部方块链接样式 */
#backTop {
  width: 70px;
  height: 70px;
  position: fixed;
  right: 10px;
  bottom: 150px;
  z-index: 999;
  color: #fff;
  text-align: center;
  background-color: #27a8e1;
}

/* header样式 */
/* .nav-img{
	width: 276px;
} */
.navbar-nav {
  display: flex;
}
.nav-item {
  width: 100px;
  text-align: right;
}
.nav-a:hover {
  color: black;
}

/* main样式 */

/* 广告图片 */
.adv {
  width: 1200px;
}

/* 主要内容 */

.wd_style1 {
  max-width: 363px;
}

#mian-box {
  display: flex;
}
.input_text {
  max-width: 363px;
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
  padding: 0.375rem 0.75rem;
  width: 100%;
  height: 21px;
  margin-bottom: 14px;
}
.btn-primary {
  background-color: #17a2b8;
  border-color: #17a2b8;
  color: #fff;
  text-align: center;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
}
.btn-primary:hover {
  background-color: #117c8e;
}

.hr_style {
  margin-top: 30px;
  border-bottom: 2px #eee solid;
  width: 95%;
}

.font_style_1 {
  font-size: 1.75rem;
}
.font_style_2 {
  font-size: 18px;
  font-weight: bolder;
  padding-top: 20px;
  padding-right: 20px;
}
.text_name_margin {
  margin-bottom: 10px;
}
.mian_part {
  text-align: left;
  flex: 0 0 50%;
  max-width: 50%;

  padding-right: 15px;
}

.grant_a a {
  color: black;
}
.grant_a a:hover {
  color: #007bff;
}

/* footer样式 */
footer {
  background-color: #f8f9fa;
  text-align: center;
  margin-top: 60px;
  color: #6c757d;
}
#f_div_1 {
  padding-bottom: 1rem !important;
  padding-top: 1rem !important;
  border-top: 1px solid #dee2e6 !important;
  border-bottom: 1px solid #dee2e6 !important;
}
#f_div_1 p {
  margin: 0 auto;
}

p a {
  color: #6c757d;
}
p a:hover {
  color: #6c757d;
}

footer p {
  margin: 0 auto;
}

</style>