<script setup>
import { ref } from "vue";
import { useThemeStore } from "../stores/Theme";

const themeStore = useThemeStore();

const shapes = ref([]);

function scaleUp(shape) {
  shape.size *= 2.2;
}

function scaleDown(shape) {
  shape.size /= 2.2;
}

function generateDelay() {
  return Math.floor(Math.random() * 10) / 10;
}

for (let i = 0; i < 260; i++) {
  const shapeType = Math.floor(Math.random() * 3);
  const shapeSize = Math.floor(Math.random() * 8) + 5;
  const x = Math.floor(Math.random() * 96);
  const y = Math.floor(Math.random() * 96);
  const delay = generateDelay();

  let shape;
  switch (shapeType) {
    case 0:
      shape = {
        type: "circle",
        size: shapeSize,
        x,
        y,
        delay,
      };
      break;
    case 1:
      shape = {
        type: "square",
        size: shapeSize,
        x,
        y,
        delay,
      };
      break;
    case 2:
      shape = {
        type: "pentagon",
        size: shapeSize,
        x,
        y,
        delay,
      };
      break;
    default:
      break;
  }

  shapes.value.push(shape);
}
</script>

<template>
  <div
    :class="`${themeStore.theme === 'light' ? 'light-theme' : 'dark-theme'}`"
  >
    <div class="container">
      <div v-for="shape in shapes" :key="shape.type + shape.x + shape.y">
        <div
          :class="`shape ${shape.type}`"
          :style="{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            animationDelay: `${shape.delay}s`,
          }"
          @mouseover="scaleUp(shape)"
          @mouseleave="scaleDown(shape)"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
.light-theme .container {
  background-color: #fff;
}
.dark-theme .container {
  background-color: rgba(0, 0, 0, 0.9);
}
.shape {
  position: absolute;
  opacity: 0.8;
  will-change: transform;
  transition: all 0.3s;
}

.light-theme .circle {
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.7);
}
.dark-theme .circle {
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.7);
}

.light-theme .square {
  background-color: rgba(0, 0, 0, 0.4);
}
.dark-theme .square {
  background-color: rgba(255, 255, 255, 0.4);
}

.light-theme .pentagon {
  border-style: solid;
  border-width: 0 6.25px 10px 6.25px;
  border-color: transparent transparent rgba(0, 0, 0, 0.5) transparent;
}
.dark-theme .pentagon {
  border-style: solid;
  border-width: 0 6.25px 10px 6.25px;
  border-color: transparent transparent rgba(255, 255, 255, 0.5) transparent;
}

@keyframes _circle {
  0% {
    transform: translate3d(0, 0, 0);
  }
  20% {
    transform: translate3d(12px, 12px, -12px);
  }
  40% {
    transform: translate3d(-4px, 4px, 4px);
  }
  60% {
    transform: translate3d(6px, -6px, 6px);
  }
  80% {
    transform: translate3d(-8px, 8px, 8px);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes _square {
  0% {
    transform: translate3d(0, 0, 0);
  }
  20% {
    transform: translate3d(-4px, 4px, 4px);
  }
  40% {
    transform: translate3d(6px, 6px, -6px);
  }
  60% {
    transform: translate3d(-4px, 4px, 4px);
  }
  80% {
    transform: translate3d(4px, -4px, 4px);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes _pentagon {
  0% {
    transform: translate3d(0, 0, 0);
  }
  20% {
    transform: translate3d(4px, -4px, 4px);
  }
  40% {
    transform: translate3d(-4px, 4px, 4px);
  }
  60% {
    transform: translate3d(4px, 4px, -4px);
  }
  80% {
    transform: translate3d(-6px, 6px, 6px);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

.circle,
.square,
.pentagon {
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
.circle {
  animation-name: _circle;
  animation-duration: 4s;
}
.square {
  animation-name: _square;
  animation-duration: 2.6s;
}
.pentagon {
  animation-name: _pentagon;
  animation-duration: 2.6s;
}
</style>
