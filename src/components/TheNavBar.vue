<script setup>
import { reactive } from "vue";
import { useThemeStore } from "../stores/Theme";

const themeStore = useThemeStore();

const state = reactive({
  nav: [
    { name: "Landing", open: true },
    { name: "About", open: false },
    { name: "Skills", open: false },
    { name: "Portfolio", open: false },
    { name: "Contact", open: false },
  ],
});

const handleClick = (item) => {
  state.nav.forEach((ele) => (ele.open = false));
  item.open = true;
};
</script>
<template>
  <nav :class="`${themeStore.light_theme ? 'light-theme' : 'dark-theme'}`">
    <div class="logo">
      <img src="../assets/linkden.png" alt="linkden logo" />
      <img src="../assets/github.png" alt="linkden logo" />
    </div>
    <ul>
      <li
        v-for="item in state.nav"
        :key="item"
        @click="handleClick(item)"
        :class="`${item.open ? 'open' : ''}`"
      >
        <a href="#">{{ item.name }}</a>
      </li>
    </ul>
    <input
      @click="themeStore.changeTheme"
      class="toggle"
      type="checkbox"
      checked
    />
  </nav>
</template>
<style scoped>
nav {
  width: 100vw;
  height: var(--navHeight);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  font-size: 1.5rem;
  font-weight: 600;
  backdrop-filter: blur(0.4rem);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  color: var(--navListColor);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14rem;
}
nav img {
  width: 3.2rem;
  height: 3.2rem;
  /* background-color: #fff; */
  /* border-radius: 1rem; */
  cursor: pointer;
}
.light-theme {
  background-color: rgb(255, 255, 255, 0.3);
  color: #000;
}
.dark-theme {
  background-color: rgba(63, 63, 63, 0.5);
  color: #fff;
}
.logo {
  display: flex;
  gap: 2.2rem;
}
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
}
li {
  padding: 0.4rem 1.2rem;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.light-theme .open {
  background-color: rgb(255, 216, 168);
}
.dark-theme .open {
  background-color: rgb(250, 176, 5);
}
.open {
  color: #000;
}
.light-theme li:hover {
  background-color: rgb(255, 232, 204);
}
.dark-theme li:hover {
  background-color: rgb(245, 159, 0);
}
li:hover {
  transform: scale(1.1);
}
li:active {
  transform: scale(0.8);
}
a {
  color: inherit;
  text-decoration: none;
}

.toggle {
  appearance: none;
  outline: none;
  cursor: pointer;

  width: var(--toggleSize);
  height: var(--toggleSize);
  box-shadow: inset calc(var(--toggleSize) * 0.33)
    calc(var(--toggleSize) * -0.25) 0;
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.8);

  transition: all 400ms;
}

.toggle:checked {
  --ray-size: calc(var(--toggleSize) * -0.4);
  --offset-orthogonal: calc(var(--toggleSize) * 0.65);
  --offset-diagonal: calc(var(--toggleSize) * 0.45);

  transform: scale(0.75);
  color: rgba(0, 0, 0, 0.8);
  box-shadow: inset 0 0 0 var(--toggleSize),
    calc(var(--offset-orthogonal) * -1) 0 0 var(--ray-size),
    var(--offset-orthogonal) 0 0 var(--ray-size),
    0 calc(var(--offset-orthogonal) * -1) 0 var(--ray-size),
    0 var(--offset-orthogonal) 0 var(--ray-size),
    calc(var(--offset-diagonal) * -1) calc(var(--offset-diagonal) * -1) 0
      var(--ray-size),
    var(--offset-diagonal) var(--offset-diagonal) 0 var(--ray-size),
    calc(var(--offset-diagonal) * -1) var(--offset-diagonal) 0 var(--ray-size),
    var(--offset-diagonal) calc(var(--offset-diagonal) * -1) 0 var(--ray-size);
}
</style>
