"use client";
import TableRow from "./tableRow";

import { useProductData } from "@/store/Store";

export default function Table() {
  const productsData = useProductData();

  let tableRows = productsData.map((data, i) => {
    return <TableRow productData={data} key={i} />;
  });
  return (
    <table className="w-full mt-6">
      <thead>
        <tr className="bg-blue-600 text-white border-b py-3 text-left">
          <th className="w-[40%] pr-1 pl-4 py-3">PRODUCT CATEGORY</th>
          <th className="pr-1 text-left py-3">POPULARITY</th>
          <th className="pr-1 text-left py-3">POPULARITY CHANGE</th>
          <th className="pr-1 text-left py-3">CTR</th>
          <th className="pr-1 text-left py-3">CVR</th>
          <th className="pr-1 text-left py-3">CPA</th>
          <th className="pr-1 text-left py-3">STATUS</th>
          <th className="pr-1 text-left py-3">ACTIONS</th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
}
