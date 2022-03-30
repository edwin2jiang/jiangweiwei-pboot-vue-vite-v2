<script setup lang="ts">
import { defineProps } from "vue"
const props = defineProps({
    height: String
})
</script>

<template>
    <div :style="{ height: props.height }" class="zw"></div>
</template>