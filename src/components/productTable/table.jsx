import Image from "next/image";
import TableRow from "./tableRow";

const productsData = [
  {
    name: "Leggings",
    alts: "Womens wear & women's underwear / Women's bottom / Leggings",
    popularity: 224353,
    popularityChange: "2.4%",
    ctr: "32%",
    cvr: "42%",
    cpa: "$34",
    status: "Running",
  },
  {
    name: "Socks",
    alts: "Womens wear & women's underwear / Women's bottom / Socks",
    popularity: 224353,
    popularityChange: "2.4%",
    ctr: "32%",
    cvr: "42%",
    cpa: "$34",
    status: "Running",
  },
  {
    name: "Dolls",
    alts: "oys & hobbies / Dolls & stuffed toys / dolls",
    popularity: 224353,
    popularityChange: "2.4%",
    ctr: "32%",
    cvr: "42%",
    cpa: "$34",
    status: "Running",
  },
  {
    name: "Leggings",
    alts: "Womens wear & women's underwear / Women's bottom / Leggings",
    popularity: 224353,
    popularityChange: "2.4%",
    ctr: "32%",
    cvr: "42%",
    cpa: "$34",
    status: "Running",
  },
  {
    name: "Socks",
    alts: "Womens wear & women's underwear / Women's bottom / Socks",
    popularity: 224353,
    popularityChange: "2.4%",
    ctr: "32%",
    cvr: "42%",
    cpa: "$34",
    status: "Running",
  },
  {
    name: "Dolls",
    alts: "oys & hobbies / Dolls & stuffed toys / dolls",
    popularity: 224353,
    popularityChange: "2.4%",
    ctr: "32%",
    cvr: "42%",
    cpa: "$34",
    status: "Running",
  },
  {
    name: "Leggings",
    alts: "Womens wear & women's underwear / Women's bottom / Leggings",
    popularity: 224353,
    popularityChange: "2.4%",
    ctr: "32%",
    cvr: "42%",
    cpa: "$34",
    status: "Running",
  },
  {
    name: "Dolls",
    alts: "oys & hobbies / Dolls & stuffed toys / dolls",
    popularity: 224353,
    popularityChange: "2.4%",
    ctr: "32%",
    cvr: "42%",
    cpa: "$34",
    status: "Running",
  },
];

let tableRows = productsData.map((data, i) => {
  return <TableRow productData={data} key={i} />;
});

export default function Table() {
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
