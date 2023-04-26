<script setup>
import { onMounted } from "vue";
import { useThemeStore } from "../stores/Theme";
import Card from "../components/Card.vue";
import Title from "../components/Title.vue";
import Toggle from "../components/Toggle.vue";
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
      <Card
        class="cr parentCard hidden"
        width="84rem"
        height="87rem"
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
              :bgColor="themeStore.toggleColor()"
              :theme="themeStore.theme"
            />
            <h3 class="text">Dev view</h3>
          </div>
        </div>
        <Card
          class="cr childCard"
          :bgColor="themeStore.childBgColor()"
          :shadow="false"
        />
      </Card>
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
}
.cr.childCard {
  border-radius: 1rem;
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
