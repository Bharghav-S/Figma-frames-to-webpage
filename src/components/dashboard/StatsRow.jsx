import { BookOpen, RefreshCw, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: BookOpen,
    value: "12",
    label: "Lessons completed",
    box: "bg-emerald-50 text-emerald-500",
  },
  {
    icon: RefreshCw,
    value: "4",
    label: "Topics to revise",
    box: "bg-orange-50 text-orange-500",
  },
  {
    icon: TrendingUp,
    value: "85%",
    label: "Practice accuracy",
    box: "bg-violet-50 text-violet-500",
  },
];

export default function StatsRow() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-2">
      {stats.map(({ icon: Icon, value, label, box }, index) => (
        <div
          key={label}
          className="flex items-center gap-4 rounded-xl border border-slate-100 shadow-sm bg-white p-4 animate-fade-in-up"
          style={{ animationDelay: `${200 + index * 100}ms` }}
        >
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${box}`}>
            <Icon size={22} strokeWidth={1.8} />
          </div>

          <div className="min-w-0">
            <div className="text-[20px] font-semibold text-slate-800 leading-tight">{value}</div>
            <div className="text-xs text-slate-500 mt-0.5 truncate">{label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
