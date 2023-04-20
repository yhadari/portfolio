<script setup></script>
<template>
  <section>
    <div>
      <h1>Let me introduce myself</h1>
      <div class="toggle">
        <input type="checkbox" id="switch" /><label
          class="codeSlash code"
          for="switch"
          >Toggle</label
        >
      </div>
    </div>
  </section>
</template>
<style scoped>
section {
  width: 100%;
  height: 100vh;
  background-color: rgb(255, 216, 168);
}
input[type="checkbox"] {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 90px;
  height: 45px;
  background: grey;
  display: block;
  border-radius: 100px;
  position: relative;
}

label::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background: #fff;
  border-radius: 50%;
  transition: 0.3s;
}

.codeSlash::before {
  width: 2.2rem;
  height: 2.2rem;
  content: "";
  background: url("../assets/codeSlash.svg");
  background-size: cover;
  position: absolute;
  top: 50%;
  right: 0.2rem;
  transform: translate(-50%, -50%);
}

.code::after {
  width: 2.2rem;
  height: 2.2rem;
  content: "";
  background: url("../assets/code.svg");
  background-size: cover;
  position: absolute;
  top: 50%;
  left: 1.8rem;
  transform: translate(-50%, -50%);
}

input:checked + label {
  background: #bada55;
}

input:checked + label:after {
  left: calc(60%);
  transform: translateX(-100%);
  transform: translateY(-50%);
}

label:active:after {
  width: 40px;
}
</style>
