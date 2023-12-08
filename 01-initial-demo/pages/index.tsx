import Link from "next/link";

import { MainLayout } from "@/Layouts/MainLayout";

// Para las paginas con el pages router
// el EXPORT DEFAULT es obligatorio
export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
      <h1>Ir a <Link href="/about">About</Link></h1>
    </MainLayout>
  );
}
