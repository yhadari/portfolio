<script setup>
import { reactive } from "vue";
import { useThemeStore } from "../stores/Theme";
import buttonSfx from "../assets/btnSound.mp3";
import lightSwitch1 from "../assets/lightSwitch1.mp3";
import lightSwitch2 from "../assets/lightSwitch2.mp3";

const themeStore = useThemeStore();

const state = reactive({
  nav: [
    { name: "Landing", open: true },
    { name: "About", open: false },
    { name: "Skills", open: false },
    { name: "Portfolio", open: false },
    { name: "Contact", open: false },
  ],
  menu: true,
});

const handleClick = (item) => {
  playSound(buttonSfx);
  const lists = document.querySelector(".lists");
  lists.classList.add("hide");
  lists.classList.remove("show");
  state.menu = true;
  state.nav.forEach((ele) => (ele.open = false));
  item.open = true;
};

const menuClick = () => {
  state.menu = !state.menu;
  const lists = document.querySelector(".lists");
  if (state.menu) {
    lists.classList.add("hide");
    lists.classList.remove("show");
  } else {
    lists.classList.add("show");
    lists.classList.remove("hide");
  }
};

const changeTheme = () => {
  if (themeStore.theme === "light") {
    playSound(lightSwitch1);
  } else if (themeStore.theme === "dark") {
    playSound(lightSwitch2);
  }
  themeStore.theme = themeStore.theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", themeStore.theme);
};

const playSound = (sound) => {
  if (sound) {
    const audio = new Audio(sound);
    audio.play();
  }
};
</script>
<template>
  <nav
    :class="`${themeStore.theme === 'light' ? 'light-theme' : 'dark-theme'}`"
  >
    <ion-icon
      name="menu"
      class="menu"
      v-if="state.menu"
      @click="menuClick"
    ></ion-icon>
    <ion-icon name="close" class="close" @click="menuClick" v-else></ion-icon>
    <div class="logo">
      <a
        class="linkden"
        href="https://www.linkedin.com/in/yacinehadari/"
        target="_blank"
      >
        <img src="../assets/linkden.png" alt="linkden logo" />
      </a>
      <a class="github" href="https://github.com/yhadari" target="_blank">
        <img src="../assets/github.png" alt="linkden logo" />
      </a>
    </div>
    <ul class="lists">
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
      @click="changeTheme"
      class="toggle"
      type="checkbox"
      :checked="themeStore.theme === 'light'"
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
  backdrop-filter: blur(0.6rem);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  color: var(--navListColor);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12rem;
  padding: 0 2.6rem;
}
.menu,
.close {
  display: none;
  transition: all 0.3s;
}
.menu:hover,
.close:hover {
  transform: scale(1.1);
}
.menu:active,
.close:active {
  transform: scale(1);
}

nav img {
  width: 3.2rem;
  height: 3.2rem;
  cursor: pointer;
  transition: all 0.3s;
}
nav img:hover {
  transform: scale(1.1);
}
nav img:active {
  transform: scale(1);
}
.light-theme {
  background-color: rgb(255, 255, 255, 0.3);
  color: #000;
}
.dark-theme {
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
}
.logo {
  display: flex;
  gap: 2.4rem;
}
.logo img {
  background-color: #fff;
}
.logo .github img {
  border-radius: 50%;
}
.logo .linkden img {
  border-radius: 10%;
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

  transition: all 300ms;
}

.toggle:checked {
  --ray-size: calc(var(--toggleSize) * -0.4);
  --offset-orthogonal: calc(var(--toggleSize) * 0.65);
  --offset-diagonal: calc(var(--toggleSize) * 0.45);

  transform: scale(0.75);
  color: rgba(0, 0, 0, 0.7);
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

@media screen and (max-width: 950px) {
  nav {
    justify-content: right;
    gap: 3rem;
  }
  .menu,
  .close {
    cursor: pointer;
    font-size: 3rem;
    display: block;
    margin-right: auto;
  }
  nav ul {
    position: absolute;
    top: var(--navHeight);
    left: 0;
    display: none;
    width: 100%;
  }
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
  .light-theme ul {
    background-color: rgba(255, 255, 255, 0.9);
  }
  .dark-theme ul {
    background-color: rgb(0, 0, 0, 0.9);
  }
}

@media screen and (max-width: 650px) {
  ul {
    font-size: 1.6rem;
  }
  li {
    padding: 0.8rem 1.6rem;
  }
}
</style>
