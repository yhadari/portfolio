<script setup>
import { useThemeStore } from "../stores/Theme";
const themeStore = useThemeStore();
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
  borderRadius: {
    type: String,
    default: "0.8rem",
  },
});
</script>
<template>
  <div :class="`card ${props.shadow && 'boxShadow'}`">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  max-width: v-bind("props.width");
  min-height: v-bind("props.height");
  background-color: v-bind("props.bgColor");
  border-radius: v-bind("props.borderRadius");
}
.boxShadow {
  box-shadow: v-bind("themeStore.boxShadow()") 0 0 1rem;
}
</style>
