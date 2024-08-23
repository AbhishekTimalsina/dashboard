import Image from "next/image";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="flex justify-between py-3 px-6 items-center border-b border-grey-100 xl:px-4 h-16 sm:px-2">
      <span className="font-extrabold text-xl text-blue-600 relative lg:left-[40%] lg:-translate-x-1/2 sm:text sm:left-[30%]">
        ADSPY+
      </span>
      <Nav />
      <div className="flex items-center gap-3 xl:gap-1 lg:gap-3 sm:gap-1">
        <span className="font-medium text-base border text-blue-600 border-blue-600 rounded py-1 px-3 cursor-pointer xl:px-1 sm:px-[1px] sm:py-[2px] sm:text-sm">
          Feedbacks
        </span>
        <div className="flex items-center gap-1 xl:gap-[1px] lg:gap-1 sm:gap-[1px]">
          <Image
            src="/img/avatar.png"
            width={32}
            height={32}
            className="sm:h-7 sm:w-7"
          />
          <span className="text-base xl:w-min xl:text-sm">Ketan Maharjan</span>
          <Image
            src="/img/dropdown.svg"
            width={22}
            height={22}
            className="sm:h-5 sm:w-5"
          />
        </div>
      </div>
    </header>
  );
}
