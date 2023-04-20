import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => {
    return {
      theme: localStorage.getItem("theme") || "light",
    };
  },
});
