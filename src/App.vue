<script setup>
import TheNavBar from "./components/TheNavBar.vue";
import Footer from "./components/Footer.vue";
import TheBackground from "./components/TheBackground.vue";
import Spinner from "./components/Spinner.vue";
import { ref, watch } from "vue";
import router from "./router";

const spinner = ref(true);
const paths = [];

const showSpinner = () => {
  spinner.value = true;
  paths.push(router.currentRoute.value.path);
  if (document.readyState === "complete") {
    setTimeout(() => {
      spinner.value = false;
    }, 1000);
  } else {
    window.addEventListener("load", () => {
      setTimeout(() => {
        spinner.value = false;
      }, 1000);
    });
  }
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

watch(
  () => router.currentRoute.value,
  () => {
    if (!paths.includes(router.currentRoute.value.path)) {
      showSpinner();
    }
  }
);

showSpinner();
</script>
<template>
  <div>
    <TheNavBar />
    <TheBackground />
    <Spinner v-if="spinner" />
    <router-view v-else />
    <Footer />
  </div>
</template>
