import Sidebar from "@/components/dashboard/Siderbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <div className="pt-[30px] px-10 pb-[43px]">{children}</div>
      </div>
    </div>
  );
}
