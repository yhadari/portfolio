<script setup></script>
<template>
  <section>
    <div class="container">
      <div class="title">
        <h1>Let me introduce myself</h1>
        <div class="toggle">
          <input type="checkbox" id="switch" />
          <label for="switch"
            ><span class="codeSlashIcon codeIcon"></span
          ></label>
          <h2 class="text">Dev view</h2>
        </div>
      </div>
      <div class="code"></div>
    </div>
  </section>
</template>
<style scoped>
section {
  width: 100%;
  height: 100vh;
  background-color: rgb(255, 236, 153);
  padding: 2.6rem;
  letter-spacing: 0.8px;
}
.container {
  width: 84rem;
  height: 100%;
  background-color: rgb(44, 46, 51);
  margin: 0 auto;
  padding: 2.2rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.8rem;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding-bottom: 2.2rem;
  color: #ddd;
  font-size: 1.2rem;
}
.title h1 {
  font-size: 3.2rem;
  color: rgb(252, 196, 25);
}
.code {
  width: 100%;
  height: 100%;
  background-color: rgb(30, 30, 30);
  border-radius: inherit;
}
.toggle {
  display: flex;
  align-items: center;
  gap: 2rem;
}
input[type="checkbox"] {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 70px;
  height: 34px;
  background-color: rgb(232, 89, 12);
  display: block;
  border-radius: 100px;
  position: relative;
  rotate: 180deg;
}

label::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  width: 25px;
  height: 25px;
  background: #fff;
  border-radius: 50%;
  transition: 0.3s;
}

.codeSlashIcon::before,
.codeIcon::after {
  width: 1.8rem;
  height: 1.8rem;
  content: "";
  background-size: cover;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

.codeSlashIcon::before {
  background: url("../assets/codeSlash.svg");
  right: -0.2rem;
}

.codeIcon::after {
  background: url("../assets/code.svg");
  left: 1.8rem;
}

input:checked + label {
  background-color: rgb(30, 30, 30);
}

input:checked + label:after {
  left: calc(63% - 5px);
  transform: translateX(-100%);
  transform: translateY(-50%);
}

label:active:after {
  width: 30px;
}
</style>
