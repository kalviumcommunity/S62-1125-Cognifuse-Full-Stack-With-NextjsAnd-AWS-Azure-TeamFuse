import RecentActivityType from "@/lib/interfaces/RecentActivityType";
import { Activity } from "lucide-react";

function RecentAcitivityCard({ activity }: { activity: RecentActivityType }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50">
      <div className="p-1.5 bg-slate-100 rounded-full mt-0.5">
        <Activity className="h-3 w-3 text-slate-600" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-slate-900">
          <span className="font-medium">{activity.user}</span> {activity.action}
        </p>
        <p className="text-xs text-slate-500 mt-0.5">{activity.time}</p>
      </div>
    </div>
  );
}

export default RecentAcitivityCard;
