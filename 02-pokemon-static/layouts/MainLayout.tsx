import { FC, ReactNode } from "react";

import Head from "next/head";

import { Navbar } from "@/components/UI/Navbar";

interface Props {
  title: string;
  children: ReactNode
}

export const MainLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Gadgeter - Emiliano Acevedo"/>
        <meta name="description" content={`Información sobre el Pokemon ${title}`}/>
        <meta name="keywords" content={`${title}, pokemon, pokedex`}/>
      </Head>

      <Navbar />

      <main className="px-5 py-2.5">
        {children}
      </main>
    </>
  );
};