<script setup lang="ts">
import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';
import BackTop from './components/BackTop.vue';

</script>

<template>
  <MyHeader></MyHeader>
  <!-- 占位导航栏（占位元素不显示） -->
  <div style="height: 82px;"></div>
  <router-view></router-view>
  <MyFooter></MyFooter>
  <BackTop/>
</template>

<style lang="scss">
@import url("@/assets/css/reset.css");
@import url("@/assets/css/common.css");
@import url("@/assets/css/auto.css");
</style>
