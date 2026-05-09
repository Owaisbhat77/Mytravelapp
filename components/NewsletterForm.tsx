export default function NewsletterForm() {
  return (
    <form className="flex flex-col gap-4 rounded-3xl bg-white/10 p-6 md:flex-row">
      <input
        className="flex-1 rounded-full border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-300"
        placeholder="Email address"
        type="email"
      />
      <button
        type="button"
        className="rounded-full bg-emerald-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900"
      >
        Subscribe
      </button>
    </form>
  );
}
