import { Sparkles } from "lucide-react";

export default function AiTutorCard() {
  return (
    <section className="rounded-xl bg-[#F4ECFB] p-5 shadow-sm border border-purple-100 animate-fade-in-up [animation-delay:350ms]">
      <div className="flex items-center gap-2">
        <Sparkles size={18} className="text-purple-600" />
        <h2 className="text-[15px] font-semibold text-slate-800">
          Need a little help ?
        </h2>
      </div>

      <p className="mt-2 text-[13px] leading-relaxed text-slate-500 max-w-[180px]">
        Get a hint or understand a tricky step
      </p>

      <div className="mt-4 flex items-end justify-between gap-3">
        <button className="rounded-lg bg-[#F21882] hover:bg-pink-600 transition-colors px-5 py-2.5 text-sm font-medium text-white shadow-sm w-[130px]">
          Ask AI tutor
        </button>

        <div className="relative h-16 w-16">
          <img
            src="/images/dashboard/ai-tutor.png"
            alt="AI Tutor"
            className="absolute bottom-0 right-0 h-16 w-16 object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>
    </section>
  );
}
