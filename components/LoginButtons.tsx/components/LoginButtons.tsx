"use client";
import { loginWithGoogle, logout } from "../lib/auth";

export default function LoginButtons() {
  return (
    <div className="flex gap-3">
      <button onClick={loginWithGoogle} className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950">
        Sign in with Google
      </button>
      <button onClick={logout} className="rounded-xl border border-white/15 px-5 py-3 font-semibold text-white">
        Sign out
      </button>
    </div>
  );
}