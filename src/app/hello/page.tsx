import { NextPage } from 'next';
import Hello from 'pages/hello-page';

// export const runtime = 'edge';

export const metadata = {
  title: 'Hello',
  description: 'Hello world',
};

interface Props {}

const HelloPage: NextPage<Props> = () => <Hello />;

export default HelloPage;
