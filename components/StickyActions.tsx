import Link from "next/link";

export default function StickyActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Link
        href="https://wa.me/916005721569"
        className="flex items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 shadow-soft"
        target="_blank"
      >
        WhatsApp
      </Link>
      <div className="rounded-3xl bg-white p-4 shadow-soft">
        <p className="text-xs font-semibold text-slate-900">Live chat</p>
        <p className="mt-1 text-xs text-slate-500">We reply in under 2 minutes.</p>
        <Link href="/contact" className="mt-3 inline-flex text-xs font-semibold text-emerald-600">
          Start chat →
        </Link>
      </div>
    </div>
  );
}
