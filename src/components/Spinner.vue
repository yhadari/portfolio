<script setup>
import { FingerprintSpinner } from "epic-spinners";
import { useThemeStore } from "../stores/Theme";
const themeStore = useThemeStore();
</script>
<template>
  <div class="spinnerBox">
    <fingerprint-spinner
      :animation-duration="1500"
      :size="64"
      :color="themeStore.spinnerColor()"
      class="spinner"
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
