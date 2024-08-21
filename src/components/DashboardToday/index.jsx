import ProductCard from "./productCard";
import Tabs from "./tabs";

export default function DashboardToday() {
  return (
    <section className="mt-9">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-bold">Products of the day</h3>
        <button className="bg-blue-600  text-white px-3 py-1 rounded h-fit">
          View All Products
        </button>
      </div>
      {/* // // // */}
      <div className="mt-5">
        <Tabs />
        <div>
          <ProductCard />
        </div>
      </div>
    </section>
  );
}
