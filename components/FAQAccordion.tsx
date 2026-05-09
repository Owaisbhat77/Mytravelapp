type FaqItem = {
  question: string;
  answer: string;
};

export default function FAQAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.question} className="rounded-3xl bg-white p-6 shadow-soft">
          <summary className="cursor-pointer font-display text-lg text-slate-900">
            {item.question}
          </summary>
          <p className="mt-3 text-sm text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
