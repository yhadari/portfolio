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
  <section :class="route === '/skills' && 'skillsPage'">
    <div class="hidden">
      <Card
        class="cr parentCard"
        width="110rem"
        height="56rem"
        :bgColor="themeStore.parentBgColor()"
      >
        <Title
          fontSize="3.4rem"
          :color="themeStore.titleColor()"
          text="Technologies & Tools"
        />
        <div class="text">
          <p>
            For me, those are some of the tech & tools that i like to use on my
            daily work, and which I really enjoy using them on the different
            projects either personal or professional.
          </p>
        </div>
        <div class="box">
          <Title
            fontSize="2rem"
            :color="themeStore.titleColor()"
            text="Programming languages"
          />
          <div>
            <img class="logo" src="../assets/js-09d567eb.webp" alt="js logo" />
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
            <img class="logo" src="../assets/css3-3640300.png" alt="css logo" />
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
            <img class="logo" src="../assets/js-09d567eb.webp" alt="js logo" />
            <img class="logo" src="../assets/js-09d567eb.webp" alt="js logo" />
            <img class="logo" src="../assets/js-09d567eb.webp" alt="js logo" />
            <img class="logo" src="../assets/js-09d567eb.webp" alt="js logo" />
          </div>
        </div>
      </Card>
    </div>
  </section>
</template>
<style scoped>
section {
  width: 100%;
  height: 100vh;
  min-height: 64rem;
  letter-spacing: 0.8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 0 2.4rem;
}

.skillsPage {
  margin: 6rem 0;
}
.cr.parentCard {
  padding: 2.6rem;
  border-radius: 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.logo {
  width: 7rem;
  height: 7rem;
  margin-right: 2rem;
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 0.2s;
  background-color: #fff;
}
.logo:hover {
  transform: scale(1.32);
}
.logo:active {
  transform: scale(0.8);
}
.text {
  font-size: 1.6rem;
}
.box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
