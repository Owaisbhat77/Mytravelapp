interface SectionTitleProps {
  eyebrow: string;
  title: string;
  light?: boolean;
}

export default function SectionTitle({ eyebrow, title, light }: SectionTitleProps) {
  return (
    <div>
      <p
        className={`text-xs uppercase tracking-[0.35em] ${
          light ? "text-aurora" : "text-slate-500"
        }`}
      >
        {eyebrow}
      </p>
      <h2 className={`mt-4 font-display text-3xl md:text-4xl ${light ? "text-white" : "text-midnight"}`}>
        {title}
      </h2>
    </div>
  );
}
