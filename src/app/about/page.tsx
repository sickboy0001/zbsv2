import { Footer } from "@/components/Footer";
import { Headline } from "@/components/Headline";
import { Links } from "@/components/Links";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>about page</div>
      <Headline title="about page" page="about" />
      <Links></Links>
      <Footer />
    </main>
  );
}
