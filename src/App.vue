<script setup>
import TheNavBar from "./components/TheNavBar.vue";
import Footer from "./components/Footer.vue";
import TheBackground from "./components/TheBackground.vue";
import Spinner from "./components/Spinner.vue";
import { ref } from "vue";

const spinner = ref(true);
setTimeout(() => {
  spinner.value = false;
}, 1000);
</script>
<template>
  <div class="container">
    <TheNavBar />
    <TheBackground />
    <Spinner v-if="spinner" />
    <router-view />
    <Footer class="footer" />
  </div>
</template>
