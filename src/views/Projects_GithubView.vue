<script setup>
import ProjectsView from "./ProjectsView.vue";
import GithubView from "./GithubView.vue";
</script>
<template>
  <section>
    <GithubView />
    <ProjectsView />
  </section>
</template>
<style scoped>
section {
  margin-top: 6rem;
}
</style>
