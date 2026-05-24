"use client";

const LANGUAGES = ["English", "Kannada", "Hindi", "Telugu", "Tamil", "Malayalam"];

export default function LanguageSelector() {
  return (
    <select className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white">
      {LANGUAGES.map((lang) => <option key={lang}>{lang}</option>)}
    </select>
  );
}