import { BookOpen, ClipboardList, ChevronRight } from "lucide-react";

const items = [
  {
    icon: BookOpen,
    title: "Revise negative fractions",
    subtitle: "Strengthen a skill · 8 min",
    action: "Practise",
    actionClass: "bg-[#1860F2] text-white hover:bg-blue-700",
    iconBox: "bg-emerald-50 text-emerald-500",
  },
  {
    icon: ClipboardList,
    title: "Read : Solving equations step by step",
    subtitle: "Prepare for your next lesson · 5 min",
    action: "Read notes",
    actionClass: "bg-slate-100 text-slate-500 hover:bg-slate-200",
    iconBox: "bg-purple-50 text-purple-500",
  },
];

export default function RecommendedNext() {
  return (
    <section className="mt-4 pb-6 animate-fade-in-up [animation-delay:400ms]">
      <h2 className="mb-4 text-[18px] font-semibold text-slate-800">
        Recommended next
      </h2>

      <div className="flex flex-col gap-3">
        {items.map(({ icon: Icon, title, subtitle, action, actionClass, iconBox }) => (
          <div key={title} className="flex flex-wrap sm:flex-nowrap items-center gap-4 rounded-xl border border-slate-100 bg-white p-3 shadow-sm hover:shadow-md transition-shadow">
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${iconBox}`}>
              <Icon size={20} strokeWidth={1.8} />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="truncate text-sm font-semibold text-slate-800">{title}</h3>
              <p className="mt-0.5 text-xs text-slate-500">{subtitle}</p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto mt-2 sm:mt-0">
              <button className={`w-full sm:w-auto rounded-lg px-6 py-2.5 text-sm font-medium transition-colors ${actionClass}`}>
                {action}
              </button>
              <ChevronRight size={20} className="text-slate-400 hidden sm:block" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
