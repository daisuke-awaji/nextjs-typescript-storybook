import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Layout from '../components/layout';

const Home: NextPage = () => {
  const router = useRouter();

  const name = router.query || [];

  return (
    <Layout>
      <h1 className="text-xl font-bold pb-1">user webpage {JSON.stringify(name)}</h1>
    </Layout>
  );
};

export default Home;
