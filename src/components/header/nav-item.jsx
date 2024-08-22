import Image from "next/image";

export default function NavItem({ text, img }) {
  return (
    <li className="nav-item cursor-pointer">
      <Image src={img} width={22} height={22} />
      <span> {text}</span>
      <Image src="/img/dropdown.svg" width={22} height={22} />
    </li>
  );
}
