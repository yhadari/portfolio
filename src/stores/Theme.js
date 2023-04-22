import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => {
    return {
      theme: localStorage.getItem("theme") || "light",
    };
  },

  actions: {
    footerColor() {
      return this.theme === "light" ? "#777" : "#999";
    },
    footerBgColor() {
      return this.theme === "light" ? "rgb(222, 226, 230)" : "rgb(37, 38, 43)";
    },
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

    titleColor() {
      return this.theme === "light" ? "rgb(255, 146, 43)" : "rgb(252, 196, 25)";
    },

    toggleColor() {
      return this.theme === "light" ? "rgb(253, 126, 20)" : "rgb(232, 89, 12)";
    },

    textColor() {
      return this.theme === "light" ? "#333" : "#ddd";
    },
  },
});
