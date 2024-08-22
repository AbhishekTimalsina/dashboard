"use client";

import TableRow from "./tableRow";
import { useKeyWordData } from "@/store/Store";

export default function Table() {
  const products = useKeyWordData();

  let tableRows = products.map((data, i) => {
    return <TableRow keywordData={{ ...data, rank: i + 1 }} key={i} />;
  });

  return (
    <table className="w-full px-4 mt-6">
      <thead>
        <tr className="bg-blue-600 text-white h-12 border-b py-2 text-left">
          <th className="pr-1 text-left pl-4">Rank</th>
          <th className="w-[40%] pr-1 pl-4">PRODUCT CATEGORY</th>
          <th className="pr-1 text-left">POPULARITY</th>
          <th className="pr-1 text-left">POPULARITY CHANGE</th>
          <th className="pr-2 text-left">CTR</th>
          <th className="pr-2 text-left">CVR</th>
          <th className="pr-2 text-left">CPA</th>
          <th className="pr-2 text-left">STATUS</th>
          <th className="pr-1 text-left">ACTIONS</th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
}
