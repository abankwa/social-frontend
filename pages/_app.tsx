import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'



export default function MyApp({ Component, pageProps }: AppProps) {

    const queryClient = new QueryClient();

    //   //return <Component {...pageProps} />
    //   return (
    //       <Component {...pageProps}/>
    //   )
    // }

    const getLayout = Component.getLayout || ((page) => page)

    return getLayout(
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>)

}