<script setup>
import { AtomSpinner } from "epic-spinners";
import { useThemeStore } from "../stores/Theme";
const themeStore = useThemeStore();
</script>
<template>
  <div class="spinnerBox">
    <atom-spinner
      class="spinner"
      :animation-duration="1000"
      :size="100"
      color="#ff1d5e"
    />
  </div>
</template>
<style scoped>
.spinnerBox {
  width: 100%;
  height: 100vh;
  background-color: v-bind("themeStore.spinnerBgColor()");
  display: flex;
}
.spinner {
  margin: 0 auto;
  align-self: center;
}
</style>
