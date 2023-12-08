import { Inter } from 'next/font/google'

import { ActiveLink } from "@/components/ActiveLink";

import styles from "./Navbar.module.css";

const inter = Inter({ subsets: ['latin'] });

const menuItems = [
	{
		text: 'Home',
		href: '/'
	},
	{
		text: 'About',
		href: '/about'
	},
	{
		text: 'Contact',
		href: '/contact'
	},
	{
		text: 'Pricing',
		href: '/pricing'
	},
];

export const Navbar = () => {
	return (
		<nav className={`${styles.navbar} ${inter.className}`}>
			{/*Apartir de Next 13, SI SE PUEDE estilizar link por style*/}

			{
				menuItems.map(item => (
					<ActiveLink key={item.href} href={item.href} text={item.text}/>
				))
			}
		</nav>
	);
};