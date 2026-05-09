import SectionTitle from "../../components/SectionTitle";
import { teamMembers } from "../../lib/site-data";

export default function TeamPage() {
  return (
    <section className="section-spacing bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Our team"
          title="Destination experts, concierge leads, and luxury travel planners."
          subtitle="We are local to Kashmir with global hospitality standards."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="rounded-3xl bg-white p-8 shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">{member.role}</p>
              <h3 className="mt-4 font-display text-2xl text-slate-900">{member.name}</h3>
              <p className="mt-3 text-sm text-slate-600">{member.bio}</p>
              <p className="mt-4 text-xs text-slate-500">Speciality: {member.speciality}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
