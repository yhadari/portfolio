<script setup>
import { onMounted } from "vue";
import { useThemeStore } from "../stores/Theme";
import { useGithubStore } from "../stores/Github_Auth";
import Card from "../components/Card.vue";
import Title from "../components/Title.vue";
import Topic from "../components/Topic.vue";

const themeStore = useThemeStore();
const githubStore = useGithubStore();
const projects = [
  "portfolio",
  "ft_transcendence",
  "Omnifood-website",
  "cub3D-1337-project",
  "TMDB_full_project",
  "cpp",
];

const observe = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const projectClick = (url) => {
  window.open(url, "_blank");
};

onMounted(async () => {
  const hiddenElement = document.querySelectorAll(".hidden");
  hiddenElement.forEach((element) => {
    observe.observe(element);
  });
  await githubStore.getProjects();
});
</script>

<template>
  <section>
    <Card height="100vh" :shadow="false" class="cr cardContainer">
      <div class="hidden">
        <Card
          class="cr parentCard"
          width="110rem"
          :bgColor="themeStore.parentBgColor()"
        >
          <Title
            fontSize="3.4rem"
            :color="themeStore.titleColor()"
            text="Projects"
          />
          <div class="cardBox">
            <Card
              v-for="item in githubStore.projects?.filter((item) =>
                projects.includes(item.name)
              )"
              :key="item"
              class="cr childCard"
              height="16rem"
              :bgColor="themeStore.childBgColor()"
              :shadow="false"
              @click="projectClick(item.url)"
            >
              <div class="content">
                <img
                  class="githubLogo"
                  src="../assets/github-2703d511.webp"
                  alt="github logo"
                />
                <h2>{{ item.name }}</h2>
              </div>
              <h3>{{ item.description }}</h3>
              <div class="topics">
                <Topic v-for="topic in item.topics" :topic="topic" />
              </div>
            </Card>
          </div>
        </Card>
      </div>
    </Card>
  </section>
</template>
<style scoped>
.cr.cardContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12rem 1.6rem;
  letter-spacing: 0.5px;
}
.cr.parentCard {
  padding: 2.6rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin: 0 auto;
}
.cardBox {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.cr.childCard {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 1.2rem 1.6rem;
  cursor: pointer;
  background-color: v-bind("themeStore.projectBgColor()");
  color: v-bind("themeStore.projectColor()");
  transition: all 0.2s;
}
.cr.childCard:hover {
  transform: scale(1.04);
}

.githubLogo {
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
}

.content {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.topics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: fit-content;
}
.hidden {
  opacity: 0;
  filter: blur(6px);
  transform: translateX(-100%);
  transition: all 0.6s;
}
.show {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
}

@media screen and (max-width: 1000px) {
  .cardBox {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 800px) {
  .cardBox {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
