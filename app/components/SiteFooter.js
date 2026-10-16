import { site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="bg-quench text-white/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-xl font-semibold text-white">{site.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-6">{site.tagline}</p>
        </div>
        <address className="text-sm leading-6 not-italic">
          <p>{site.address}</p>
          <p>{site.phone}</p>
          <p>{site.email}</p>
        </address>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs">
        {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
