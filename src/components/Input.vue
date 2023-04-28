<script setup>
import { useThemeStore } from "../stores/Theme";
const themeStore = useThemeStore();

const props = defineProps({
  color: {
    type: String,
    default: "black",
  },
  bgColor: {
    type: String,
    default: "white",
  },
  size: {
    type: String,
    default: "1.4rem",
  },
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "100%",
  },
  placeholder: {
    type: String,
  },
});
</script>
<template>
  <input type="text" :placeholder="props.placeholder" />
</template>
<style scoped>
input {
  width: v-bind("props.width");
  height: v-bind("props.height");
  border: none;
  outline: none;
  background-color: v-bind("props.bgColor");
  font-size: v-bind("props.size");
  color: v-bind("props.color");
  padding: 0 1rem;
  border-radius: 0.4rem;
  box-shadow: inset 0 0 0 0.2px v-bind("themeStore.inputBorderColor()");
}
</style>
