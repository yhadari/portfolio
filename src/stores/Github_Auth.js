import { defineStore } from "pinia";
import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";
// import axios from "axios";

export const useGithubStore = defineStore("github_auth", {
  state: () => {
    return {
      data: null,
    };
  },

  actions: {
    async auth() {
      const octokit = new Octokit({
        auth: import.meta.env.VITE_GITHUB_TOKEN,
      });

      const { data } = await octokit.request("/user");
      this.data = data;
      console.log(data);
    },
  },
});
