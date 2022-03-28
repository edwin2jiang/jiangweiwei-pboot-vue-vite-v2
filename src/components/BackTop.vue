<script setup lang="ts">
</script>

<template>
    <div>
        <!-- 回到顶部 -->
        <a href="#app">
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