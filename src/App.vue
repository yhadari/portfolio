<script setup>
import TheNavBar from "./components/TheNavBar.vue";
import Footer from "./components/Footer.vue";
import TheBackground from "./components/TheBackground.vue";
import Spinner from "./components/Spinner.vue";
import { onMounted, ref, watch } from "vue";
import router from "./router";
import { useGithubStore } from "./stores/Github_Auth";

const githubStore = useGithubStore();
const spinner = ref(true);
const paths = [];

const showSpinner = () => {
  spinner.value = true;
  paths.push(router.currentRoute.value.path);
  if (document.readyState === "complete") {
    setTimeout(() => {
      spinner.value = false;
    }, 1500);
  } else {
    window.addEventListener("load", () => {
      setTimeout(() => {
        spinner.value = false;
      }, 1500);
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

// github auth
onMounted(async () => {
  await githubStore.auth();
});
</script>

<template>
  <div>
    <TheNavBar v-if="router.currentRoute.value.name !== 'PNF'" />
    <div class="content">
      <TheBackground v-if="router.currentRoute.value.name !== 'PNF'" />
      <Spinner v-if="spinner" />
      <router-view v-else />
    </div>
    <Footer v-if="router.currentRoute.value.name !== 'PNF'" />
  </div>
</template>

<style scoped>
.content {
  min-height: 100vh;
}
</style>
