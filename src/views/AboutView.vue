<script setup>
import { useThemeStore } from "../stores/Theme";
import Card from "../components/Card.vue";

const themeStore = useThemeStore();

const bgColor = () => {
  if (themeStore.theme === "light") {
    return "rgb(255, 232, 204)";
  } else {
    return "rgb(255, 236, 153)";
  }
};
</script>
<template>
  <section>
    <Card :bgColor="bgColor()">
      <Card width="84rem" height="100%" bgColor="#ddd"></Card>
    </Card>
    <!-- <div class="container">
      <div class="title">
        <h1>Let me introduce myself</h1>
        <div class="toggle">
          <input type="checkbox" id="switch" />
          <label for="switch"
            ><span class="codeSlashIcon codeIcon"></span
          ></label>
          <h2 class="text">Dev view</h2>
        </div>
      </div>
      <div class="code">
        <p></p>
      </div>
    </div> -->
  </section>
</template>
<style scoped>
section {
  width: 100%;
  height: 100vh;
  /* padding: 3.4rem; */
  letter-spacing: 0.8px;
}
/* .light-theme {
  background-color: rgb(255, 232, 204);
}
.dark-theme {
  background-color: rgb(255, 236, 153);
}
.container {
  width: 84rem;
  height: 100%;
  margin: 0 auto;
  padding: 2.6rem;
  padding-top: 2.8rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.8rem;
}
.light-theme .container {
  background-color: #fff;
}
.dark-theme .container {
  background-color: rgb(44, 46, 51);
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding-bottom: 2.8rem;
  color: #ddd;
  font-size: 1.2rem;
}
.title h1 {
  font-size: 3.4rem;
}
.light-theme .title h1 {
  color: rgb(255, 146, 43);
}
.dark-theme .title h1 {
  color: rgb(252, 196, 25);
}
.light-theme .text {
  color: #333;
}
.dark-theme .text {
  color: #ddd;
}
.code {
  width: 100%;
  height: 100%;
  border-radius: inherit;
}
.light-theme .code {
  background-color: #f8f8f8;
}
.dark-theme .code {
  background-color: rgb(30, 30, 30);
}
.toggle {
  display: flex;
  align-items: center;
  gap: 2rem;
}
input[type="checkbox"] {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 62px;
  height: 30px;
  display: block;
  border-radius: 100px;
  position: relative;
  rotate: 180deg;
}
.light-theme label {
  background-color: rgb(253, 126, 20);
}
.dark-theme label {
  background-color: rgb(232, 89, 12);
}

label::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  width: 22px;
  height: 22px;
  background: #fff;
  border-radius: 50%;
  transition: 0.3s;
}

.codeSlashIcon::before,
.codeIcon::after {
  width: 1.8rem;
  height: 1.8rem;
  content: "";
  background-size: cover;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

.codeSlashIcon::before {
  background: url("../assets/codeSlash.svg");
  right: -0.2rem;
}

.codeIcon::after {
  background: url("../assets/code.svg");
  left: 1.8rem;
}

.light-theme input:checked + label {
  background-color: rgb(182, 182, 182);
}
.dark-theme input:checked + label {
  background-color: rgb(30, 30, 30);
}

input:checked + label:after {
  left: calc(63% - 5px);
  transform: translateX(-100%);
  transform: translateY(-50%);
}

label:active:after {
  width: 30px;
} */
</style>
