"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { mainNavigation, policyLinks } from "../lib/site-data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/90 backdrop-blur">
      <div className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-2 text-xs text-slate-600">
          <span className="font-semibold uppercase tracking-[0.2em] text-slate-900">Customer Policies</span>
          <div className="flex flex-wrap gap-4">
            {policyLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-slate-900">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
          <div>
            <p className="text-sm font-semibold text-slate-900">Discover Kashmir</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-500">Premium travel studio</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          {mainNavigation.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white md:inline-flex"
          >
            Contact Us
          </Link>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-full border border-slate-200 md:hidden"
            aria-label="Toggle menu"
          >
            <span className="h-0.5 w-5 bg-slate-900" />
            <span className="h-0.5 w-5 bg-slate-900" />
            <span className="h-0.5 w-5 bg-slate-900" />
          </button>
        </div>
      </div>
      {isOpen ? (
        <div className="border-t border-slate-100 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-slate-600">
            {mainNavigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-slate-900"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="font-semibold text-slate-900" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
