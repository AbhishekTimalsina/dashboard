import Image from "next/image";

export default function NavItem({ text, img }) {
  return (
    <li className="nav-item cursor-pointer items-center xl:gap-[1px] xl:px-1 xl:py-1 lg:py-3 lg:border-b lg:gap-1 ">
      <Image src={img} width={22} height={22} className="h-5" />
      <span className="text-base"> {text}</span>
      <Image src="/img/dropdown.svg" width={22} height={22} className="h-5" />
    </li>
  );
}
