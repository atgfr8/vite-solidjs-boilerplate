import { Link } from '@solidjs/router';

const Home = () => {
  return (
    <div>
      <h1> This is a typescript component </h1>
      <Link href="/offices">Offices</Link>
    </div>
  );
};

export default Home;
