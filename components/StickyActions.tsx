"use client";

import Link from "next/link";
import { useState } from "react";

export default function StickyActions() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <button
        onClick={() => setIsVisible(false)}
        className="self-end rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-600 shadow-soft"
        aria-label="Hide contact widget"
      >
        Hide
      </button>
      <div className="water-card p-4">
        <p className="text-xs font-semibold text-slate-900">Quick contact</p>
        <p className="mt-1 text-xs text-slate-500">We reply in under 2 minutes.</p>
        <div className="mt-3 flex flex-col gap-2 text-xs font-semibold text-emerald-600">
          <Link href="/contact">Start chat →</Link>
          <Link href="https://wa.me/916005721569" target="_blank">
            WhatsApp →
          </Link>
        </div>
      </div>
    </div>
  );
}
