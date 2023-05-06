<script setup>
import { useThemeStore } from "../stores/Theme";
import { onMounted } from "vue";
import Card from "../components/Card.vue";
import Title from "../components/Title.vue";
import router from "../router";

const themeStore = useThemeStore();
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

onMounted(() => {
  const hiddenElement = document.querySelectorAll(".hidden");
  hiddenElement.forEach((element) => {
    observe.observe(element);
  });
});
</script>
<template>
  <section>
    <Card
      height="100vh"
      :shadow="false"
      :class="`cr cardContainer ${route === '/skills' && 'skillsPage'}`"
    >
      <div class="hidden">
        <Card
          class="cr parentCard"
          width="96rem"
          :bgColor="themeStore.parentBgColor()"
        >
          <Title
            fontSize="3.4rem"
            :color="themeStore.titleColor()"
            text="Technologies & Tools"
          />
          <div class="text">
            <p>
              For me, those are some of the tech & tools that i like to use on
              my daily work, and which I really enjoy using them on the
              different projects either personal or professional.
            </p>
          </div>
          <div class="box">
            <Title
              fontSize="2rem"
              :color="themeStore.titleColor()"
              text="Programming languages"
            />
            <div>
              <img
                class="logo"
                src="../assets/js-09d567eb.webp"
                alt="js logo"
              />
              <img
                class="logo"
                src="../assets/typescript-8ad9dfe7.webp"
                alt="ts logo"
              />
              <img
                class="logo"
                src="../assets/html-3640299.png"
                alt="html logo"
              />
              <img
                class="logo"
                src="../assets/css3-3640300.png"
                alt="css logo"
              />
              <img
                class="logo"
                src="../assets/bash-350f77f2.webp"
                alt="bash logo"
              />
              <img class="logo" src="../assets/c-logo.png" alt="c logo" />
              <img class="logo" src="../assets/c++logo.png" alt="c++ logo" />
            </div>
          </div>
          <div class="box">
            <Title
              fontSize="2rem"
              :color="themeStore.titleColor()"
              text="Frameworks & libraries"
            />
            <div>
              <img
                class="logo"
                src="../assets/vuejs-3640297.png"
                alt="vue.js logo"
              />
              <img
                class="logo"
                src="../assets/react-4695757.png"
                alt="react logo"
              />
              <img
                class="logo"
                src="../assets/nextjs-boilerplate-logo.png"
                alt="next.js logo"
              />
              <img class="logo" src="../assets/nodejs.png" alt="node.js logo" />
              <img
                class="logo"
                src="../assets/expressjs.png"
                alt="express.js logo"
              />
            </div>
          </div>
          <div class="box">
            <Title
              fontSize="2rem"
              :color="themeStore.titleColor()"
              text="Tools & services"
            />
            <div>
              <img
                class="logo"
                src="../assets/postgresql-67a6ade0.webp"
                alt="js logo"
              />
              <img class="logo" src="../assets/mongodb.png" alt="js logo" />
              <img
                class="logo"
                src="../assets/git-56c9cb66.webp"
                alt="js logo"
              />
              <img
                class="logo"
                src="../assets/github-2703d511.webp"
                alt="js logo"
              />
              <img
                class="logo"
                src="../assets/netlify-975607fa.webp"
                alt="js logo"
              />
              <img
                class="logo"
                src="../assets/docker-47f787cf.webp"
                alt="js logo"
              />
              <img
                class="logo"
                src="../assets/vite-5c372a0c.webp"
                alt="js logo"
              />
              <img class="logo" src="../assets/images.jpg" alt="js logo" />
            </div>
          </div>
        </Card>
      </div>
    </Card>
  </section>
</template>
<style scoped>
.cr.cardContainer.skillsPage {
  padding: 0 2.4rem;
  padding-top: 20rem;
  padding-bottom: 8rem;
  align-items: start;
}
.cr.cardContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.4rem;
}
.cr.parentCard {
  padding: 2.6rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  letter-spacing: 0.8px;
}

.logo {
  width: 7.2rem;
  height: 7.2rem;
  margin: 1rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 0.2s;
  background-color: #fff;
  padding: 0.4rem;
}
.logo:hover {
  transform: scale(1.32);
}
.logo:active {
  transform: scale(0.8);
}
.text {
  font-size: 1.6rem;
  color: v-bind("themeStore.textColor()");
}
.box {
  display: flex;
  flex-direction: column;
}
.hidden {
  opacity: 0;
  filter: blur(6px);
  transform: translateX(-100%);
  transition: all 0.8s;
}
.show {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
}
</style>
