import { Clock3, Play } from "lucide-react";

export default function ContinueLearningCard() {
  return (
    <section className="grid min-h-[195px] md:grid-cols-[1.25fr_0.75fr] overflow-hidden rounded-xl border border-slate-100 shadow-sm bg-[#E8FAF6] animate-fade-in-up [animation-delay:100ms]">
      <div className="p-5 md:p-6 flex flex-col justify-center">
        <p className="text-[11px] uppercase tracking-wider text-slate-600 font-semibold mb-2">
          Continue learning
        </p>

        <h2 className="text-[22px] md:text-[24px] font-semibold text-slate-800 leading-tight">
          Understanding linear equations
        </h2>

        <p className="mt-1.5 text-sm text-slate-500">
          Mathematics · Chapters 2 · Lesson 3
        </p>

        <div className="mt-6 flex items-center justify-between text-sm">
          <span className="text-slate-600 font-medium">Chapter progress</span>
          <span className="font-semibold text-slate-800">60%</span>
        </div>

        <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-emerald-100/50">
          <div className="h-full w-[60%] rounded-full bg-[#1860F2]" />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button className="flex items-center gap-2 rounded-lg bg-[#1860F2] hover:bg-blue-700 transition-colors px-5 py-2.5 text-sm font-medium text-white shadow-sm">
            <Play size={18} fill="currentColor" />
            Resume progress
          </button>

          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <Clock3 size={18} />
            12 min remaining
          </div>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center p-4 relative">
        {/* We use a placeholder div or an image here */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#E8FAF6] z-10 pointer-events-none w-16" />
        <img
          src="/images/dashboard/linear-equations-hero.png"
          alt="Linear equations illustration"
          className="max-h-[180px] w-full object-contain"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>
    </section>
  );
}
