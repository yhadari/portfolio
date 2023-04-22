<script setup>
import { useThemeStore } from "../stores/Theme";
import Card from "../components/Card.vue";
import Title from "../components/Title.vue";

const themeStore = useThemeStore();

const parentBgColor = () =>
  themeStore.theme === "light" ? "rgb(255, 255, 255)" : "rgb(44, 46, 51)";

const childBgColor = () =>
  themeStore.theme === "light" ? "rgb(248, 248, 248)" : "rgb(30, 30, 30)";

const titleColor = () =>
  themeStore.theme === "light" ? "rgb(255, 146, 43)" : "rgb(252, 196, 25)";
</script>

<template>
  <section>
    <Card
      class="cr parentCard"
      width="110rem"
      height="50rem"
      :bgColor="parentBgColor()"
    >
      <Title fontSize="3.4rem" :color="titleColor()" text="Projects" />
      <div class="cardBox">
        <Card
          class="cr childCard"
          width="100%"
          height="100%"
          :bgColor="childBgColor()"
        />
        <Card
          class="cr childCard"
          width="100%"
          height="100%"
          :bgColor="childBgColor()"
        />
        <Card
          class="cr childCard"
          width="100%"
          height="100%"
          :bgColor="childBgColor()"
        />
        <Card
          class="cr childCard"
          width="100%"
          height="100%"
          :bgColor="childBgColor()"
        />
        <Card
          class="cr childCard"
          width="100%"
          height="100%"
          :bgColor="childBgColor()"
        />
        <Card
          class="cr childCard"
          width="100%"
          height="100%"
          :bgColor="childBgColor()"
        />
      </div>
    </Card>
  </section>
</template>
<style scoped>
section {
  width: 100%;
  height: 100vh;
  letter-spacing: 0.8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cr.parentCard {
  padding: 2.6rem;
  border-radius: 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
}
</style>
