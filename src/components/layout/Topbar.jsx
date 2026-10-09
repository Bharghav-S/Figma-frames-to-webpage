import { Bell, ChevronDown, Search, Menu } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-[72px] items-center justify-between gap-3 md:gap-5 border-b border-slate-100 px-4 md:px-8 bg-white">
      <button className="md:hidden text-slate-600">
        <Menu size={24} />
      </button>

      <div className="flex flex-1 items-center gap-3 rounded-full border border-slate-200 px-4 py-2.5 max-w-lg">
        <Search size={18} className="text-slate-400 shrink-0" />
        <input
          type="text"
          placeholder="Search lessons topics or chapters"
          className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400 min-w-0"
        />
      </div>

      <div className="flex items-center gap-2 md:gap-5">
        <button className="hidden md:flex min-w-[145px] items-center justify-between rounded-full border border-slate-200 px-4 py-2.5 text-sm text-slate-700">
          Class 8 - CBSE
          <ChevronDown size={16} />
        </button>

        <button className="relative rounded-full p-2 text-slate-600">
          <Bell size={20} />
          <span className="absolute right-2 top-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
        </button>

        <img
          src="/images/avatars/student-avatar.png"
          alt="Student"
          className="h-9 w-9 rounded-full object-cover bg-slate-200"
        />
      </div>
    </header>
  );
}
