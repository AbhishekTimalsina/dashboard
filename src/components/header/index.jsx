import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between py-3 px-6 items-center border-b border-grey-100">
      <span className="font-extrabold text-xl text-blue-600">ADSPY+</span>
      <nav>
        <ul className="flex gap-1">
          <li className="text-blue-600 bg-blue-100 nav-item">
            <Image src="/img/dashboard.svg" width={22} height={22} />
            <span className="fonttext-sm">Dashboard</span>
          </li>
          <li className="nav-item">
            <Image src="/img/ads.svg" width={22} height={22} />
            <span> Ads</span>
            <Image src="/img/dropdown.svg" width={22} height={22} />
          </li>

          <li className="nav-item">
            <Image src="/img/products.svg" width={22} height={22} />
            <span>Products</span>
            <Image src="/img/dropdown.svg" width={22} height={22} />
          </li>

          <li className="nav-item">
            <Image src="/img/advertisers.svg" width={22} height={22} />
            <span> Advertisers</span>
            <Image src="/img/dropdown.svg" width={22} height={22} />
          </li>

          <li className="nav-item">
            <Image src="/img/shop.svg" width={22} height={22} />
            <span> Shops</span>
            <Image src="/img/dropdown.svg" width={22} height={22} />
          </li>

          <li className="nav-item">
            <Image src="/img/influence.svg" width={22} height={22} />
            <span> Influence</span>
            <Image src="/img/dropdown.svg" width={22} height={22} />
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-3">
        <span className="font-medium border text-blue-600 border-blue-600 rounded py-1 px-3">
          Feedbacks
        </span>
        <div className="flex items-center gap-1">
          <Image src="/img/avatar.png" width={32} height={32} />
          <span className="font-base">Ketan Maharjan</span>
          <Image src="/img/dropdown.svg" width={22} height={22} />
        </div>
      </div>
    </header>
  );
}
