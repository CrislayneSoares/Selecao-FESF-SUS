import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header title="Crislayne Ramos" description="Desenvolvedora Web" />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Home</h1>
      </main>
      <Footer description="Crislayne Ramos" ano={2026} />
    </div>
  );
}
