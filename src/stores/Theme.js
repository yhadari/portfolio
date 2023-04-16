import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => {
    return {
      light_theme: true,
    };
  },
  actions: {
    changeTheme() {
      this.light_theme = !this.light_theme;
    },
  },
});
