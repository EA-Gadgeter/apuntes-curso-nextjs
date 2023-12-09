import { ReactNode, FC } from "react";

import Head from "next/head";
import { Inter } from "next/font/google";

import { Navbar } from "@/components/Navbar";

import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] });

interface Props {
	children: ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
	return (
		<>
			<Head>
				<title>Home - Gadgeter</title>
				<meta name="description" content="Home Page" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />

			<main className={`${styles.main} ${inter.className}`}>
				{children}
			</main>
		</>
	);
};