export default function FilterComponents() {
  return (
    <div className="flex gap-4 mt-3">
      <select className="w-fit p-1 pr-8 border border-zinc-300 rounded">
        <option>Tiktok</option>
        <option>Facebook</option>
      </select>
      <select className="w-fit p-1 pr-8 border border-zinc-300 rounded">
        <option>All Regions</option>
        <option>Facebook</option>
      </select>
      <select className="w-fit p-1 pr-8 border border-zinc-300 rounded">
        <option>Product Categories</option>
        <option>Facebook</option>
      </select>
      <select className="w-fit p-1 pr-8 border border-zinc-300 rounded">
        <option>Last 7 days</option>
        <option>Facebook</option>
      </select>
    </div>
  );
}
