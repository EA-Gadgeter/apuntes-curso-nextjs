import Link from "next/link";

import { MainLayout } from "@/Layouts/MainLayout";

export default function PrincingPage() {
	return (
		<MainLayout>
			<h1>Pricing Page</h1>
			<h1>Ir a <Link href="/about">Home</Link></h1>
		</MainLayout>
	);
}
