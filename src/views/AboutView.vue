<script setup>
import { useThemeStore } from "../stores/Theme";
import Card from "../components/Card.vue";
import Title from "../components/Title.vue";
import Toggle from "../components/Toggle.vue";

const themeStore = useThemeStore();

const primaryBgColor = () =>
  themeStore.theme === "light" ? "rgb(255, 232, 204)" : "rgb(255, 236, 153)";

const secondaryBgColor = () =>
  themeStore.theme === "light" ? "rgb(255, 255, 255)" : "rgb(44, 46, 51)";

const codeBgColor = () =>
  themeStore.theme === "light" ? "rgb(248, 248, 248)" : "rgb(30, 30, 30)";

const titleColor = () =>
  themeStore.theme === "light" ? "rgb(255, 146, 43)" : "rgb(252, 196, 25)";

const toggleColor = () =>
  themeStore.theme === "light" ? "rgb(253, 126, 20)" : "rgb(232, 89, 12)";

const textColor = () => (themeStore.theme === "light" ? "#333" : "#ddd");
</script>

<template>
  <section>
    <Card class="cr primary" :bgColor="primaryBgColor()">
      <Card
        class="cr secondary"
        width="84rem"
        height="100%"
        :bgColor="secondaryBgColor()"
      >
        <div class="titleBox">
          <Title
            fontSize="3.4rem"
            :color="titleColor()"
            text="Let me introduce myself"
          />
          <div>
            <Toggle :bgColor="toggleColor()" :theme="themeStore.theme" />
            <h3 :style="{ color: textColor() }">Dev view</h3>
          </div>
        </div>
        <Card
          class="cr code"
          width="100%"
          height="100%"
          :bgColor="codeBgColor()"
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
.cr.primary {
  padding: 3.2rem;
}
.cr.secondary {
  padding: 2.6rem;
  border-radius: 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.cr.code {
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
