<script setup>
import { useThemeStore } from "../stores/Theme";
import Card from "../components/Card.vue";
import Title from "../components/Title.vue";

const projectNumber = 6;
const themeStore = useThemeStore();
</script>

<template>
  <section>
    <Card
      class="cr parentCard"
      width="110rem"
      height="50rem"
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
        />
      </div>
    </Card>
  </section>
</template>
<style scoped>
section {
  width: 100%;
  height: 100vh;
  min-height: 58rem;
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
  column-gap: 2rem;
  row-gap: 3.4rem;
}
.cr.childCard {
  border-radius: 2rem;
}
</style>
