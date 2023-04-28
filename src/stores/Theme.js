import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => {
    return {
      theme: localStorage.getItem("theme") || "light",
    };
  },

  actions: {
    //HeroSection
    heroBgColor() {
      return this.theme === "light"
        ? "linear-gradient(-225deg,#212529 0%,#343a40 29%,#495057 67%,#868e96 100%)"
        : "linear-gradient(-225deg,#adb5bd 0%,#ced4da 29%,#dee2e6 67%,#e9ecef 100%)";
    },
    previewBgColor() {
      return this.theme === "light" ? "rgb(255, 216, 168)" : "#000";
    },
    previewColor() {
      return this.theme === "light" ? "#222" : "#fff";
    },
    previewHoverBgColor() {
      return this.theme === "light" ? "rgb(255, 220, 172)" : "rgb(10, 10, 10)";
    },

    //Footer
    footerColor() {
      return this.theme === "light" ? "#777" : "#999";
    },
    footerBgColor() {
      return this.theme === "light" ? "rgb(222, 226, 230)" : "rgb(37, 38, 43)";
    },

    //Card
    bgColor() {
      return this.theme === "light"
        ? "rgb(255, 232, 204)"
        : "rgb(255, 236, 153)";
    },
    parentBgColor() {
      return this.theme === "light" ? "rgb(255, 255, 255)" : "rgb(44, 46, 51)";
    },
    childBgColor() {
      return this.theme === "light" ? "rgb(248, 248, 248)" : "rgb(30, 30, 30)";
    },

    //Title
    titleColor() {
      return this.theme === "light" ? "rgb(255, 146, 43)" : "rgb(252, 196, 25)";
    },

    //Text
    textColor() {
      return this.theme === "light" ? "#333" : "#ddd";
    },

    //Toggle
    toggleColor() {
      return this.theme === "light" ? "rgb(253, 126, 20)" : "rgb(232, 89, 12)";
    },

    //Spinner
    spinnerColor() {
      return this.theme === "light" ? "rgb(255, 146, 43)" : "rgb(252, 196, 25)";
    },
    spinnerBgColor() {
      return this.theme === "light" ? "rgb(255, 255, 255)" : "rgb(20, 20, 20)";
    },

    //Contact
    contactColor() {
      return this.theme === "light" ? "rgb(10, 10, 10)" : "rgb(255, 255, 255)";
    },
  },
});
