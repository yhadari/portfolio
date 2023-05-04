<!-- <script setup>
import { onMounted } from "vue";

const scrollToElement = () => {
  window.scrollTo(0, document.body.scrollHeight);
};

onMounted(() => {
  scrollToElement();
});
</script> -->

<template>
  <div class="img">
    <img src="../assets/404.jpg" alt="404 img" />
    <!-- <router-link class="text" to="/">Go To Dashboard</router-link> -->
  </div>
</template>

<style scoped>
.img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgb(226, 230, 233);
}
img {
  max-width: 100rem;

  /* transform: scale(0.6); */
}
/* .text {
  width: 50rem;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  font-size: 4rem;
  font-weight: bold;
  color: rgb(93, 101, 104);
  text-decoration: none;
  transition: all 0.3s ease-in-out;
} */

/* @media screen and (max-width: 960px) {
  img {
    transform: scale(0.5);
  }
} */
</style>
