import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import { getTokenFromLocalStorage, saveTokenIntoLocalStorage } from '../localStorage/saveTokenIntoLocalStorage';

const Settings: NextPage = () => {
  const [accessToken, setAccessToken] = useState<string>('');
  const [mask, setMask] = useState<boolean>(true);

  useEffect(() => {
    const token = getTokenFromLocalStorage();
    setAccessToken(token ?? '');
  }, []);

  return (
    <Layout>
      <h1 className="text-xl font-bold pb-1">Settings</h1>
      <p className="text-gray-700">Schema last updated 23 hours ago</p>

      <h2 className="pt-3 pb-1 text-md font-bold">GitHub Access Token</h2>
      <p className="text-gray-700">Save GitHub Access Token into localStorage.</p>

      <div className="flex flex-row">
        <input
          id="GitHub Access Token"
          name="GitHub Access Token"
          type="text"
          required
          className="appearance-none rounded-md relative block w-full px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10"
          placeholder="Access Token"
          value={mask ? accessToken.substring(0, 5) + '*'.repeat(30) : accessToken}
          onChange={(e) => setAccessToken(e.target.value)}
          onBlur={() => setMask(true)}
          onFocus={() => setMask(false)}
        />
        <div className="pl-1">
          <button
            className="px-3 py-1 rounded-lg border border-gray-300 bg-gray-700 text-white font-medium hover:bg-gray-400"
            onClick={(e) => {
              saveTokenIntoLocalStorage(accessToken ?? '');
            }}
          >
            save
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
