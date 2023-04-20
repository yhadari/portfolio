<script setup>
import { ref } from "vue";
import { useThemeStore } from "../stores/Theme";
const themeStore = useThemeStore();

// Define an array of texts for the typewriter effect
const texts = ["Software Engineer", "Web Developer"];
let currentIndex = ref(0); // Initialize index for current text
// Function to update the current text index
const updateText = () => {
  currentIndex.value++;
};
// Computed property to get the current text for the typewriter effect
const currentText = () => {
  return texts[currentIndex.value % texts.length];
};

// i want to update the current text index every 2 seconds
setInterval(updateText, 6000);
</script>

<template>
  <section
    :class="`${themeStore.theme === 'light' ? 'light-theme' : 'dark-theme'}`"
  >
    <h2>Hello, I'm</h2>
    <h3 class="animate-charcter">Yacine Hadari</h3>
    <div class="typewriter">{{ currentText() }}</div>
    <div class="preview">
      <p>Preview on Github</p>
      <ion-icon name="star" class="star"></ion-icon>
    </div>
  </section>
</template>
<style scoped>
section {
  width: 50%;
  height: calc(100vh - var(--navHeight));
  margin: 0 auto;
  margin-top: var(--navHeight);
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  /* border: 1px solid red; */
}
h2 {
  color: rgb(255, 169, 65);
  font-size: 4.6rem;
}

.light-theme .animate-charcter {
  background-image: linear-gradient(
    -225deg,
    #212529 0%,
    #343a40 29%,
    #495057 67%,
    #868e96 100%
  );
}

.dark-theme .animate-charcter {
  background-image: linear-gradient(
    -225deg,
    #adb5bd 0%,
    #ced4da 29%,
    #dee2e6 67%,
    #e9ecef 100%
  );
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
  font-size: 9rem;
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
  border-right: 0.8rem solid rgb(255, 169, 65);
  animation: cursor 10s step-start infinite,
    text 3s steps(40) alternate infinite;
  color: rgb(255, 185, 100);
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

.light-theme .preview {
  font-size: 1.8rem;
  font-weight: 600;
  background-color: rgb(255, 216, 168);
  width: fit-content;
  border-radius: 2rem;
  color: #222;
  padding: 0.8rem 2.2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 1rem;
  transition: all 0.2s ease-in-out;
}
.light-theme .preview:hover {
  transform: scale(1.05);
  background-color: rgb(255, 226, 190);
}

.light-theme .star {
  font-size: 2.2rem;
  padding: 0.4rem;
  border-radius: 50%;
  color: rgb(255, 169, 65);
  background-color: #fff;
}
.dark-theme .preview {
  font-size: 1.8rem;
  font-weight: 600;
  background-color: #000;
  width: fit-content;
  border-radius: 2rem;
  color: #fff;
  padding: 0.8rem 2.2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 1rem;
  transition: all 0.3s ease-in-out;
}
.dark-theme .preview:hover {
  transform: scale(1.05);
  background-color: #111;
}

.dark-theme .star {
  font-size: 2.2rem;
  padding: 0.4rem;
  border-radius: 50%;
  background-color: rgb(255, 169, 65);
  color: #fff;
}
</style>
