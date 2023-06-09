<script setup>
import { reactive } from "vue";
import { useThemeStore } from "../stores/Theme";
import buttonSfx from "../assets/btnSound.mp3";
import lightSwitchOn from "../assets/lightSwitchOn.mp3";
import lightSwitchOff from "../assets/lightSwitchOff.mp3";
import Counts from "./Counts.vue";
import router from "../router";

const themeStore = useThemeStore();

const state = reactive({
  nav: [
    { name: "Landing", route: "/", open: true },
    { name: "About", route: "/about", open: false },
    { name: "Skills", route: "/skills", open: false },
    { name: "Projects", route: "/projects", open: false },
    { name: "Contact", route: "/contact", open: false },
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
  router.push(item.route);
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

const playSound = (sound) => {
  if (sound) {
    const audio = new Audio(sound);
    audio.volume = 0.3;
    audio.play();
  }
};

const changeTheme = () => {
  if (themeStore.theme === "light") {
    playSound(lightSwitchOn);
  } else if (themeStore.theme === "dark") {
    playSound(lightSwitchOff);
  }
  themeStore.theme = themeStore.theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", themeStore.theme);
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
    <Counts />
    <ul class="lists">
      <li
        v-for="item in state.nav"
        :key="item"
        @click="handleClick(item)"
        :class="`${item.open ? 'open' : ''}`"
      >
        {{ item.name }}
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
  width: 100%;
  height: var(--navHeight);
  position: fixed;
  top: 0;
  left: 0;
  font-size: 1.4rem;
  z-index: 1;
  font-weight: 700;
  backdrop-filter: blur(0.8rem);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12rem;
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

.light-theme {
  background-color: rgb(255, 255, 255, 0.3);
  color: #333;
}
.dark-theme {
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
}
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
}
li {
  padding: 0.6rem 1.2rem;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 0.2s;
}

.light-theme .open {
  background-color: rgb(255, 216, 168);
}
.dark-theme .open {
  background-color: rgb(250, 176, 5);
}
.open {
  color: #333;
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
    gap: 4.6rem;
    padding: 0 2.8rem;
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
    background-color: rgba(255, 255, 255);
  }
  .dark-theme ul {
    background-color: rgb(0, 0, 0);
  }
  li:hover {
    transform: scale(1);
    transform: translateX(1.2rem);
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
