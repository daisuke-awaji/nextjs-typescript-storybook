import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Layout from '../components/layout';

const Settings: NextPage = () => {
  const router = useRouter();

  const name = router.query || [];

  return (
    <Layout>
      <h1 className="text-xl font-bold pb-1">settings webpage {JSON.stringify(name)}</h1>
    </Layout>
  );
};

export default Settings;
