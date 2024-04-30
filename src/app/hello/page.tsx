import { type NextPage } from 'next'
import Hello from 'pages/hello-page'

// export const runtime = 'edge';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata = {
  title: 'Hello',
  description: 'Hello world',
}

const HelloPage: NextPage<object> = () => <Hello />

export default HelloPage
