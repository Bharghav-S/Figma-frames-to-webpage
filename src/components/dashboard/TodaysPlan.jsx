import { Check, Circle, ArrowRight } from "lucide-react";

const tasks = [
  {
    title: "Read : Rational numbers",
    meta: "Chapter 1 · 10 min",
    state: "completed",
  },
  {
    title: "Learn : Linear equations",
    meta: "Chapter 2 · 12 min",
    state: "progress",
  },
  {
    title: "Practise : 10 questions",
    meta: "Chapter 2 · 15 min",
    state: "pending",
  },
];

export default function TodaysPlan() {
  return (
    <section className="pt-2 bg-white rounded-xl border border-slate-100 p-5 shadow-sm animate-fade-in-up [animation-delay:150ms]">
      <h2 className="text-[18px] font-semibold text-slate-800">Today’s plan</h2>
      <p className="mt-1 text-xs text-slate-500">1 of 3 tasks completed</p>

      <div className="mt-5 space-y-4">
        {tasks.map((task) => (
          <div key={task.title} className="flex gap-3">
            <div className="shrink-0 mt-0.5">
              {task.state === "completed" ? (
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <Check size={14} strokeWidth={3} />
                </div>
              ) : task.state === "progress" ? (
                <div className="flex h-5 w-5 items-center justify-center rounded-full border-[2px] border-[#1860F2]">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#1860F2]" />
                </div>
              ) : (
                <Circle size={20} className="text-slate-200 fill-slate-50" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-medium text-slate-700 truncate">{task.title}</div>
              <div className="mt-0.5 text-[11px] text-slate-400">{task.meta}</div>
            </div>

            <div className="shrink-0">
              {task.state === "completed" && (
                <span className="inline-block rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-600">
                  Completed
                </span>
              )}

              {task.state === "progress" && (
                <span className="inline-block rounded-full bg-orange-50 px-2 py-1 text-[10px] font-medium text-orange-600">
                  In progress
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-end">
        <button className="flex items-center gap-1.5 text-sm font-medium text-emerald-500 hover:text-emerald-600 transition-colors">
          View study plan
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
