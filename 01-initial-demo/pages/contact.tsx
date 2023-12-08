import Link from "next/link";

import {MainLayout} from "@/Layouts/MainLayout";

export default function ContactPage() {
	return (
		<MainLayout>
			<h1>Contact Page</h1>

			<h1>Ir a <Link href="/">Home</Link></h1>
		</MainLayout>
	)
}
