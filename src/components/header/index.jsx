import Image from "next/image";
import NavItem from "./nav-item";

export default function Header() {
  return (
    <header className="flex justify-between py-3 px-6 items-center border-b border-grey-100">
      <span className="font-extrabold text-xl text-blue-600">ADSPY+</span>
      <nav>
        <ul className="flex gap-1">
          <li className="text-blue-600 bg-blue-100 nav-item cursor-pointer">
            <Image src="/img/dashboard.svg" width={22} height={22} />
            <span className="fonttext-sm">Dashboard</span>
          </li>

          <NavItem text={"Ads"} img={"/img/ads.svg"} />

          <NavItem text={"Products"} img={"/img/products.svg"} />

          <NavItem text={"Advertisers"} img="/img/advertisers.svg" />

          <NavItem text={"Shops"} img={"img/shop.svg"} />

          <NavItem text={"Influence"} img="/img/influence.svg" />
        </ul>
      </nav>
      <div className="flex items-center gap-3">
        <span className="font-medium border text-blue-600 border-blue-600 rounded py-1 px-3 cursor-pointer">
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
