import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />

      <div className="ml-0 md:ml-[180px] min-h-screen flex flex-col">
        <Topbar />

        <div className="px-5 pb-8 pt-3 flex-1 overflow-x-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
