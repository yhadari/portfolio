<script setup>
import { useThemeStore } from "../stores/Theme";
import Card from "../components/Card.vue";
import Title from "../components/Title.vue";

const themeStore = useThemeStore();
</script>

<template>
  <section>
    <Card class="cr cardContainer" :bgColor="themeStore.bgColor()">
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
          width="100%"
          height="19.2rem"
          :bgColor="themeStore.childBgColor()"
        />

        <Title
          fontSize="3.4rem"
          :color="themeStore.titleColor()"
          text="Contribution graph"
        />
        <Card
          class="cr childCard"
          width="100%"
          height="22rem"
          :bgColor="themeStore.childBgColor()"
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
</style>
