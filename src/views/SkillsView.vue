<script setup>
import { useThemeStore } from "../stores/Theme";
import Card from "../components/Card.vue";
import Title from "../components/Title.vue";

const parentBgColor = () =>
  themeStore.theme === "light" ? "rgb(255, 255, 255)" : "rgb(44, 46, 51)";

const titleColor = () =>
  themeStore.theme === "light" ? "rgb(255, 146, 43)" : "rgb(252, 196, 25)";

const themeStore = useThemeStore();
</script>
<template>
  <section>
    <Card
      class="cr parentCard"
      width="110rem"
      height="56rem"
      :bgColor="parentBgColor()"
    >
      <Title
        fontSize="3.4rem"
        :color="titleColor()"
        text="Technologies & Tools"
      />
    </Card>
  </section>
</template>
<style scoped>
section {
  width: 100%;
  height: 100vh;
  letter-spacing: 0.8px;
  display: flex;
  align-items: center;
}
.cr.parentCard {
  padding: 2.6rem;
  border-radius: 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>
