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
  justify-content: space-evenly;
  height: var(--footerHeight);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 1.6rem;
  gap: 2rem;
}
h2 {
  font-weight: 700;
}

@media screen and (max-width: 650px) {
  footer {
    flex-direction: column;
    height: auto;
  }
}
</style>
