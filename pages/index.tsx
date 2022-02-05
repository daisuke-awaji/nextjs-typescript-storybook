import type { NextPage } from 'next';
import BasicChart from '../components/BasicChart';
import Layout from '../components/layout';
import { AiFillPieChart, AiOutlineAreaChart, AiOutlineBarChart } from 'react-icons/ai';

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-xl font-bold pb-1">Home</h1>
      <p className="text-gray-700">Schema last updated 23 hours ago</p>

      <div className="flex flex-col mb-5 lg:mb-3 lg:flex-row h-full">
        <div className="w-full lg:w-11/12 lg:pr-4 h-full">
          <div className="border rounded-md h-full p-1">
            <div className="resize border rounded-md overflow-auto m-1">
              <BasicChart />
            </div>
            <div className="resize border rounded-md overflow-auto m-1">
              <BasicChart />
            </div>
            <div className="resize border rounded-md overflow-auto m-1">
              <BasicChart />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/12 lg:pt-7 h-full hidden lg:block">
          <div className=" rounded-md h-full p-1">
            <div className="p-1 hover:bg-gray-100 cursor-pointer hover:border rounded-lg">
              <span className="text-5xl content-center grid justify-center">
                <AiFillPieChart />
              </span>
              <span className="content-center grid justify-center text-gray-600">Pie chart</span>
            </div>
            <div className="p-1 hover:bg-gray-100 cursor-pointer hover:border rounded-lg">
              <span className="text-5xl content-center grid justify-center">
                <AiOutlineAreaChart />
              </span>
              <span className="content-center grid justify-center text-gray-600">Funnel</span>
            </div>
            <div className="p-1 hover:bg-gray-100 cursor-pointer hover:border rounded-lg">
              <span className="text-5xl content-center grid justify-center">
                <AiOutlineBarChart />
              </span>
              <span className="content-center grid justify-center text-gray-600">Timeseries</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
