<script setup>
import { onMounted } from "vue";
import { useThemeStore } from "../stores/Theme";
import Card from "../components/Card.vue";
import Title from "../components/Title.vue";

const projectNumber = 6;
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
        height="46rem"
        :bgColor="themeStore.parentBgColor()"
      >
        <Title
          fontSize="3.4rem"
          :color="themeStore.titleColor()"
          text="Projects"
        />
        <div class="cardBox">
          <Card
            v-for="i in projectNumber"
            :key="i"
            class="cr childCard"
            height="100%"
            :bgColor="themeStore.childBgColor()"
            :shadow="false"
          >
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
  border-radius: 1rem;
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
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
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

@media screen and (max-width: 1200px) {
  .cardBox {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
