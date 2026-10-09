import DashboardLayout from "../components/layout/DashboardLayout";
import WelcomeHeader from "../components/dashboard/WelcomeHeader";
import ContinueLearningCard from "../components/dashboard/ContinueLearningCard";
import StatsRow from "../components/dashboard/StatsRow";
import ExploreLessons from "../components/dashboard/ExploreLessons";
import RecommendedNext from "../components/dashboard/RecommendedNext";
import TodaysPlan from "../components/dashboard/TodaysPlan";
import LearningProgress from "../components/dashboard/LearningProgress";
import AiTutorCard from "../components/dashboard/AiTutorCard";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <WelcomeHeader />

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_250px]">
        <main className="min-w-0 flex flex-col gap-5">
          <ContinueLearningCard />
          <StatsRow />
          <ExploreLessons />
          <RecommendedNext />
        </main>

        <aside className="space-y-5">
          <TodaysPlan />
          <LearningProgress />
          <AiTutorCard />
        </aside>
      </div>
    </DashboardLayout>
  );
}
