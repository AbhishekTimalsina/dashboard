import ProductCard from "./productCard";
import Tabs from "./tabs";

export default function ProductToday() {
  let productCards = [...Array(8)].map((_, i) => <ProductCard key={i} />);

  return (
    <section className="mt-9">
      <div className="flex justify-between items-center gap-2">
        <h3 className="text-3xl font-bold sm:text-2xl">Products of the day</h3>
        <button className="bg-blue-600 text-white px-3 py-1 rounded h-fit sm:text-sm sm:px-1 sm:py-[1px]">
          View All Products
        </button>
      </div>

      <div className="mt-6">
        <Tabs />
        <div className="mt-6">
          <div className="grid gap-7 grid-cols-4 xl:gap-4 lg:grid-cols-3 md:grid-cols-2">
            {productCards}
          </div>
          <div className="text-center mt-6">
            <button className="border border-blue-600 rounded text-sm text-blue-600 py-2 px-4 ">
              Load 8 more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
