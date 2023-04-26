<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import { useThemeStore } from "../stores/Theme";
const themeStore = useThemeStore();

const texts = ["Software Engineer", "Web Developer"];
let currentIndex = ref(0);

const updateText = () => {
  currentIndex.value++;
};

const currentText = () => {
  return texts[currentIndex.value % texts.length];
};

const observe = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

onMounted(() => {
  const hiddenElement = document.querySelectorAll(".hidden");
  hiddenElement.forEach((element) => {
    observe.observe(element);
  });
  // i want to update the current text index every 6 seconds
  setInterval(updateText, 6000);
});
</script>

<template>
  <section class="hidden">
    <div class="textBox">
      <h2>Hello, I'm</h2>
      <h2 class="animate-charcter">Yacine Hadari</h2>
      <div class="typewriter">{{ currentText() }}</div>
      <div class="previewBtn">
        <p>Preview on Github</p>
        <ion-icon name="star" class="star"></ion-icon>
      </div>
    </div>
    <div class="avatarBox"></div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  height: calc(100vh - var(--navHeight));
  min-height: 56rem;
  margin-top: var(--navHeight);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  padding: 2rem 4rem;
}

.textBox {
  width: 52rem;
  height: 52rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
}
.avatarBox {
  width: 40rem;
  height: 48rem;
  background-color: black;
  border-radius: 1rem;
  opacity: 0.5;
}
h2 {
  color: rgb(255, 169, 65);
  font-size: 4.6rem;
}

.animate-charcter {
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 4s linear infinite;
  display: inline-block;
  font-size: 7.8rem;
  background-image: v-bind("themeStore.heroBgColor()");
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

.typewriter {
  font-size: 4rem;
  font-weight: bold;
  width: 35rem;
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.4rem solid rgb(255, 169, 65);
  color: rgb(255, 185, 100);

  /* you need to change in the Interval ft if you change in text time*/
  animation: cursor 10s step-start infinite,
    text 3s steps(40) alternate infinite;
}

@keyframes cursor {
  0%,
  100% {
    border-color: rgb(255, 169, 65);
  }
}

@keyframes text {
  0% {
    width: 0;
  }
  100% {
    width: 35rem;
  }
}

.previewBtn {
  font-size: 1.68rem;
  font-weight: 600;
  width: fit-content;
  border-radius: 2rem;
  padding: 0.8rem 2.2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 1rem;
  transition: all 0.2s;
  color: v-bind("themeStore.previewColor()");
  background-color: v-bind("themeStore.previewBgColor()");
}

.previewBtn:hover {
  transform: scale(1.03);
  background-color: v-bind("themeStore.previewHoverBgColor()") !important;
}

.previewBtn:active {
  transform: scale(1);
}

.star {
  font-size: 2.2rem;
  padding: 0.4rem;
  border-radius: 50%;
  background-color: rgb(255, 169, 65);
  color: #fff;
}
.hidden {
  opacity: 0;
  filter: blur(6px);
  transform: translateX(-100%);
  transition: all 0.5s;
}
.show {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
}

@media screen and (max-width: 950px) {
  section {
    flex-direction: column;
    height: 110vh;
  }
  .textBox {
    gap: 1.6rem;
  }
}
</style>
