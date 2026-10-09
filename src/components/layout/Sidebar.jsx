import {
  Home,
  BookOpen,
  ClipboardList,
  CalendarDays,
  TrendingUp,
  Archive,
  CircleHelp,
  Settings,
} from "lucide-react";

const topItems = [
  { label: "Home", icon: Home, active: true },
  { label: "Subjects", icon: BookOpen },
  { label: "Practice & Tests", icon: ClipboardList },
  { label: "Study Plan", icon: CalendarDays },
  { label: "My Progress", icon: TrendingUp },
  { label: "My Library", icon: Archive },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex fixed left-0 top-0 z-20 h-screen w-[180px] flex-col border-r border-slate-200 bg-white px-5 py-5">
      <div className="mb-8 flex items-center gap-2">
        <div className="text-xl font-extrabold text-blue-600">BL</div>
        <span className="text-[11px] font-semibold italic text-pink-600">
          BLAST LEARNING
        </span>
      </div>

      <nav className="space-y-1.5">
        {topItems.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            className={`flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left text-[13px] ${
              active
                ? "text-blue-600"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <Icon size={20} strokeWidth={1.6} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto space-y-1.5">
        <button className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-[13px] text-slate-600 hover:bg-slate-50">
          <CircleHelp size={20} strokeWidth={1.6} />
          Help & Support
        </button>

        <button className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-[13px] text-slate-600 hover:bg-slate-50">
          <Settings size={20} strokeWidth={1.6} />
          Settings
        </button>
      </div>
    </aside>
  );
}
