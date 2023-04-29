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
  border-radius: 0.6rem;
  border: 1px solid v-bind("themeStore.inputBorderColor()");
}
input::placeholder {
  color: v-bind("themeStore.inputPlaceholderColor()");
  font-size: 1.2rem;
}
input:focus {
  border: 1px solid v-bind("themeStore.buttonBgColor()");
}
</style>
