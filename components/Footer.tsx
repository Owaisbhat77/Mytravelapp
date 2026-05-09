import Link from "next/link";
import Logo from "./Logo";
import { navigation } from "../lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Logo />
            <div>
              <p className="text-sm font-semibold text-slate-900">Advelux Journeys</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-500">Premium travel studio</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Premium Kashmir travel planning with curated stays, concierge service, and unforgettable experiences.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Navigation</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {navigation.map((link) => (
              <li key={link.href}>{link.label}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>concierge@adveluxjourneys.com</li>
            <li>+91 90123 45678</li>
            <li>Residency Road, Srinagar</li>
            <li>Mon–Sat · 9:00 AM – 8:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-100 py-4 text-center text-xs text-slate-500">
        © 2026 Advelux Journeys. All rights reserved.
      </div>
    </footer>
  );
}
