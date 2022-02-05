import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Layout from '../components/layout';
import { ProgressBar } from '../components/ProgressBar';
import Table from '../components/Table';
import { GetPullsApiResponse } from './api/pulls';
import { getTokenFromLocalStorage } from '../localStorage/saveTokenIntoLocalStorage';

const Overview: NextPage = () => {
  const [percent, setPercent] = useState<number>();

  // @ts-ignore
  const fetcher = (url) =>
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': getTokenFromLocalStorage() ?? '',
      },
    }).then((r) => r.json());
  const { data, error } = useSWR<GetPullsApiResponse>('/api/pulls', fetcher);

  useEffect(() => {
    if (data) {
      const cal = (100 * data.limit['x-ratelimit-remaining']) / data.limit['x-ratelimit-limit'];
      setPercent(cal);
    }
  }, [percent, data]);

  if (error) {
    return (
      <Layout>
        <div>failed to load</div>
      </Layout>
    );
  }

  if (!data) {
    return (
      <Layout>
        <h1 className="text-xl font-bold pb-1">Pull Requests</h1>
        <p className="text-gray-700">Schema last updated 23 hours ago</p>
        <div className="mb-2">
          <ProgressBar name="API Rate Limit Remaining" percent={percent} />
        </div>

        <div className="animate-pulse h-full bg-gray-50"></div>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1 className="text-xl font-bold pb-1">Pull Requests</h1>
      <p className="text-gray-700">Schema last updated 23 hours ago</p>

      <div className="mb-2">
        <ProgressBar name="API Rate Limit Remaining" percent={percent} />
      </div>
      {/* <div className="text-xl font-bold pb-1"></div> */}

      <div className="overflow-x-auto">
        <Table pulls={data.pulls} />
      </div>
    </Layout>
  );
};

export default Overview;
