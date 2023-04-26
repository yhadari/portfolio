<script setup>
import TheNavBar from "./components/TheNavBar.vue";
import Footer from "./components/Footer.vue";
import TheBackground from "./components/TheBackground.vue";
</script>
<template>
  <div>
    <TheNavBar />
    <TheBackground />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped></style>
