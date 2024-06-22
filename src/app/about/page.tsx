import { Footer } from "@/components/Footer";
import Links from "@/components/Links";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>about page</div>
      <Links></Links>
      <Footer />
    </main>
  );
}
