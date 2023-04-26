<script setup>
const props = defineProps({
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "100%",
  },
  bgColor: {
    type: String,
  },
  shadow: {
    type: Boolean,
    default: true,
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
      boxShadow: props.shadow && '0 0 1rem rgba(0, 0, 0, 0.2)',
    }"
  >
    <slot></slot>
  </div>
</template>
