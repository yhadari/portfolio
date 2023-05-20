<script setup>
import { computed } from "vue";
const props = defineProps({
  color: {
    type: String,
    default: "#333",
  },
  bgColor: {
    type: String,
    default: "#fff",
  },
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "100%",
  },
  position: {
    type: String,
  },
  size: {
    type: String,
    default: "1.4rem",
  },
});

const computedStyles = computed(() => {
  return {
    marginLeft: props.position === "right" ? "auto" : undefined,
    marginRight: props.position === "left" ? "auto" : undefined,
  };
});
</script>
<template>
  <button :style="computedStyles">
    <slot />
  </button>
</template>
<style scoped>
button {
  width: v-bind("props.width");
  height: v-bind("props.height");
  border: none;
  outline: none;
  background-color: v-bind("props.bgColor");
  font-size: v-bind("props.size");
  color: v-bind("props.color");
  padding: 0 1rem;
  border-radius: 0.4rem;
  cursor: pointer;
  font-weight: bold;
}
</style>
