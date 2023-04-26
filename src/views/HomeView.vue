<script setup>
import HeroSectionView from "./HeroSectionView.vue";
import AboutView from "./AboutView.vue";
import SkillsView from "./SkillsView.vue";
import GithubView from "./GithubView.vue";
import ProjectsView from "./ProjectsView.vue";
import { useThemeStore } from "../stores/Theme";

const themeStore = useThemeStore();

const btnUp = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>
<template>
  <section
    :class="`${themeStore.theme === 'light' ? 'light-theme' : 'dark-theme'}`"
  >
    <HeroSectionView />
    <AboutView />
    <SkillsView />
    <GithubView />
    <ProjectsView />
    <div class="btnUp" @click="btnUp">
      <ion-icon name="arrow-up" class="arrowUp"></ion-icon>
    </div>
  </section>
</template>

<style scoped>
.btnUp {
  position: fixed;
  bottom: 6rem;
  right: 12rem;
  width: 4.6rem;
  height: 4.6rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
}
.light-theme .btnUp {
  background-color: #999;
}
.dark-theme .btnUp {
  background-color: #555;
}
.btnUp:hover {
  transform: scale(1.05);
}
.light-theme .btnUp:hover {
  background-color: #777;
}
.dark-theme .btnUp:hover {
  background-color: #333;
}
.arrowUp {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.4rem;
  color: #fff;
  transition: all 0.3s;
}
</style>
