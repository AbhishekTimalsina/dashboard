import Image from "next/image";

export default function TableRow({ productData }) {
  return (
    <tr className=" border-b border-zinc-200">
      <td className="pl-4 py-3">
        <span className="font-semibold">{productData.name}</span>
        <p className="text-sm text-gray-500">{productData.alts}</p>
      </td>
      <td className="py-3">{productData.popularity}</td>
      <td className="py-3">
        <div className="flex gap-2">
          <Image src="/img/caretup.svg" width={18} height={18} />
          <span className="text-green-700">{productData.popularityChange}</span>
        </div>
      </td>
      <td className="py-3">{productData.ctr}</td>
      <td className="py-3">{productData.cvr}</td>
      <td className="py-3">{productData.cpa}</td>
      <td className="py-3">
        <div className="flex justify-center">
          <span className="bg-green-100 text-green-600 w-4/5 text-center rounded">
            {productData.status}
          </span>
        </div>
      </td>
      <td className="py-3">
        <div className="flex justify-center">
          <Image src="/img/eye.svg" width={22} height={22} />
        </div>
      </td>
    </tr>
  );
}
