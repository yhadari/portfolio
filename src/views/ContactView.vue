<script setup>
import { useThemeStore } from "../stores/Theme";
import { onMounted } from "vue";
import Card from "../components/Card.vue";
import Title from "../components/Title.vue";
import Input from "../components/Input.vue";
import Label from "../components/Label.vue";
import Button from "../components/Button.vue";

const themeStore = useThemeStore();

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
});
</script>
<template>
  <section>
    <div class="hidden">
      <Card
        class="cr parentCard"
        width="72rem"
        height="44rem"
        :bgColor="themeStore.parentBgColor()"
      >
        <div>
          <Title
            fontSize="3.4rem"
            :color="themeStore.contactColor()"
            text="Contact me"
          />
          <div>
            <!-- <p>Leave your email and we will get back to you within 24 hours</p> -->
          </div>
        </div>
        <Card
          class="cr childCard"
          width="46%"
          :bgColor="themeStore.childBgColor()"
          :shadow="false"
        >
          <div>
            <Label class="label" :color="themeStore.labelColor()">Email</Label>
            <Input
              class="input"
              :color="themeStore.inputColor()"
              :bgColor="themeStore.inputBgColor()"
              height="3.6rem"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <Label class="label" :color="themeStore.labelColor()">Name</Label>
            <Input
              class="input"
              :color="themeStore.inputColor()"
              :bgColor="themeStore.inputBgColor()"
              height="3.6rem"
              placeholder="John Doe"
            />
          </div>
          <div>
            <Label class="label" :color="themeStore.labelColor()"
              >Your message</Label
            >
            <Input
              class="input"
              :color="themeStore.inputColor()"
              :bgColor="themeStore.inputBgColor()"
              height="12rem"
              placeholder="I want to order your goods"
            />
          </div>
          <Button
            class="btn"
            position="right"
            :bgColor="themeStore.buttonBgColor()"
            :color="themeStore.buttonColor()"
            width="50%"
            height="3.6rem"
            >Send message</Button
          >
        </Card>
      </Card>
    </div>
  </section>
</template>
<style scoped>
section {
  width: 100%;
  height: 100vh;
  min-height: 74rem;
  letter-spacing: 0.8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: bold;
  color: #333;
}
.cr.parentCard {
  padding: 2.6rem;
  border-radius: 1rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.cr.childCard {
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hidden {
  opacity: 0;
  filter: blur(6px);
  transform: translateX(-100%);
  transition: all 0.8s;
}
.show {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
}

.input {
  margin-top: 0.3rem;
}
.btn {
  transition: all 0.2s;
}
.btn:hover {
  transform: scale(1.05);
}
</style>
