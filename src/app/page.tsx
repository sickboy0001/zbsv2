import { Footer } from "@/components/Footer";
import Links from "@/components/Links";
import Image from "next/image";
// https://qiita.com/naoyuki2/items/62f9beccbfe36eaf7f90
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>about page</div>
      <Links></Links>
      <Footer />
    </main>
  );
}
