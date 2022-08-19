import '../../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'


import {Hydrate, QueryClient, QueryClientProvider} from '@tanstack/react-query'
// import {useState} from "react";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
const queryClient = new QueryClient()

function MyApp({Component, pageProps}) {
   // const [queryClient] = useState(() => new QueryClient())
    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    )
}

export default MyApp
