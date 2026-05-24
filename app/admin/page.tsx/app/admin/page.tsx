"use client";
import LoginButtons from "../../components/LoginButtons";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">App Host Dashboard</h1>
            <p className="mt-2 text-slate-300">Visible only to harshuforper@gmail.com</p>
          </div>
          <LoginButtons />
        </div>
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">All events overview</h2>
          <p className="mt-2 text-slate-300">
            This area will show every event created, guest counts, RSVP status, and reminder activity.
          </p>
        </div>
      </div>
    </main>
  );
}