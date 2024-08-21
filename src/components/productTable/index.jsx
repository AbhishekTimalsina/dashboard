import FilterComponents from "../FilterComponents";
import Table from "./table";

export default function ProductTable() {
  return (
    <section className="mt-10">
      <h3 className="font-bold text-3xl">Top Products by Category</h3>
      <div>
        <FilterComponents />
        <Table />
      </div>
      <div className="text-center mt-8">
        <button className="bg-blue-600 text-white py-2 px-3 rounded text-sm">
          View all categories
        </button>
      </div>
    </section>
  );
}
