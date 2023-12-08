import { CSSProperties } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
	text: string;
	href: string;
}

const style: CSSProperties = {
	color: "#0070F3",
	textDecoration: "underline",
};

export const ActiveLink = ({ text, href }: Props) => {
	const { asPath } = useRouter();
	return (
		<Link href={href} style={asPath === href ? style : undefined}>
			{text}
		</Link>
	);
};