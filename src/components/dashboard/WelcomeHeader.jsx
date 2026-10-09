import { Flame } from "lucide-react";

export default function WelcomeHeader() {
  return (
    <div className="mb-5 flex items-start justify-between animate-fade-in-up">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-[21px] font-semibold text-[#22332C]">
            Welcome back, Dharaneesh AN
          </h1>

          <span className="flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-500">
            <Flame size={14} fill="currentColor" />
            5-day streak
          </span>
        </div>

        <p className="mt-1 text-sm text-slate-400">
          A little progress every day makes a big difference.
        </p>
      </div>
    </div>
  );
}
