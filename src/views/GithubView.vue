<script setup>
import { onMounted } from "vue";
import { useThemeStore } from "../stores/Theme";
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
          <Card
            class="cr childCard"
            height="19.2rem"
            :bgColor="themeStore.childBgColor()"
            :shadow="false"
          />
          <Title
            fontSize="3.4rem"
            :color="themeStore.titleColor()"
            text="Contribution graph"
          />
          <Card
            class="cr childCard"
            height="22rem"
            :bgColor="themeStore.childBgColor()"
            :shadow="false"
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
}
.cr.cardContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2.4rem;
}
.cr.parentCard {
  padding: 2.6rem;
  border-radius: 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.cr.childCard {
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.hidden {
  opacity: 0;
  filter: blur(6px);
  transform: translateX(100%);
  transition: all 0.5s;
}
.show {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
}
</style>
