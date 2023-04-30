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
import "prismjs/themes/prism.css";

const themeStore = useThemeStore();
const route = router.currentRoute.value.path;
const toggleValue = ref(true);
const code = `import Saad from "@saad/core"

// -----------------------------------------------------------------------------

type Props = {
  name: string;
  age: number;
  location: string;
  email: string;
}

export default function AboutMe(props: Props) {
  return (
    <Saad 
      🧔🏻 = { I'm Mrabet saâd, a 25 years old programmer, from Tangier Morocco 🇲🇦. },
      🧑🏼‍🎓 = { I got my bachelor's degree in Computer Engineering at 2021. },
      🎯 = {
              I enjoy being challenged and engaging with projects that require me to work outside
              my comfort zone and knowledge set, as continuing to learn new languages and 
              development techniques.
           },
      💻 = { I'm fluent in many programming languages, especially in Js/Ts & Python. },
      🔎 = {
              My field of Interest are building new  Web Technologies and Products and also in 
              areas related Mobile application and Natural Language Processing.
           },
      💭 = {
              whenever possible, i also apply my passion for developing products with multiple 
              different frameworks and technologies, like Django, React, Angular, Vite, Redux,
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
});
</script>

<template>
  <section :class="route === '/about' && 'aboutPage'">
    <Card
      class="cr cardContainer"
      :bgColor="route === '/' && themeStore.bgColor()"
      :shadow="false"
    >
      <div class="hidden">
        <Card
          class="cr parentCard"
          :width="`${toggleValue ? '84rem' : '110rem'}`"
          :height="`${toggleValue ? '87rem' : '44rem'}`"
          :bgColor="themeStore.parentBgColor()"
        >
          <div class="titleBox">
            <Title
              fontSize="3.4rem"
              :color="themeStore.titleColor()"
              text="Let me introduce myself"
            />
            <div>
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
          <div class="cotainer" v-else>
            <p>
              🧔🏻 I'm Mrabet saâd, a 25 years old programmer, from Tangier
              Morocco 🇲🇦.
            </p>
            <p>
              🧑🏼‍🎓 I got my bachelor's degree in Computer Engineering at 2021.
            </p>
            <p>
              🎯 I enjoy being challenged and engaging with projects that
              require me to work outside my comfort zone and knowledge set, as
              continuing to learn new languages and development techniques.
            </p>
            <p>
              💻 I'm fluent in many programming languages, especially in Js/Ts &
              Python.
            </p>
            <p>
              🔎 My field of Interest are building new Web Technologies and
              Products and also in areas related Mobile application and Natural
              Language Processing.
            </p>
            <p>
              💭 whenever possible, i also apply my passion for developing
              products with multiple different frameworks and technologies, like
              Django, React, Angular, Vite, Redux, Node.js ...
            </p>
          </div>
        </Card>
      </div>
    </Card>
  </section>
</template>
<style scoped>
section {
  width: 100%;
  height: 100vh;
  min-height: 95rem;
  letter-spacing: 0.8px;
  overflow-x: hidden;
}
.aboutPage {
  margin: 18rem 0 6rem 0;
  justify-content: stretch;
}
.aboutPage .cr.cardContainer {
  justify-content: stretch;
}
.cr.cardContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 2.4rem;
}
.cr.parentCard {
  padding: 2.6rem;
  border-radius: 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.cr.childCard {
  border-radius: 1rem;
  overflow: hidden;
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

.cotainer {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  padding: 0.4rem;
  font-size: 1.8rem;
  font-weight: 400;
  color: v-bind("themeStore.textColor()");
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

.my-editor {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 1.25rem;
  line-height: 1.65;
  padding: 0 2rem;
  /* color: #fff;
  background-color: #000; */
  pointer-events: none;
}
</style>
