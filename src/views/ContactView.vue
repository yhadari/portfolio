<script setup>
import { useThemeStore } from "../stores/Theme";
import { onMounted } from "vue";
import Card from "../components/Card.vue";
import Title from "../components/Title.vue";
import Input from "../components/Input.vue";
import Label from "../components/Label.vue";
import Button from "../components/Button.vue";
import Textarea from "../components/Textarea.vue";

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
      <Card class="cr parentCard" :bgColor="themeStore.parentBgColor()">
        <div class="container">
          <Title
            fontSize="3.4rem"
            :color="themeStore.contactColor()"
            text="Contact me"
          />
          <div>
            <p class="title">
              Leave your email and we will get back to you within 24 hours
            </p>
          </div>
          <div class="box">
            <div class="img_box">
              <ion-icon name="mail"></ion-icon>
            </div>
            <div>
              <p class="name">Email</p>
              <p class="text">hadariyassine1@gmail.com</p>
            </div>
          </div>
          <div class="box">
            <div class="img_box">
              <ion-icon name="logo-github"></ion-icon>
            </div>
            <div>
              <p class="name">Github</p>
              <p class="text">yhadari</p>
            </div>
          </div>
          <div class="box">
            <div class="img_box">
              <ion-icon name="home"></ion-icon>
            </div>
            <div>
              <p class="name">Address</p>
              <p class="text">Oulad teima - Agadir - Morocco</p>
            </div>
          </div>
          <div class="box">
            <div class="img_box">
              <ion-icon name="time"></ion-icon>
            </div>
            <div>
              <p class="name">Working hours</p>
              <p class="text">8 a.m. - 11 p.m.</p>
            </div>
          </div>
        </div>
        <Card
          class="cr childCard"
          width="30rem"
          height="41.4rem"
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
            <Textarea
              class="textarea"
              rows="6"
              :color="themeStore.inputColor()"
              :bgColor="themeStore.inputBgColor()"
              placeholder="I want to order your goods"
            ></Textarea>
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
  gap: 2.8rem;
}
.cr.childCard {
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.container {
  max-width: 34rem;
  height: 41.4rem;
}
.btn {
  transition: all 0.2s;
}
.btn:hover {
  transform: scale(1.05);
}

.title {
  font-size: 1.6rem;
  font-weight: 400;
  margin-top: 1.6rem;
  color: v-bind("themeStore.contactColor()");
}
.box {
  font-weight: 400;
  color: v-bind("themeStore.contactColor()");
  display: flex;
  gap: 1.8rem;
  align-items: center;
  margin-top: 2.4rem;
  font-size: 1.2rem;
}
.img_box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 1rem;
  background-color: v-bind("themeStore.buttonBgColor()");
}
.name {
  margin-bottom: 0.4rem;
}
.text {
  font-weight: bold;
  font-size: 1.4rem;
}
ion-icon {
  color: v-bind("themeStore.buttonColor()");
  width: 2.6rem;
  height: 2.6rem;
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

@media screen and (max-width: 680px) {
  section {
    margin-top: 20rem;
    margin-bottom: 6rem;
  }
  .cr.parentCard {
    width: 42rem;
    flex-direction: column;
    align-items: center;
  }
  .cr.childCard {
    width: 100%;
  }
  .container {
    max-width: 100%;
  }
}
</style>
