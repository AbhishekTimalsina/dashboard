import Image from "next/image";

export default function DashboardTop() {
  return (
    <div className="pt-11">
      <h2 className="font-bold text-3xl md:text-2xl">Welcome Ketan</h2>
      <div className="flex justify-between items-center sm:flex-col sm:items-baseline sm:gap-2">
        <p className="leading-none ">See the latest updates here</p>
        <div className="flex gap-2 ">
          <button className="flex items-center border border-blue-600 rounded">
            <span className="text-blue-600 border-r border-blue-600 py-1 px-2 lg:text-sm sm:px-1">
              Last 7 days
            </span>
            <div className="px-1">
              <Image
                src="/img/dropdown.svg"
                width={22}
                height={22}
                className="sm:h-4 sm:w-4"
              />
            </div>
          </button>
          <button className="flex items-center border border-blue-600 rounded">
            <div className="py-1 px-2 flex border-r border-blue-600 flex items-center gap-2 sm:gap-0 sm:px-[1px]">
              <Image
                src="/img/calender.svg"
                width={22}
                height={22}
                className="h-6 w-6 lg:h-5 lg:w-5 sm:h-4 sm:w-4"
              />
              <span className="text-blue-600 lg:text-sm ">Custom Date</span>
            </div>
            <div className="px-1">
              <Image
                src="/img/dropdown.svg"
                width={22}
                height={22}
                className="h-6 w-6 lg:h-5 w-5 sm:h-4 sm:w-4"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
