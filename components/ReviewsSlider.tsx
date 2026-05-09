"use client";

import { useState } from "react";

type Testimonial = {
  name: string;
  trip: string;
  quote: string;
};

export default function ReviewsSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const goNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const goPrev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="rounded-3xl bg-white/10 p-8">
      <p className="text-lg text-slate-100">“{current.quote}”</p>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold">{current.name}</p>
          <p className="text-xs text-emerald-200">{current.trip}</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={goPrev}
            className="rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white"
          >
            Prev
          </button>
          <button
            onClick={goNext}
            className="rounded-full bg-emerald-400 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-900"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
