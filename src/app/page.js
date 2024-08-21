import DashboardToday from "@/components/DashboardToday";
import DashboardTop from "@/components/dashboardTop";

export default function Home() {
  return (
    <main className="px-6">
      <DashboardTop />
      <DashboardToday />
    </main>
  );
}
