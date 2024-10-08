import ProductTable from "@/components/productTable";
import ProductToday from "@/components/productToday";
import DashboardTop from "@/components/dashboardTop";
import KeywordTable from "@/components/keywordTable";

export default function Home() {
  return (
    <main className="px-6 bg-gray-100 pb-40 xl:px-4 sm:px-3">
      <DashboardTop />
      <ProductToday />
      <ProductTable />
      <KeywordTable />
    </main>
  );
}
