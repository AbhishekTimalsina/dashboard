import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="bg-white rounded-lg pb-3 overflow-hidden">
      <div className="relative">
        <div>
          <Image
            src="/img/thumbnail.png"
            width={0}
            height={0}
            sizes="100%"
            className="w-full h-56 "
          />
        </div>
        <div className="absolute bottom-2 flex justify-between w-full px-4 items-center">
          <span className="bg-black text-white py-1 px-2 text-sm h-fit rounded">
            00:08
          </span>
          <Image src="/img/facebook.png" width={33} height={22} />
        </div>
        <Image
          src="/img/play.svg"
          width={40}
          height={40}
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        />
      </div>

      <div className="px-3 py-1">
        <div className="flex flex-col gap-1 pb-4 border-b border-grey-50">
          <span className="text-ellipsis whitespace-nowrap overflow-hidden">
            This eye-catching artwork is ONLY AVAILABLE
          </span>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="font-semibold text-center ">206.5k</span>
              <span className="text-sm">Impressions</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-center ">3</span>
              <span className="text-sm">Duration</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-center ">1k</span>
              <span className="text-sm">Likes</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="bg-blue-600 text-white rounded py-1 basis-[90%] ">
              View Product
            </button>
            <span className="basis-[10%] border flex justify-center rounded-lg border-blue-600 cursor-pointer">
              <Image src="/img/bookmark.svg" width={24} height={24} />
            </span>
          </div>
        </div>
        <div className="pt-2 flex justify-between">
          <div className="flex gap-2 items-center ">
            <Image src="/img/avatar.png" width={38} height={38} />
            <div className="flex justify-center flex-col">
              <span className="text-sm">Ketan Maharjan</span>
              <Image src="/img/flag.svg" width={18} height={14} />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-right">Created On</span>
            <span className="font-semibold text-sm">August 20, 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}
