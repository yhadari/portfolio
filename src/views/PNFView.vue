<template>
  <div class="container">
    <img src="../assets/404.jpg" alt="404 img" />
  </div>
  <router-link class="home" to="/">Home Page</router-link>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Maven+Pro:wght@900&display=swap");

.container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(226, 230, 233);
}
img {
  width: 54%;
  height: auto;
}

.home {
  font-family: "Maven Pro", sans-serif;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  border-radius: 0 1rem 1rem;
  text-decoration: none;
  color: rgb(93, 101, 104);
  font-size: 3.4rem;
  font-weight: bold;
  transition: all 0.2s;
}
.home:hover {
  font-size: 4rem;
}

@media screen and (max-width: 960px) {
  img {
    width: 100%;
    height: auto;
  }
  .home {
    font-size: 2.2rem;
  }
  .home:hover {
    font-size: 3rem;
  }
}
</style>
