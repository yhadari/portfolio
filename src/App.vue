<script setup>
import TheNavBar from "./components/TheNavBar.vue";
import TheBackground from "./components/TheBackground.vue";
import LandingView from "./views/LandingView.vue";
import AboutView from "./views/AboutView.vue";
import SkillsView from "./views/SkillsView.vue";
import GithubView from "./views/GithubView.vue";
import ProjectView from "./views/ProjectView.vue";
</script>
<template>
  <div>
    <TheBackground />
    <TheNavBar />
    <LandingView />
    <AboutView />
    <SkillsView />
    <GithubView />
    <ProjectView />
  </div>
</template>

<style scoped></style>
