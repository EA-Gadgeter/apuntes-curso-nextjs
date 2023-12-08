import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {ReactNode} from "react";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  // return <Component {...pageProps} />

  return getLayout(
    <Component {...pageProps} />
  )
}
