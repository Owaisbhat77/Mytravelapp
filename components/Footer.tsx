import Link from "next/link";
import Logo from "./Logo";
import { mainNavigation, policyLinks, socialLinks } from "../lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Logo />
            <div>
              <p className="text-sm font-semibold text-slate-900">Advelux Journeys</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-500">Modern travel studio</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Luxury Kashmir travel planning with curated stays, concierge service, and unforgettable experiences.
          </p>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <p>📞 6005721569</p>
            <p>✉️ owaissbhatt7@gmail.com</p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Menu</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {mainNavigation.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-slate-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Customer policies</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {policyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-slate-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="mt-6 text-sm font-semibold text-slate-900">Social</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-slate-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-100 py-4 text-center text-xs text-slate-500">
        © 2026 Advelux Journeys. All rights reserved.
      </div>
    </footer>
  );
}
