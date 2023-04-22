<script setup>
import Counts from "./Counts.vue";
import { useThemeStore } from "../stores/Theme";

const themeStore = useThemeStore();
</script>
<template>
  <footer
    :style="{
      color: themeStore.footerColor(),
      backgroundColor: themeStore.footerBgColor(),
    }"
  >
    <h2>
      Copyright © 2023 All rights reserved, view the source code on GitHub.
    </h2>
    <Counts />
  </footer>
</template>
<style scoped>
footer {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: var(--footerHeight);
  backdrop-filter: blur(0.6rem);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  backdrop-filter: blur(0.6rem);
  opacity: 0.85;
}
h2 {
  font-weight: 700;
}
</style>
