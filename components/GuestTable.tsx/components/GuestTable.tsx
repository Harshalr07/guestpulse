export default function GuestTable() {
  const guests = [
    { name: "Sample Guest", phone: "+91 90000 00000", status: "Pending", family: "-", reason: "-" }
  ];
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-xl font-semibold">Guest List</h2>
      <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
        <table className="w-full text-left">
          <thead className="bg-slate-900 text-sm text-slate-400">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Family</th>
              <th className="px-4 py-3">Reason</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((g) => (
              <tr key={g.phone} className="border-t border-white/10">
                <td className="px-4 py-3">{g.name}</td>
                <td className="px-4 py-3">{g.phone}</td>
                <td className="px-4 py-3">{g.status}</td>
                <td className="px-4 py-3">{g.family}</td>
                <td className="px-4 py-3">{g.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}