<script setup>
import { useThemeStore } from "../stores/Theme";
import Card from "../components/Card.vue";
import Title from "../components/Title.vue";

const themeStore = useThemeStore();
</script>
<template>
  <section>
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
