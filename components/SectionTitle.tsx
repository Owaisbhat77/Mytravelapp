interface SectionTitleProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionTitle({ eyebrow, title, subtitle, light }: SectionTitleProps) {
  return (
    <div>
      <p
        className={`text-xs uppercase tracking-[0.35em] ${
          light ? "text-emerald-200" : "text-emerald-500"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-display text-3xl md:text-4xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {subtitle ? <p className={`mt-4 text-sm ${light ? "text-slate-200" : "text-slate-600"}`}>{subtitle}</p> : null}
    </div>
  );
}
