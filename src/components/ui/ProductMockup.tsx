const tickets = [
  {
    ref: "HD-4821",
    subject: "Refund not received yet",
    channel: "📱 SMS",
    priority: "Urgent",
    priorityClass: "bg-red-100 text-red-700",
    sla: "04:12",
    slaClass: "bg-red-100 text-red-700",
    status: "Open",
    initials: "AM",
    avatarClass: "bg-[#E0A24A] text-[#0F1729]",
  },
  {
    ref: "HD-4820",
    subject: "How do I reset my password?",
    channel: "✉️ Email",
    priority: "Normal",
    priorityClass: "bg-amber-100 text-amber-800",
    sla: "22:40",
    slaClass: "bg-amber-100 text-amber-800",
    status: "Pending",
    initials: "JR",
    avatarClass: "bg-[#0F1729] text-white",
  },
  {
    ref: "HD-4819",
    subject: "Order arrived damaged — photos",
    channel: "💬 WhatsApp",
    priority: "High",
    priorityClass: "bg-orange-100 text-orange-700",
    sla: "11:58",
    slaClass: "bg-green-100 text-green-700",
    status: "Open",
    initials: "SD",
    avatarClass: "bg-[#B97E2C] text-white",
  },
  {
    ref: "HD-4818",
    subject: "Can I upgrade my plan?",
    channel: "💻 Live Chat",
    priority: "Low",
    priorityClass: "bg-gray-100 text-gray-600",
    sla: "47:05",
    slaClass: "bg-green-100 text-green-700",
    status: "New",
    initials: "—",
    avatarClass: "bg-gray-200 text-gray-500",
  },
  {
    ref: "HD-4817",
    subject: "Billing question on invoice #902",
    channel: "📘 Facebook",
    priority: "Normal",
    priorityClass: "bg-amber-100 text-amber-800",
    sla: "08:33",
    slaClass: "bg-amber-100 text-amber-800",
    status: "Open",
    initials: "MK",
    avatarClass: "bg-[#0F1729] text-white",
  },
];

export function ProductMockup() {
  return (
    <div className="relative">
      <div className="bg-white border-2 border-black rounded-2xl shadow-[8px_8px_0_0_#000] overflow-hidden w-[540px]">
        {/* Title bar */}
        <div className="bg-gray-100 border-b-2 border-black px-5 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400 border border-black/20" />
            <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black/20" />
            <div className="w-3 h-3 rounded-full bg-green-400 border border-black/20" />
          </div>
          <div className="flex-1 text-center text-sm font-medium text-gray-500">
            Support Inbox
          </div>
        </div>

        {/* Toolbar / tabs */}
        <div className="flex items-center justify-between px-5 pt-4 pb-3 bg-[#f9fafb]">
          <div className="inline-flex gap-1 bg-[#f3f4f6] rounded-[10px] p-[3px]">
            <div
              className="px-4 py-1.5 rounded-lg text-xs font-semibold text-[#0F1729]"
              style={{ background: "#E0A24A" }}
            >
              Queue
            </div>
            <div className="px-4 py-1.5 rounded-lg text-xs font-medium text-gray-500">
              Kanban
            </div>
            <div className="px-4 py-1.5 rounded-lg text-xs font-medium text-gray-500">
              Dashboard
            </div>
          </div>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#0F1729] text-white">
            18 open
          </span>
        </div>

        {/* Column headers */}
        <div className="px-5 bg-[#f9fafb]">
          <div className="grid grid-cols-[1fr_auto_auto_auto] gap-3 px-3 pb-2 text-[9px] font-semibold text-gray-400 uppercase tracking-wider">
            <div>Ticket</div>
            <div>Priority</div>
            <div>SLA</div>
            <div>Owner</div>
          </div>
        </div>

        {/* Ticket list */}
        <div className="px-5 pb-5 bg-[#f9fafb]">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            {tickets.map((t, i) => (
              <div
                key={t.ref}
                className={`grid grid-cols-[1fr_auto_auto_auto] gap-3 items-center p-3 ${
                  i !== tickets.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-[#B97E2C]">
                      {t.ref}
                    </span>
                    <span className="text-[9px] font-medium text-gray-400">
                      {t.channel}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-gray-700 truncate">
                    {t.subject}
                  </div>
                  <span className="text-[9px] font-medium text-gray-400">
                    {t.status}
                  </span>
                </div>

                <span
                  className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${t.priorityClass}`}
                >
                  {t.priority}
                </span>

                <span
                  className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${t.slaClass}`}
                >
                  {t.sla}
                </span>

                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold border border-black/10 ${t.avatarClass}`}
                >
                  {t.initials}
                </div>
              </div>
            ))}
          </div>

          {/* Footer stat strip */}
          <div className="grid grid-cols-3 gap-2 mt-3">
            <div className="bg-white border border-gray-200 rounded-lg p-2.5 text-center">
              <div className="text-sm font-bold text-[#0F1729]">18</div>
              <div className="text-[9px] text-gray-400">Open</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-2.5 text-center">
              <div className="text-sm font-bold text-red-600">3</div>
              <div className="text-[9px] text-gray-400">Overdue</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-2.5 text-center">
              <div className="text-sm font-bold text-green-600">96%</div>
              <div className="text-[9px] text-gray-400">In SLA</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
