"use client";

export default function FilterComponents({ selectInput, setSelectInput }) {
  function handleChange(e) {
    let { name, value } = e.target;
    setSelectInput((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  return (
    <div className="flex gap-4 mt-3 md:gap-1 flex-wrap">
      <select
        className="w-fit p-1 pr-8 border border-zinc-300 rounded md:text-base md:pr-1 sm:text-sm"
        value={selectInput.platform}
        onChange={handleChange}
        name="platform"
      >
        <option value="all">All platforms</option>
        <option value="tiktok">Tiktok</option>
        <option value="facebook">Facebook</option>
      </select>
      <select
        className="w-fit p-1 pr-8 border border-zinc-300 rounded md:text-base sm:text-sm"
        value={selectInput.region}
        onChange={handleChange}
        name="region"
      >
        <option value="all">All Regions</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="america">America</option>
      </select>
      <select className="w-fit p-1 pr-8 border border-zinc-300 rounded md:text-base sm:text-sm">
        <option>Product Categories</option>
        <option>Facebook</option>
      </select>
      <select className="w-fit p-1 pr-8 border border-zinc-300 rounded md:text-base sm:text-sm">
        <option>Last 7 days</option>
        <option>Facebook</option>
      </select>
    </div>
  );
}
