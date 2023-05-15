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

  await githubStore.getContributions(
    import.meta.env.VITE_GITHUB_TOKEN,
    githubStore.data?.login
  );
});
</script>

<template>
  <section :class="route === '/projects' && 'projectPage'">
    <Card
      class="cr cardContainer"
      :bgColor="route === '/' && themeStore.bgColor()"
      :height="route === '/projects' ? '75vh' : '100vh'"
      :shadow="false"
      borderRadius="0"
    >
      <div class="hidden">
        <Card
          class="cr parentCard"
          width="110rem"
          :bgColor="themeStore.parentBgColor()"
        >
          <Title
            fontSize="3.4rem"
            :color="themeStore.titleColor()"
            text="GitHub profile details"
          />
          <a :href="githubStore.data?.html_url" target="_blank">
            <Card
              class="cr childCard first"
              :bgColor="themeStore.childBgColor()"
            >
              <div class="imgBox" v-if="githubStore.allCommits">
                <img
                  :src="`${githubStore.data?.avatar_url}`"
                  alt="user avatar"
                />
                <p>{{ githubStore.data?.followers }} followers</p>
              </div>
              <div class="skeleton imgBox" v-else></div>
              <div class="textBox" v-if="githubStore.allCommits">
                <p class="login">{{ githubStore.data?.login }}</p>
                <p>{{ githubStore.data?.bio }}</p>
                <p>
                  My account curently has
                  {{ githubStore.allCommits }} commits.
                </p>
              </div>
              <div class="skeleton textBox" v-else>
                <p class="login"></p>
                <p></p>
                <p></p>
              </div>
            </Card>
          </a>
          <Title
            fontSize="3.4rem"
            :color="themeStore.titleColor()"
            text="Contribution graph"
          />
          <Card class="cr childCard" :bgColor="themeStore.childBgColor()">
            <div
              class="contributionBox"
              v-if="githubStore.contributionGraph?.totalContributions"
            >
              <img
                class="contributionGraph"
                :src="`https://ghchart.rshah.org/30a14e/${githubStore.data?.login}`"
                alt="Name Your Github chart"
              />
              <div class="bt">
                <p>
                  {{ githubStore.contributionGraph?.totalContributions }}
                  contributions in the last year
                </p>
                <div class="btc">
                  <p>Less</p>
                  <span
                    v-for="color in githubStore.contributionGraph?.colors"
                    :style="{ backgroundColor: color }"
                  ></span>
                  <p>More</p>
                </div>
              </div>
            </div>
            <div class="skeleton contributionBox" v-else>
              <div class="contributionGraph"></div>
              <div class="bt">
                <span></span>
                <span></span>
              </div>
            </div>
          </Card>
        </Card>
      </div>
    </Card>
  </section>
</template>
<style scoped>
section {
  overflow: hidden;
}
.projectPage {
  padding: 0 1.6rem;
  padding-top: 20rem;
  padding-bottom: 8rem;
}
.projectPage .cr.cardContainer {
  align-items: start;
  padding: 0;
}
.cr.cardContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.4rem;
}
.cr.parentCard {
  padding: 3rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
.cr.childCard {
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2.4rem;
  color: v-bind("themeStore.textColor()");
}

a {
  text-decoration: none;
}
a:hover > .childCard {
  background-color: v-bind("themeStore.childHoverBgColor()");
}
.textBox {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 2.4rem;
}
.textBox .login {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.skeleton.textBox {
  width: 100%;
  gap: 0.8rem;
}
.skeleton.textBox p {
  width: 100%;
  height: 2.4rem;
  border-radius: 0.8rem;
  background-color: v-bind("themeStore.skeletonColor()");
  animation: skeleton 1s linear infinite;
}
.skeleton.textBox .login {
  width: 50%;
}
.imgBox {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
.skeleton.imgBox {
  min-width: 10rem;
  min-height: 10rem;
  border-radius: 50%;
  background-color: v-bind("themeStore.skeletonColor()");
  animation: skeleton 1s linear infinite;
}
.imgBox img {
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 1.6rem;
  filter: brightness(1.3);
}
.contributionBox {
  width: 100%;
  height: 100%;
  font-size: 1.4rem;
}
.contributionGraph {
  width: 100%;
  height: 100%;
  margin-bottom: 0.4rem;
}
.skeleton .contributionGraph {
  height: 14rem;
  background-color: v-bind("themeStore.skeletonColor()");
  border-radius: 0.6rem;
  animation: skeleton 1s linear infinite;
}
.skeleton.contributionBox span {
  width: 30%;
  height: 1.5rem;
  border-radius: 0.6rem;
  background-color: v-bind("themeStore.skeletonColor()");
  animation: skeleton 1s linear infinite;
}
.bt {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btc {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.btc span {
  width: 1.5rem;
  height: 1.5rem;
}
.hidden {
  opacity: 0;
  filter: blur(6px);
  transform: translateX(100%);
  transition: all 0.6s;
}
.show {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
}

@keyframes skeleton {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.5;
  }
}
@media screen and (max-width: 650px) {
  .cr.cardContainer {
    padding: 1.6rem;
  }
  .first {
    flex-direction: column;
    align-items: center;
  }
  .contributionBox {
    font-size: 0.86rem;
  }
  .btc {
    gap: 0.25rem;
  }
  .btc span {
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
  }
}
</style>
