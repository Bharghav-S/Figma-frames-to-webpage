import { CheckCircle2 } from "lucide-react";

const stateStyles = {
  completed: {
    text: "Completed",
    textClass: "text-emerald-500",
    buttonClass: "bg-emerald-50 text-emerald-600 hover:bg-emerald-100",
  },
  "in-progress": {
    text: "In progress",
    textClass: "text-[#1860F2]",
    buttonClass: "bg-[#1860F2] text-white hover:bg-blue-700",
  },
  "not-started": {
    text: "Not started",
    textClass: "text-slate-400",
    buttonClass: "bg-slate-50 text-slate-500 border border-slate-100 hover:bg-slate-100",
  },
};

export default function LessonCard({
  image,
  title,
  subtitle,
  status,
  actionLabel,
}) {
  const styles = stateStyles[status];

  return (
    <article className="flex flex-col rounded-xl border border-slate-100 bg-white p-3 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-28 md:h-[110px] w-full bg-slate-50 rounded-lg overflow-hidden mb-3">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          onError={(e) => {
             e.target.style.display = 'none';
          }}
        />
      </div>

      <h3 className="truncate text-[16px] font-semibold text-slate-800 leading-tight">
        {title}
      </h3>

      <p className="mt-1 text-xs text-slate-500">{subtitle}</p>

      <div className={`mt-2.5 mb-4 flex items-center gap-1.5 text-xs font-medium ${styles.textClass}`}>
        {status === "completed" && <CheckCircle2 size={16} fill="currentColor" className="text-white bg-emerald-500 rounded-full" />}
        {styles.text}
      </div>

      <button
        className={`mt-auto w-full rounded-lg py-2.5 text-sm font-medium transition-colors ${styles.buttonClass}`}
      >
        {actionLabel}
      </button>
    </article>
  );
}
