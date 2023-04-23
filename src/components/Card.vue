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
      // boxShadow: props.shadow && '0 0 1rem rgba(0, 0, 0, 0.2)',
      boxShadow:
        props.shadow &&
        '0px 2px 5px -1px rgba(50, 50, 93, 0.25) , 0px 1px 3px -1px rgba(0, 0, 0, 0.3) ',
    }"
  >
    <slot></slot>
  </div>
</template>
