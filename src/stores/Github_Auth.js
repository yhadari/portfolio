import { defineStore } from "pinia";
import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";
// import axios from "axios";

export const useGithubStore = defineStore("github_auth", {
  state: () => {
    return {
      data: null,
      contributionGraph: null,
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

    async getContributions(token, username) {
      const headers = {
        Authorization: `bearer ${token}`,
      };
      const body = {
        query: `query {
            user(login: "${username}") {
              name
              contributionsCollection {
                contributionCalendar {
                  colors
                  totalContributions
                  weeks {
                    contributionDays {
                      color
                      contributionCount
                      date
                      weekday
                    }
                    firstDay
                  }
                }
              }
            }
          }`,
      };
      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        body: JSON.stringify(body),
        headers: headers,
      });
      const { data } = await response.json();
      this.contributionGraph =
        data.user.contributionsCollection.contributionCalendar;
      this.contributionGraph.colors.unshift("#eeeeee");
      console.log(this.contributionGraph);
    },
  },
});
