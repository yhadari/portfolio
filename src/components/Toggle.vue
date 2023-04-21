<script setup>
const props = defineProps({
  // fontSize: {
  //   type: String,
  //   default: "1.6rem",
  // },
  bgColor: {
    type: String,
    default: "rgb(255, 255, 255)",
  },
  theme: {
    type: String,
    default: "light",
  },
  // onIcon: {
  //   type: String,
  // },
  // offIcon: {
  //   type: String,
  // },
});
</script>
<template>
  <div>
    <input class="input" type="checkbox" id="switch" />
    <label
      for="switch"
      :class="props.theme"
      :style="{ backgroundColor: props.bgColor }"
      ><span class="codeSlashIcon codeIcon"></span
    ></label>
  </div>
</template>
<style scoped>
input[type="checkbox"] {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 62px;
  height: 30px;
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
  width: 22px;
  height: 22px;
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

input:checked + .light {
  background-color: rgb(182, 182, 182) !important;
}

input:checked + .dark {
  background-color: rgb(30, 30, 30) !important;
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
