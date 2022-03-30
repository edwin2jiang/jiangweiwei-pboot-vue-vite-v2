<script setup lang="ts">
import { onMounted } from "vue"

onMounted(() => {
    var query = (e) => document.querySelectorAll(e);

    var dom = query('.backTop')[0];
    var timer = null;

    /**
     * 处理滑到顶部的代码
     */

    // 向上滚动图标，处理消失和出现逻辑
    window.onscroll = function () {
        if (document.documentElement.scrollTop + document.body.scrollTop > 30) {
            dom.style.display = 'block';
        } else {
            dom.style.display = 'none';
        }
    };


    const scrollToptimer = function () {
        scrollTo(0, 0)
    }

    dom.onclick = scrollToptimer
})
</script>

<template>
    <div>
        <!-- 回到顶部 -->
        <a>
            <div class="backTop">
                <img src="@/assets/images/backTop.svg" alt="图片" width="30" />
                <div style="font-size: 12px;">返回顶部</div>
            </div>
        </a>
        <!-- /回到顶部 -->
    </div>
</template>
 
<style scoped lang="scss">
.backTop {
    text-align: center;
    width: 50px;
    font-size: 14px;
    padding: 7px 6px;
    background-color: #27a8e1;
    position: fixed;
    bottom: 150px;
    color: white;
    right: 14px;
    z-index: 998;
    cursor: pointer;
}
</style>