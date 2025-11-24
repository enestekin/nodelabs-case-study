import Navbar from "@/components/dashboard/Navbar";
import Summary from "@/components/dashboard/Summary";
import WorkingCapitalChart from "@/components/dashboard/WorkingCapitalChart";
import RecentTransaction from "@/components/dashboard/RecentTransaction";

export default function DashboardPage() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col gap-[30px]">
        <Summary />
        <WorkingCapitalChart />
        <RecentTransaction />
      </div>
    </main>
  );
}
