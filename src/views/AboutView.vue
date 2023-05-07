<script setup>
import { ref, onMounted } from "vue";
import { useThemeStore } from "../stores/Theme";
import Card from "../components/Card.vue";
import Title from "../components/Title.vue";
import Toggle from "../components/Toggle.vue";
import router from "../router";

import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-solarizedlight.css";

const themeStore = useThemeStore();
const route = router.currentRoute.value.path;
let toggleValue = ref(true);
const code = `import Yacine from "@yacine/core"

// -----------------------------------------------------------------------------

type Props = {
  name: string;
  age: number;
  location: string;
  email: string;
}

export default function AboutMe(props: Props) {
  return (
    <Yacine
      🧔🏻 = { I'm Hadari yacine, a 25 years old programmer, from Oulad Teima Morocco 🇲🇦. },
      🧑🏼‍🎓 = { 
                I got my high-school diploma at 2016. And now I'm a SOFTWARE ENGINEERING 
                student at 1337 Coding School. 
              },
      🎯 = {
              I enjoy being challenged and engaging with projects that require me to work outside
              my comfort zone and knowledge set, as continuing to learn new languages and
              development techniques.
           },
      💻 = { I'm fluent in many programming languages, especially in Js/Ts & C , C++. },
      🔎 = {
              My field of Interest are building new Web Technologies and Products.
           },
      💭 = {
              whenever possible, i also apply my passion for developing products with multiple
              different frameworks and technologies, like Vue.js, React, Next.js, Vite, express,
              Node.js ...
           }
    />
  );
}
`;

const highlighter = (code) => {
  return highlight(code, languages.js);
};

const handleToggle = () => {
  toggleValue.value = !toggleValue.value;
};

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

  const toggleBox = document.querySelector(".toggleBox");
  let temp = true;
  const myFunction = (x) => {
    if (x.matches) {
      temp = toggleValue.value;
      toggleValue.value = false;
      toggleBox.style.display = "none";
    } else {
      toggleValue.value = temp;
      toggleBox.style.display = "flex";
    }
  };

  const x = window.matchMedia("(max-width: 1000px)");
  myFunction(x); // Call listener function at run time
  x.addListener(myFunction); // Attach listener function on state changes
});
</script>

<template>
  <section :class="route === '/about' && 'aboutPage'">
    <Card
      class="cr cardContainer"
      :bgColor="route === '/' && themeStore.bgColor()"
      height="100vh"
      :shadow="false"
      borderRadius="0"
    >
      <div class="hidden">
        <Card
          class="cr parentCard"
          :width="`${toggleValue ? '84rem' : '110rem'}`"
          :bgColor="themeStore.parentBgColor()"
        >
          <div class="titleBox">
            <Title
              fontSize="3.4rem"
              :color="themeStore.titleColor()"
              text="Let me introduce myself"
            />
            <div class="toggleBox">
              <Toggle
                @onchange="handleToggle"
                :bgColor="themeStore.toggleColor()"
                :theme="themeStore.theme"
              />
              <h3 v-if="toggleValue" class="text">Dev view</h3>
              <h3 v-else class="text">Non tech view</h3>
            </div>
          </div>
          <Card
            v-if="toggleValue"
            class="cr childCard"
            :bgColor="themeStore.childBgColor()"
            :shadow="false"
          >
            <prism-editor
              class="my-editor"
              v-model="code"
              :highlight="highlighter"
            />
          </Card>
          <div class="container" v-else>
            <p>
              🧔🏻 I'm Hadari yacine, a 25 years old programmer, from Oulad Teima
              Morocco 🇲🇦.
            </p>
            <p>🧑🏼‍🎓 I'm a SOFTWARE ENGINEERING student at 1337 Coding School.</p>
            <p>
              🎯 I enjoy being challenged and engaging with projects that
              require me to work outside my comfort zone and knowledge set, as
              continuing to learn new languages and development techniques.
            </p>
            <p>
              💻 I'm fluent in many programming languages, especially in Js/Ts &
              C C++.
            </p>
            <p>
              🔎 My field of Interest are building new Web Technologies and
              Products.
            </p>
            <p>
              💭 whenever possible, i also apply my passion for developing
              products with multiple different frameworks and technologies, like
              Vue.js, React, Next.js, Vite, express, Node.js ...
            </p>
          </div>
        </Card>
      </div>
    </Card>
  </section>
</template>
<style scoped>
section {
  overflow: hidden;
}
.aboutPage {
  padding: 0 2.4rem;
  padding-top: 20rem;
  padding-bottom: 8rem;
}
.aboutPage .cr.cardContainer {
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
  padding: 2.6rem;
}
.titleBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding-bottom: 2.6rem;
}
.titleBox div {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.text {
  font-size: 2rem;
  font-weight: 400;
  color: v-bind("themeStore.textColor()");
}

.container {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  padding: 0.4rem;
  font-size: 1.8rem;
  font-weight: 400;
  color: v-bind("themeStore.textColor()");
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

.my-editor {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 1.32rem;
  line-height: 1.6;
  padding: 2rem;
  color: v-bind("themeStore.prismColor()");
  background-color: v-bind("themeStore.prismBgColor()");
  pointer-events: none;
}
</style>
