<script setup>
const props = defineProps({
  fontSize: {
    type: String,
    default: "1.6rem",
  },
  color: {
    type: String,
    default: "rgb(255, 255, 255)",
  },
  text: {
    type: String,
    default: "Title",
  },
});
</script>
<template>
  <div>
    <h2 :style="{ fontSize: props.fontSize, color: props.color }">
      {{ props.text }}
    </h2>
  </div>
</template>
