import Sidebar from "@/components/dashboard/Siderbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
