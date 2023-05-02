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
      return this.theme === "light" ? "rgb(248,249,250)" : "rgb(37,38,43)";
    },
    boxShadow() {
      return this.theme === "light"
        ? "rgb(0, 0, 0, 0.4)"
        : "rgb(166, 166, 166)";
    },

    //Title
    titleColor() {
      return this.theme === "light" ? "rgb(255, 146, 43)" : "rgb(252, 196, 25)";
    },

    //Text
    textColor() {
      return this.theme === "light" ? "#111" : "#eee";
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
      return this.theme === "light" ? "rgb(255, 255, 255)" : "rgb(26,27,30)";
    },

    //Contact
    contactColor() {
      return this.theme === "light"
        ? "rgb(10, 10, 10)"
        : "rgb(255, 255, 255, 0.8)";
    },

    //Input
    labelColor() {
      return this.theme === "light"
        ? "rgb(20, 20, 20)"
        : "rgb(255, 255, 255, 0.8)";
    },
    inputColor() {
      return this.theme === "light" ? "rgb(20, 20, 20)" : "rgb(255, 255, 255)";
    },
    inputBgColor() {
      return this.theme === "light" ? "rgb(255, 255, 255)" : "rgb(44,46,51)";
    },
    inputBorderColor() {
      return this.theme === "light"
        ? "rgb(44,46,51, 0.2)"
        : "rgb(255, 255, 255, 0.1)";
    },
    inputPlaceholderColor() {
      return this.theme === "light"
        ? "rgb(44,46,51, 0.5)"
        : "rgb(255, 255, 255, 0.3)";
    },

    //Button
    buttonColor() {
      return this.theme === "light"
        ? "rgb(255, 255, 255)"
        : "rgb(255, 255, 255)";
    },
    buttonBgColor() {
      return this.theme === "light" ? "rgb(255, 146, 43)" : "rgb(252, 196, 25)";
    },

    //prism editor
    prismColor() {
      return this.theme === "light" ? "rgb(0, 0, 0)" : "rgb(153,215,248)";
    },
    prismBgColor() {
      return this.theme === "light" ? "rgb(246,248,250)" : "rgb(30,30,30)";
    },
  },
});
