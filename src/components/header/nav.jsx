"use client";

import Image from "next/image";
import NavItem from "./nav-item";
import { useState } from "react";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center">
      <nav className="lg:absolute top-16 left-0 z-50">
        <ul
          className={`flex gap-1 xl:gap-[1px] lg:flex-col lg:bg-white lg:w-screen lg:shadow-lg ${
            isNavOpen ? "lg:flex" : "lg:hidden"
          }`}
        >
          <li className="text-blue-600 bg-blue-100 nav-item cursor-pointer xl:px-1 xl:py-1 lg:py-3 lg:border-b">
            <Image src="/img/dashboard.svg" width={22} height={22} />
            <span className="text-base">Dashboard</span>
          </li>

          <NavItem text={"Ads"} img={"/img/ads.svg"} />

          <NavItem text={"Products"} img={"/img/products.svg"} />

          <NavItem text={"Advertisers"} img="/img/advertisers.svg" />

          <NavItem text={"Shops"} img={"img/shop.svg"} />

          <NavItem text={"Influence"} img="/img/influence.svg" />
        </ul>
      </nav>
      <div
        className=" cursor-pointer flex-col gap-1 hidden lg:flex lg:absolute lg:left-5 sm:left-2  "
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <span
          className={`h-[2px] w-6 bg-blue-600 rounded transition-transform ${
            isNavOpen ? "translate-y-[6px] rotate-45" : ""
          }`}
        ></span>
        <span
          className={`h-[2px] w-6 bg-blue-600 rounded ${
            isNavOpen ? "lg:w-0" : ""
          }`}
        ></span>
        <span
          className={`h-[2px] w-6 bg-blue-600 rounded transition-transform ${
            isNavOpen ? "-translate-y-[6px] -rotate-45" : ""
          }`}
        ></span>
      </div>
    </div>
  );
}
