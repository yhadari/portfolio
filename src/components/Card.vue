<script setup>
const props = defineProps({
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "100vh",
  },
  bgColor: {
    type: String,
    default: "#fff",
  },
});
</script>
<template>
  <div
    class="card"
    :style="{
      width: props.width,
      height: props.height,
      backgroundColor: props.bgColor,
    }"
  >
    <slot></slot>
  </div>
</template>
