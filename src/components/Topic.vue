<script setup>
const props = defineProps({
  topic: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <p :class="props.topic">{{ props.topic.toLocaleUpperCase() }}</p>
</template>
<style scoped>
p {
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.2rem 0.8rem;
  border-radius: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
}

.javascript {
  color: #000;
  background-color: rgb(247, 224, 29);
}
.typescript {
  color: #fff;
  background-color: rgb(0, 122, 204);
}
.vuejs {
  color: #fff;
  background-color: rgb(65, 184, 131);
}
.react {
  color: #fff;
  background-color: rgb(122, 120, 255);
}
.nextjs {
  color: #fff;
  background-color: rgb(0, 0, 0);
}
.html {
  color: #fff;
  background-color: rgb(227, 76, 38);
}
.css {
  color: #fff;
  background-color: rgb(21, 114, 182);
}
.docker {
  color: #fff;
  background-color: rgb(13, 64, 133);
}
.expressjs {
  color: #fff;
  background-color: rgb(0, 0, 0);
}
.c {
  color: #fff;
  background-color: rgb(0, 0, 0);
}
.cpp {
  color: #fff;
  background-color: rgb(0, 0, 0);
}
</style>
