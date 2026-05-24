export default function DashboardStats() {
  const stats = [
    { label: "Events", value: "0" },
    { label: "Guests", value: "0" },
    { label: "Coming", value: "0" },
    { label: "Not coming", value: "0" }
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-slate-400">{stat.label}</p>
          <p className="mt-2 text-3xl font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}