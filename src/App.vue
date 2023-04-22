<script setup>
import TheNavBar from "./components/TheNavBar.vue";
import TheBackground from "./components/TheBackground.vue";
import LandingView from "./views/LandingView.vue";
import AboutView from "./views/AboutView.vue";
import SkillsView from "./views/SkillsView.vue";
import GithubView from "./views/GithubView.vue";
</script>
<template>
  <div>
    <TheBackground />
    <TheNavBar />
    <LandingView />
    <AboutView />
    <SkillsView />
    <GithubView />
  </div>
</template>

<style scoped></style>
