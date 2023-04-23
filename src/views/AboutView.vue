<script setup>
import { useThemeStore } from "../stores/Theme";
import Card from "../components/Card.vue";
import Title from "../components/Title.vue";
import Toggle from "../components/Toggle.vue";

const themeStore = useThemeStore();
</script>

<template>
  <section>
    <Card
      class="cr cardContainer"
      :bgColor="themeStore.bgColor()"
      :shadow="false"
    >
      <Card
        class="cr parentCard"
        width="84rem"
        height="88rem"
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
}
.cr.cardContainer {
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
</style>
