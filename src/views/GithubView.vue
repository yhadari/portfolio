<script setup>
import { useThemeStore } from "../stores/Theme";
import Card from "../components/Card.vue";
import Title from "../components/Title.vue";
import Toggle from "../components/Toggle.vue";

const themeStore = useThemeStore();

const bgColor = () =>
  themeStore.theme === "light" ? "rgb(255, 232, 204)" : "rgb(255, 236, 153)";

const parentBgColor = () =>
  themeStore.theme === "light" ? "rgb(255, 255, 255)" : "rgb(44, 46, 51)";

const childBgColor = () =>
  themeStore.theme === "light" ? "rgb(248, 248, 248)" : "rgb(30, 30, 30)";

const titleColor = () =>
  themeStore.theme === "light" ? "rgb(255, 146, 43)" : "rgb(252, 196, 25)";
</script>

<template>
  <section>
    <Card class="cr cardContainer" :bgColor="bgColor()">
      <Card
        class="cr parentCard"
        width="110rem"
        height="76%"
        :bgColor="parentBgColor()"
      >
        <Title
          fontSize="3.4rem"
          :color="titleColor()"
          text="GitHub profile details"
        />
        <Card
          class="cr childCard"
          width="100%"
          height="18rem"
          :bgColor="childBgColor()"
        />

        <Title
          fontSize="3.4rem"
          :color="titleColor()"
          text="Contribution graph"
        />
        <Card
          class="cr childCard"
          width="100%"
          height="22rem"
          :bgColor="childBgColor()"
        />
      </Card>
    </Card>
  </section>
</template>
<style scoped>
section {
  width: 100%;
  height: 100vh;
  letter-spacing: 0.8px;
}
.cr.cardContainer {
  padding: 3.2rem;
  display: flex;
  align-items: center;
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
}
.titleBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding-bottom: 2.6rem;
  font-size: 1.2rem;
}
.titleBox div {
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}
</style>
