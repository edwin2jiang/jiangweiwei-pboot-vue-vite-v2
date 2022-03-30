<script setup lang="ts">
import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';
import BackTop from './components/BackTop.vue';
import OccupyPlace from './components/OccupyPlace.vue';

</script>

<template>
  <MyHeader></MyHeader>
  <!-- 占位导航栏（占位元素不显示） -->
  <OccupyPlace height="82px"></OccupyPlace>
  <router-view></router-view>
  <MyFooter></MyFooter>
  <BackTop/>
</template>

<style lang="scss">
@import url("@/assets/css/reset.css");
@import url("@/assets/css/common.css");
@import url("@/assets/css/auto.css");
</style>
