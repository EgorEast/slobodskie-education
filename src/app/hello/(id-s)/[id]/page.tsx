import { NextPage } from 'next';

interface Props {
  params: { id: number };
}

const IndexedHello: NextPage<Props> = ({ params: { id } }) => {
  console.log('id: ', id);
  return <div>IndexedHello. ID: {id}</div>;
};

export default IndexedHello;
