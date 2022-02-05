import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

it('hello', async () => {
  // Compare: https://docs.github.com/en/rest/reference/repos/#list-organization-repositories
  const { headers, data } = await octokit.rest.pulls.list({
    owner: 'MCDataPlus',
    repo: 'dpp-backend',
    state: 'open',
    // state?: "open" | "closed" | "all" | undefined;
    // head?: string | undefined;
    // base?: string | undefined;
    // sort?: "created" | ... 3 more ... | undefined;
    // direction?: "asc" | ... 1 more ... | undefined;
    // per_page?: number | undefined;
    // page?: number | undefined;
  });

  console.dir(data);

  console.log(headers['x-ratelimit-limit']);
  console.log(headers['x-ratelimit-remaining']);
});
