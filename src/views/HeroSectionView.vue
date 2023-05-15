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

const previewClick = (url) => {
  window.open(url, "_blank");
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
  setInterval(updateText, 5000);
});
</script>

<template>
  <section class="hidden">
    <div class="textBox">
      <h2 class="hello">Hello, I'm</h2>
      <h2 class="animate-charcter">Yacine Hadari</h2>
      <div class="typewriter">{{ currentText() }}</div>
      <div class="previewBtn">
        <p @click="previewClick('https://github.com/yhadari/portfolio')">
          Preview on Github
        </p>
        <ion-icon name="star" class="star"></ion-icon>
      </div>
    </div>
    <!-- <div class="avatarBox"></div> -->
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Maven+Pro:wght@900&display=swap");
section {
  width: 100%;
  height: calc(100vh - var(--navHeight));
  min-height: 56rem;
  margin-top: var(--navHeight);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 2rem;
  font-family: "Maven Pro", sans-serif;
}

.textBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
}
.avatarBox {
  width: 40rem;
  height: 48rem;
  background-color: black;
  border-radius: 1rem;
  opacity: 0.5;
}
.hello {
  color: v-bind("themeStore.textColor()");
  font-size: 4rem;
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
  letter-spacing: -5px;
  background-image: linear-gradient(
    -225deg,
    rgb(255, 146, 43, 0.9) 0%,
    rgb(255, 146, 43, 0.9) 29%,
    rgb(252, 196, 25, 0.9) 67%,
    rgb(252, 196, 25, 0.9) 100%
  );
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

.typewriter {
  font-size: 3.2rem;
  font-weight: bold;
  width: 32rem;
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.4rem solid rgb(255, 169, 65);
  color: rgb(255, 185, 100);

  /* you need to change in the Interval ft if you change in text time*/
  animation: cursor 10s step-start infinite,
    text 2.5s steps(40) alternate infinite;
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
    width: 32rem;
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
  color: v-bind("themeStore.previewColor()");
  background-color: v-bind("themeStore.previewBgColor()");
}

.previewBtn:hover {
  transition: all 0.2s;
  transform: scale(1.05);
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
  transition: all 0.6s;
}
.show {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
}

@media screen and (max-width: 1000px) {
  section {
    flex-direction: column;
    height: 110vh;
    gap: 6rem;
    padding-top: 8rem;
  }
}

@media screen and (max-width: 650px) {
  .textBox {
    gap: 2.4rem;
  }
  .hello {
    font-size: 3.4rem;
  }
  .animate-charcter {
    font-size: 5.2rem;
    letter-spacing: -3px;
  }
  .typewriter {
    font-size: 3rem;
  }
  .previewBtn {
    font-size: 1.4rem;
    padding: 0.5rem 1.8rem;
  }
  .avatarBox {
    transform: scale(0.7);
  }

  .typewriter {
    width: 25rem;
  }

  @keyframes text {
    0% {
      width: 0;
    }
    100% {
      width: 25rem;
    }
  }
}
</style>
