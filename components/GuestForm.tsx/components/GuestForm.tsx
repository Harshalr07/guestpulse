"use client";

const LANGUAGES = ["English", "Kannada", "Hindi", "Telugu", "Tamil", "Malayalam"];

export default function GuestForm() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-xl font-semibold">Add Guest</h2>
      <div className="mt-5 grid gap-4">
        <input className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white" placeholder="Guest name" />
        <input className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white" placeholder="Contact number" />
        <input className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white" placeholder="Address (optional)" />
        <select className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white">
          {LANGUAGES.map((lang) => <option key={lang}>{lang}</option>)}
        </select>
        <button className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 font-semibold text-cyan-200">
          Add Guest
        </button>
      </div>
    </section>
  );
}