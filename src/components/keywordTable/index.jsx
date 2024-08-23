import Table from "./table";

export default function KeywordTable() {
  return (
    <section className="mt-10">
      <h3 className="font-bold text-3xl sm:text-2xl">
        Top Products by Category
      </h3>

      <Table />

      <div className="text-center mt-8">
        <button className="bg-blue-600 text-white py-2 px-3 rounded text-sm">
          View all categories
        </button>
      </div>
    </section>
  );
}
