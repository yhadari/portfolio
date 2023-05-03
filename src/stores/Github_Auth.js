import { defineStore } from "pinia";
import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";
// import axios from "axios";

export const useGithubStore = defineStore("github_auth", {
  state: () => {
    return {
      data: null,
      contributionGraph: null,
      allCommits: null,
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
               repositories(first: 50) {
                edges {
                  node {
                    defaultBranchRef {
                      target {
                        ... on Commit {
                          history {
                            totalCount
                          }
                        }
                      }
                    }
                  }
                }
              }
              contributionsCollection {
                contributionCalendar {
                  colors
                  totalContributions
                  weeks {
                    contributionDays {
                      color
                    }
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
      this.contributionGraph.colors.unshift("#ebedf0");
      this.allCommits = data.user.repositories.edges.reduce((acc, { node }) => {
        return acc + node.defaultBranchRef.target.history.totalCount;
      }, 0);
      console.log(this.contributionGraph.weeks);
    },
  },
});
