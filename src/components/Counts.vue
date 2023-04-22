<script setup></script>
<template>
  <div class="logo">
    <a class="github" href="https://github.com/yhadari" target="_blank">
      <img src="../assets/GitHub-Mark.png" alt="linkden logo" />
    </a>
    <a
      class="linkden"
      href="https://www.linkedin.com/in/yacinehadari/"
      target="_blank"
    >
      <img src="../assets/Linkedin.jpg" alt="linkden logo" />
    </a>
  </div>
</template>
<style scoped>
.logo {
  display: flex;
  gap: 1.6rem;
}
.logo img {
  width: 3.6rem;
  height: 3.6rem;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 50%;
}

.logo img:hover {
  transform: scale(1.1);
}
.logo img:active {
  transform: scale(1);
}
</style>
