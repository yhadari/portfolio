<script setup>
import ProjectsView from "./ProjectsView.vue";
import GithubView from "./GithubView.vue";
</script>
<template>
  <section>
    <GithubView class="github" />
    <ProjectsView />
  </section>
</template>
<style scoped>
.github {
  margin-top: 10rem;
}
</style>
