import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();
  console.log(JSON.stringify(router))
  //return <Component {...pageProps} />
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}
export default MyApp
