// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Octokit, RestEndpointMethodTypes } from '@octokit/rest';
import type { NextApiRequest, NextApiResponse } from 'next';
// import {paginateRest } from '@octokit/plugin-paginate-rest'

// type Data = RestEndpointMethodTypes['pulls']['list']['response']['data'];
export type GetPullsApiResponse = {
  pulls: RestEndpointMethodTypes['pulls']['list']['response']['data'];
  limit: {
    'x-ratelimit-limit': number;
    'x-ratelimit-remaining': number;
  };
};

// const sleep = (msec: number) => new Promise((resolve) => setTimeout(resolve, msec));

export default async function handler(req: NextApiRequest, res: NextApiResponse<GetPullsApiResponse>) {
  // for await (const response of octokit.paginate.iterator(octokit.rest.pulls.list, {
  //   owner: 'Microsoft',
  //   repo: 'TypeScript',
  //   state: 'open',
  //   per_page: 100,
  // })) {
  //   const pulls = response.data;
  //   console.log(pulls[0]);
  //   console.log(pulls.length);
  // }

  const octokit = new Octokit({
    auth: req.headers['x-api-key'],
  });

  const { headers, data } = await octokit.rest.pulls.list({
    // https://github.com/Microsoft/TypeScript
    owner: 'Microsoft',
    repo: 'TypeScript',
    state: 'open',
    // state?: "open" | "closed" | "all" | undefined;
    // head?: string | undefined;
    // base?: string | undefined;
    // sort?: "created" | ... 3 more ... | undefined;
    // direction?: "asc" | ... 1 more ... | undefined;
    per_page: 100,
    // page?: number | undefined;
  });

  // console.dir(JSON.stringify(data, null, 3));
  console.log(headers);

  res.status(200).json({
    pulls: data,
    limit: {
      'x-ratelimit-limit': Number(headers['x-ratelimit-limit']),
      'x-ratelimit-remaining': Number(headers['x-ratelimit-remaining']),
    },
  });
}
