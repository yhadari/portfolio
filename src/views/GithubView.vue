<script setup>
import { onMounted } from "vue";
import { useThemeStore } from "../stores/Theme";
import { useGithubStore } from "../stores/Github_Auth";
import Card from "../components/Card.vue";
import Title from "../components/Title.vue";
import router from "../router";

const themeStore = useThemeStore();
const githubStore = useGithubStore();
const route = router.currentRoute.value.path;

const observe = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

onMounted(async () => {
  const hiddenElement = document.querySelectorAll(".hidden");
  hiddenElement.forEach((element) => {
    observe.observe(element);
  });
  await githubStore.auth();
});
</script>

<template>
  <section>
    <Card
      class="cr cardContainer"
      :bgColor="route === '/' && themeStore.bgColor()"
      :shadow="false"
    >
      <div class="hidden">
        <Card
          class="cr parentCard"
          width="110rem"
          height="66rem"
          :bgColor="themeStore.parentBgColor()"
        >
          <Title
            fontSize="3.4rem"
            :color="themeStore.titleColor()"
            text="GitHub profile details"
          />
          <a
            class="github"
            :href="`${githubStore.data?.html_url}`"
            target="_blank"
          >
            <Card
              class="cr childCard first"
              height="19.2rem"
              :bgColor="themeStore.childBgColor()"
            >
              <div class="imgBox">
                <img
                  :src="`${githubStore.data?.avatar_url}`"
                  alt="user avatar"
                />
                <p>{{ githubStore.data?.followers }} followers</p>
              </div>
              <div class="textBox">
                <p class="login">{{ githubStore.data?.login }}</p>
                <p>{{ githubStore.data?.bio }}</p>
                <p>My account curently has 888 commits.</p>
              </div>
            </Card>
          </a>
          <Title
            fontSize="3.4rem"
            :color="themeStore.titleColor()"
            text="Contribution graph"
          />
          <Card
            class="cr childCard"
            height="22rem"
            :bgColor="themeStore.childBgColor()"
          />
        </Card>
      </div>
    </Card>
  </section>
</template>
<style scoped>
section {
  width: 100%;
  height: 100vh;
  min-height: 74rem;
  letter-spacing: 0.8px;
  overflow-x: hidden;
  line-height: 2.4rem;
}
.cr.cardContainer {
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
  justify-content: space-around;
}
.cr.childCard {
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 2.4rem;
  color: v-bind("themeStore.textColor()");
}

.github {
  text-decoration: none;
}
.textBox {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.textBox .login {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.imgBox {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
.imgBox img {
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 1rem;
}
.hidden {
  opacity: 0;
  filter: blur(6px);
  transform: translateX(100%);
  transition: all 0.8s;
}
.show {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
}
</style>
