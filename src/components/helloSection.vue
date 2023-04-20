<script setup>
import { useThemeStore } from "../stores/Theme";
const themeStore = useThemeStore();
</script>
<template>
  <section
    :class="`${themeStore.theme === 'light' ? 'light-theme' : 'dark-theme'}`"
  >
    <h2>Hello, I'm</h2>
    <h3 class="animate-charcter">Yacine Hadari</h3>
  </section>
</template>
<style scoped>
section {
  width: 50%;
  height: calc(100vh - var(--navHeight));
  margin: 0 auto;
  margin-top: var(--navHeight);
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h2 {
  color: rgb(255, 169, 65);
  font-size: 4.6rem;
}

.light-theme .animate-charcter {
  background-image: linear-gradient(
    -225deg,
    #212529 0%,
    #343a40 29%,
    #495057 67%,
    #868e96 100%
  );
}

.dark-theme .animate-charcter {
  background-image: linear-gradient(
    -225deg,
    #868e96 0%,
    #adb5bd 29%,
    #ced4da 67%,
    #dee2e6 100%
  );
}
.animate-charcter {
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 4s linear infinite;
  display: inline-block;
  font-size: 8rem;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
</style>
