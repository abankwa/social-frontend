// @ts-nocheck
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'
import store from '../lib/store/store'



export default function MyApp({ Component, pageProps }: AppProps) {

    const queryClient = new QueryClient();

    // //return <Component {...pageProps} />
    // return (
    //     <Provider store={store}>
    //         <Component {...pageProps} />
    //     </Provider>
    // )


    const getLayout = Component.getLayout || ((page) => page)

    return (
        <Provider store={store}>
            {getLayout(
                <QueryClientProvider client={queryClient}>
                    <Component {...pageProps} />
                    {/*<ReactQueryDevtools initialIsOpen={false} />*/}
                </QueryClientProvider>)}
        </Provider>)

}