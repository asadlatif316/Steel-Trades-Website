import { site } from "@/lib/site";

const links = [
  { href: "#supply", label: "What we supply" },
  { href: "#how-we-work", label: "How we work" },
  { href: "#process", label: "How to order" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-quench text-white">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-6">
        <a href="#top" className="flex items-center gap-3" aria-label={`${site.name}, back to top`}>
          <span className="flex h-9 w-9 items-center justify-center border border-brass font-display text-lg font-bold text-brass">
            AS
          </span>
          <span className="font-display text-xl font-semibold tracking-wide">
            {site.name}
          </span>
        </a>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-white/80">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-brass">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#contact"
          className="rounded-sm bg-brass px-4 py-2 text-sm font-semibold text-quench transition-colors hover:bg-[#d3ab52]"
        >
          Request a quote
        </a>
      </div>
    </header>
  );
}
