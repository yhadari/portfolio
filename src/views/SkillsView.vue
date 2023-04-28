<script setup>
import { useThemeStore } from "../stores/Theme";
import { onMounted } from "vue";
import Card from "../components/Card.vue";
import Title from "../components/Title.vue";

const themeStore = useThemeStore();

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
  align-items: center;
  justify-content: center;
  padding: 0 2.4rem;
}
.cr.parentCard {
  padding: 2.6rem;
  border-radius: 1rem;
  margin: 0 auto;
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
