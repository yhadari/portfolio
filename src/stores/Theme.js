import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => {
    return {
      theme: localStorage.getItem("theme") || "light",
    };
  },
  actions: {
    changeTheme() {
      console.log(this.theme);
      this.theme = this.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", this.theme);
    },
  },
});
