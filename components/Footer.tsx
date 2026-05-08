export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-3">
        <div>
          <h3 className="font-display text-lg text-midnight">Advelux Journeys</h3>
          <p className="mt-3 text-sm text-slate-600">
            Premium Kashmir travel planning with curated stays, concierge service, and unforgettable experiences.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-midnight">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>hello@adveluxjourneys.com</li>
            <li>+91 00000 00000</li>
            <li>Srinagar, Kashmir</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-midnight">Quick links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Destinations</li>
            <li>Packages</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-100 py-4 text-center text-xs text-slate-500">
        © 2026 Advelux Journeys. All rights reserved.
      </div>
    </footer>
  );
}
