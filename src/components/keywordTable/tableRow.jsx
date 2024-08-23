import Image from "next/image";

export default function TableRow({ keywordData }) {
  return (
    <tr className=" border-b border-zinc-200">
      <td className="pl-4">{keywordData.rank}</td>
      <td className=" py-3">{keywordData.name}</td>
      <td className="py-3">{keywordData.popularity}</td>
      <td className="py-3">
        <div className="flex gap-2">
          <Image src="/img/caretup.svg" width={18} height={18} />
          <span className="text-green-700">{keywordData.popularityChange}</span>
        </div>
      </td>
      <td className="py-3">{keywordData.ctr}</td>
      <td className="py-3">{keywordData.cvr}</td>
      <td className="py-3">{keywordData.cpa}</td>
      <td className="py-3">
        <div className="flex justify-center">
          <span className="bg-green-100 text-green-600 w-4/5 text-center rounded text-sm">
            {keywordData.status}
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
