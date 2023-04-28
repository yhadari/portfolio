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
        width="72rem"
        height="48rem"
        :bgColor="themeStore.parentBgColor()"
      >
        <Title
          fontSize="3.4rem"
          :color="themeStore.contactColor()"
          text="Contact me"
        />
        <Card
          class="cr childCard"
          width="50%"
          :bgColor="themeStore.childBgColor()"
          :shadow="false"
        ></Card>
      </Card>
    </div>
  </section>
</template>
<style scoped>
section {
  width: 100%;
  height: 100vh;
  min-height: 74rem;
  letter-spacing: 0.8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cr.parentCard {
  padding: 2.6rem;
  border-radius: 1rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.cr.childCard {
  border-radius: 1rem;
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
</style>
