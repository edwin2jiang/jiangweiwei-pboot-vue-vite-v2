<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"

// 计算当前路由的id
const activeIndex = computed(() => {
    const path = useRoute().path
    if (path === "/index" || path === "/") {
        return 0
    } else if (path === "/sysDescription") {
        return 1
    } else if (path === '/freeGrant') {
        return 2
    } else if (path === '/recShopper') {
        return 3
    } else if (path === '/devManual') {
        return 4
    } else if (path === '/techCommunication') {
        return 5
    } else if (path === '/updateLog') {
        return 6
    }
})


const links = [
    {
        href: 'index',
        text: '首页',
        isActive: true
    }, {
        href: 'sysDescription',
        text: '系统简介',
        isActive: false
    }, {
        href: 'freeGrant',
        text: '免费授权',
        isActive: false
    }, {
        href: 'recShopper',
        text: '推荐商家',
        isActive: false
    }, {
        href: 'devManual',
        text: '开发手册',
        isActive: false
    }, {
        href: 'techCommunication',
        text: '技术交流',
        isActive: false
    }, {
        href: 'updateLog',
        text: '更新日志',
        isActive: false
    }]



</script>


<template>
    <header id="header" class="header-bar m-center w-100p flex justify-center p-4">
        <div class="w-1200 flex justify-between">
            <img src="/logo.png" alt="logo" />

            <nav class="nav-links flex justify-around">
                <router-link
                    :to="item.href"
                    :class="{ 'nav-link': true, active: index == activeIndex }"
                    v-for="(item, index) in links"
                    :key="index"
                >{{ item.text }}</router-link>
            </nav>
        </div>
    </header>
</template>


<style scoped lang="scss">
#header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 999;
}
.w-1200 {
    width: 1200px;
}

.w-100p {
    width: 100% !important;
    max-width: 100%;
}

.m-center {
    margin: 0 auto;
}

.nav-links {
    width: 600px;
    line-height: 50px;
    height: 50px;
}

.nav-link {
    color: #bbbcbc;
}

.nav-link:hover {
    color: #8a8b8b;
}

.nav-link.active {
    color: #8a8b8b;
}
</style>