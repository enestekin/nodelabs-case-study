import Navbar from "@/components/dashboard/Navbar";
import Summary from "@/components/dashboard/Summary";
import WorkingCapitalChart from "@/components/dashboard/WorkingCapitalChart";
import RecentTransaction from "@/components/dashboard/RecentTransaction";
import Wallet from "@/components/dashboard/Wallet";

export default function DashboardPage() {
  return (
    <main className="w-full flex flex-col">
      <Navbar />
      <div className="flex gap-[39px]">
        <div className="flex flex-col gap-[30px] w-full">
          <Summary />
          <WorkingCapitalChart />
          <RecentTransaction />
        </div>
        <Wallet />
      </div>
    </main>
  );
}
