<script setup>
const props = defineProps({
  size: {
    type: String,
    default: "1.4rem",
  },
  color: {
    type: String,
  },
});
</script>
<template>
  <label>
    <slot />
  </label>
</template>
<style scoped>
label {
  color: v-bind("props.color");
  font-size: v-bind("props.size");
}
</style>
