import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="w-80 h-76">
      <div className="relative">
        <div>
          <Image
            src="/img/thumbnail.png"
            width={0}
            height={0}
            sizes="100%"
            className="w-full h-full"
          />
        </div>
        <div className="absolute bottom-4 flex justify-between w-full px-4">
          <span className="bg-black text-white py-1 px-1 text-sm">00:08</span>
          <Image src="/img/facebook.png" width={33} height={22} />
        </div>
      </div>
    </div>
  );
}
