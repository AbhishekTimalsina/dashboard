import Image from "next/image";

export default function DashboardTop() {
  return (
    <div className="pt-11">
      <h2 className="font-bold text-3xl">Welcome Ketan</h2>
      <div className="flex justify-between items-center">
        <p className="leading-none">See the latest updates here</p>
        <div className="flex gap-2 ">
          <button className="flex items-center border border-blue-600 rounded">
            <span className="text-blue-600 font-sm  border-r border-blue-600 py-1 px-2 ">
              Last 7 days
            </span>
            <div className="px-1">
              <Image src="/img/dropdown.svg" width={22} height={22} />
            </div>
          </button>
          <button className="flex items-center border border-blue-600 rounded">
            <div className="py-1 px-2 flex border-r border-blue-600 gap-2">
              <Image src="/img/calender.svg" width={22} height={22} />
              <span className="text-blue-600 ">Custom Date</span>
            </div>
            <div className="px-1">
              <Image src="/img/dropdown.svg" width={22} height={22} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
