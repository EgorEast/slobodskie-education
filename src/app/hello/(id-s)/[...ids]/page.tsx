import { type NextPage } from 'next'

interface Props {
  params: { ids: number[] }
}

const IndexedHello: NextPage<Props> = ({ params: { ids } }) => {
  console.log('id: ', ids)
  return <div>IndexedHello. ID-s: {ids}</div>
}

export default IndexedHello
