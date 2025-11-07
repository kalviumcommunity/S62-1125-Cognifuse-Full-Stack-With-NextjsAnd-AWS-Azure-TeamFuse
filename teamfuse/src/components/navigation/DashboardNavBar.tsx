import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, Settings } from "lucide-react";
function DashboardNavBar() {
  return (
    <nav className="bg-white border-b border-slate-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold text-slate-900">TeamFuse</h1>
          <div className="flex gap-6">
            <button className="text-blue-600 font-medium">Dashboard</button>
            <button className="text-slate-600 hover:text-slate-900">
              Projects
            </button>
            <button className="text-slate-600 hover:text-slate-900">
              Insights
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
}

export default DashboardNavBar;
