import { ReactNode } from "react";

import type { AppProps } from 'next/app';
import { NextPage } from "next";

import '@/styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode
};

type AppPropsWithLayout =  AppProps & {
  Component: NextPageWithLayout
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <Component {...pageProps} />
  )
}
