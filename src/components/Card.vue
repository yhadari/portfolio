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
      boxShadow: props.shadow && '0 0 1rem rgba(0, 0, 0, 0.4)',
    }"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  max-width: v-bind("props.width");
  min-height: v-bind("props.height");
  background-color: v-bind("props.bgColor");
}
</style>
