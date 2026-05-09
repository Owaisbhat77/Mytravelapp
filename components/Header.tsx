import Link from "next/link";
import Logo from "./Logo";
import { navigation } from "../lib/site-data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
          <div>
            <p className="text-sm font-semibold text-slate-900">Advelux Journeys</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-500">Premium travel</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          {navigation.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
        >
          Plan trip
        </Link>
      </div>
    </header>
  );
}
