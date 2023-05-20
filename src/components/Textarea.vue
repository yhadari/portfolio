<script setup>
import { useThemeStore } from "../stores/Theme";
const themeStore = useThemeStore();

defineEmits(["update:modelValue"]);
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: "",
  },
  name: {
    type: String,
  },
  color: {
    type: String,
    default: "black",
  },
  bgColor: {
    type: String,
    default: "white",
  },
  rows: {
    type: String,
    default: "5",
  },
  size: {
    type: String,
    default: "1.4rem",
  },
  width: {
    type: String,
    default: "100%",
  },
  placeholder: {
    type: String,
  },
});
</script>
<template>
  <textarea
    :disabled="props.disabled"
    :value="props.modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :name="props.name"
    :rows="props.rows"
    :placeholder="props.placeholder"
    required
  />
</template>
<style scoped>
textarea {
  width: v-bind("props.width");
  outline: none;
  background-color: v-bind("props.bgColor");
  font-size: v-bind("props.size");
  color: v-bind("props.color");
  padding: 1rem;
  margin-top: 0.4rem;
  border-radius: 0.6rem;
  border: 1px solid v-bind("themeStore.inputBorderColor()");
  resize: none;
  font-family: inherit;
}
textarea::placeholder {
  color: v-bind("themeStore.inputPlaceholderColor()");
  font-size: 1.4rem;
}
textarea:focus {
  border: 1px solid v-bind("themeStore.buttonBgColor()");
}
</style>
