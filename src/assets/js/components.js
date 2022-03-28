app.component('my-header', {
    props: ['activeIndex'],
    data() {
        return {
            links: [{
                href: './index.html',
                text: '首页',
                isActive: true
            }, {
                href: 'pages/systemDescription/SystemDescription.html',
                text: '系统简介',
                isActive: false
            }, {
                href: 'pages/freeGrant/FreeGrant.html',
                text: '免费授权',
                isActive: false
            }, {
                href: 'pages/recommendShopper/RecommendShopper.html',
                text: '推荐商家',
                isActive: false
            }, {
                href: 'pages/developmentManual/DevelopmentManual.html',
                text: '开发手册',
                isActive: false
            }, {
                href: 'pages/techCommunication/TechCommunication.html',
                text: '技术交流',
                isActive: false
            }, {
                href: 'pages/updateLog/UpdateLog.html',
                text: '更新日志',
                isActive: false
            }]
        }
    },
    template: `
            <header id="header" class="
                    header-bar 
                    m-center 
                    w-100p
                    flex
                    justify-center
                    p-4">

            <div class="
                w-1200 
                flex 
                justify-between">

                <img src="./images/logo.png" alt="logo">

                <nav class="nav-links flex justify-around">
                    <a :href="activeIndex != 0? '../../'+item.href : item.href" :class="{'nav-link':true, active: index == activeIndex}" v-for="(item,index) in links" :key="index"> {{item.text}}</a>
                </nav>
            </div>
</header>
    `
})