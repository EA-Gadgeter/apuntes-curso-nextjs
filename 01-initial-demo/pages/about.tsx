import {ReactNode} from "react";

import Link from "next/link";

import {MainLayout} from "@/Layouts/MainLayout";
import {GreyLayout} from "@/Layouts/GreyLayout";

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <h1>Ir al <Link href="/">Home</Link></h1>
    </>
  )
}

AboutPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      <GreyLayout>
        {page}
      </GreyLayout>
    </MainLayout>
  );
}
