"use client";

const LANGUAGES = ["English", "Kannada", "Hindi", "Telugu", "Tamil", "Malayalam"];

export default function EventForm() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-xl font-semibold">Create Event</h2>
      <div className="mt-5 grid gap-4">
        <input className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white" placeholder="Event name" />
        <input className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white" placeholder="Host name" />
        <input className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white" placeholder="Venue" />
        <div className="grid gap-4 sm:grid-cols-2">
          <input className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white" type="date" />
          <input className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white" type="time" />
        </div>
        <select className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white">
          {LANGUAGES.map((lang) => <option key={lang}>{lang}</option>)}
        </select>
        <button className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950">Save Event</button>
      </div>
    </section>
  );
}