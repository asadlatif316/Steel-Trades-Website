import { site } from "@/lib/site";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16">
      <h1 className="font-display text-4xl font-bold">{site.name}</h1>
      <p className="mt-2 text-ink-muted">Home page. Sections will be added one by one.</p>
    </main>
  );
}
