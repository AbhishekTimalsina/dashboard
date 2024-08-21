import ProductCard from "./productCard";
import Tabs from "./tabs";

export default function ProductToday() {
  let productCards = [...Array(8)].map((_, i) => <ProductCard key={i} />);

  return (
    <section className="mt-9">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-bold">Products of the day</h3>
        <button className="bg-blue-600  text-white px-3 py-1 rounded h-fit">
          View All Products
        </button>
      </div>

      <div className="mt-6">
        <Tabs />
        <div className="mt-6 text-center">
          <div className="grid grid-cols-4 gap-7">{productCards}</div>
          <button className="border border-blue-600 rounded text-sm text-blue-600 py-2 px-4 mt-6 ">
            Load 8 more
          </button>
        </div>
      </div>
    </section>
  );
}
