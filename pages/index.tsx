import type { NextPage } from 'next';
import Layout from '../components/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-xl font-bold pb-1">my first webpage</h1>
      <p className="text-gray-700">Schema last updated 23 hours ago</p>

      <div className="flex flex-col mb-5 lg:mb-3 lg:flex-row h-full">
        <div className="w-full lg:w-2/3 lg:pr-4 h-full">
          <div className="border rounded-md h-full">content</div>
        </div>
        <div className="w-full lg:w-1/3 lg:pt-7 h-full">
          <div className="border rounded-md h-full">content</div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
