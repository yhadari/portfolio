<script setup>
import TheNavBar from "./components/TheNavBar.vue";
import TheBackground from "./components/TheBackground.vue";
import LandingView from "./views/LandingView.vue";
import AboutView from "./views/AboutView.vue";
</script>
<template>
  <div>
    <TheBackground />
    <TheNavBar />
    <LandingView />
    <AboutView />
  </div>
</template>

<style scoped></style>
