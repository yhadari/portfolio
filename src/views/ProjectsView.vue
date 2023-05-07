<script setup>
import { onMounted } from "vue";
import { useThemeStore } from "../stores/Theme";
import { useGithubStore } from "../stores/Github_Auth";
import Card from "../components/Card.vue";
import Title from "../components/Title.vue";

const themeStore = useThemeStore();
const githubStore = useGithubStore();

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
            v-for="item in githubStore.projects?.slice(0, 6)"
            :key="item"
            class="cr childCard"
            height="15rem"
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
            <h2>{{ item.description }}</h2>
          </Card>
        </div>
      </Card>
    </div>
  </section>
</template>
<style scoped>
section {
  width: 100%;
  height: 100vh;
  min-height: 54rem;
  letter-spacing: 0.8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 0 2.4rem;
}
.cr.parentCard {
  padding: 2.6rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
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
  padding: 1.2rem;
  cursor: pointer;
  transition: all 0.3s;
}
.cr.childCard:hover {
  transform: scale(1.06);
}

.githubLogo {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}

.content {
  display: flex;
  align-items: center;
  gap: 1.2rem;
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

@media screen and (max-width: 1200px) {
  .cardBox {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
