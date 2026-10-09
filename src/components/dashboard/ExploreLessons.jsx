import { ArrowRight } from "lucide-react";
import LessonCard from "./LessonCard";

const lessons = [
  {
    image: "/images/dashboard/rational-numbers.png",
    title: "Rational numbers",
    subtitle: "Chapter 1 - 5 lessons",
    status: "completed",
    actionLabel: "Review",
  },
  {
    image: "/images/dashboard/linear-equations.png",
    title: "Linear equations",
    subtitle: "Chapter 6",
    status: "in-progress",
    actionLabel: "Continue",
  },
  {
    image: "/images/dashboard/quadrilaterals.png",
    title: "Understanding quadrilaterals",
    subtitle: "Chapter 7",
    status: "not-started",
    actionLabel: "Start learning",
  },
];

export default function ExploreLessons() {
  return (
    <section className="mt-4 animate-fade-in-up [animation-delay:300ms]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[18px] font-semibold text-slate-800">
          Explore your lessons
        </h2>

        <button className="flex items-center gap-1 text-sm font-medium text-emerald-500 hover:text-emerald-600 transition-colors">
          View all chapters
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="flex mb-4">
        <button className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[#1860F2]">
          Mathematics
        </button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.title} {...lesson} />
        ))}
      </div>
    </section>
  );
}
