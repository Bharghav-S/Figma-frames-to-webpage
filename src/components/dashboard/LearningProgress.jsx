export default function LearningProgress() {
  return (
    <section className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm animate-fade-in-up [animation-delay:250ms]">
      <h2 className="text-[18px] font-semibold text-slate-800">
        Your learning progress
      </h2>

      <p className="mt-1 text-xs text-slate-500">
        12 of 30 lessons completed
      </p>

      <div className="mt-5 flex h-2.5 overflow-hidden rounded-full bg-slate-100">
        <div className="w-[40%] bg-[#1860F2]" />
        <div className="w-[18%] bg-pink-500" />
        <div className="flex-1 bg-slate-200" />
      </div>

      <div className="mt-5 space-y-3 text-[12px] font-medium">
        <ProgressRow dot="bg-[#1860F2]" label="Completed" value="12" />
        <ProgressRow dot="bg-pink-500" label="In progress" value="5" />
        <ProgressRow dot="bg-slate-300" label="Not started" value="15" />
      </div>
    </section>
  );
}

function ProgressRow({ dot, label, value }) {
  return (
    <div className="flex items-center">
      <span className={`mr-2.5 h-2 w-2 rounded-full ${dot}`} />
      <span className="text-slate-500">{label}</span>
      <span className="ml-auto text-slate-700 font-semibold">{value}</span>
    </div>
  );
}
