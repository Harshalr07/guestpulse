"use client";
import LoginButtons from "../../components/LoginButtons";
import DashboardStats from "../../components/DashboardStats";
import EventForm from "../../components/EventForm";
import GuestForm from "../../components/GuestForm";
import GuestTable from "../../components/GuestTable";

export default function HostPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Event Host Dashboard</h1>
            <p className="mt-2 text-slate-300">Create events, manage guests, and track RSVP status.</p>
          </div>
          <LoginButtons />
        </div>
        <div className="mt-8"><DashboardStats /></div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <EventForm />
          <GuestForm />
        </div>
        <div className="mt-8"><GuestTable /></div>
      </div>
    </main>
  );
}