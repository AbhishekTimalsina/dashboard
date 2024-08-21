import TableRow from "./tableRow";

export default function Table() {
  let products = [
    {
      name: "Stay up",
      popularity: 235643,
      popularityChange: "5.8%",
      ctr: "2.4%",
      cvr: "5.0%",
      cpa: "$2.4",
      status: "running",
    },
    {
      name: "Download for free",
      popularity: 235643,
      popularityChange: "5.8%",
      ctr: "2.4%",
      cvr: "5.0%",
      cpa: "$2.4",
      status: "running",
    },
    {
      name: "Top deals",
      popularity: 235643,
      popularityChange: "5.8%",
      ctr: "2.4%",
      cvr: "5.0%",
      cpa: "$2.4",
      status: "running",
    },
    {
      name: "Makeup",
      popularity: 235643,
      popularityChange: "5.8%",
      ctr: "2.4%",
      cvr: "5.0%",
      cpa: "$2.4",
      status: "running",
    },
    {
      name: "Women",
      popularity: 235643,
      popularityChange: "5.8%",
      ctr: "2.4%",
      cvr: "5.0%",
      cpa: "$2.4",
      status: "running",
    },
    {
      name: "Shaving Cream",
      popularity: 235643,
      popularityChange: "5.8%",
      ctr: "2.4%",
      cvr: "5.0%",
      cpa: "$2.4",
      status: "running",
    },
    {
      name: "This game",
      popularity: 235643,
      popularityChange: "5.8%",
      ctr: "2.4%",
      cvr: "5.0%",
      cpa: "$2.4",
      status: "running",
    },
    {
      name: "Mattress",
      popularity: 235643,
      popularityChange: "5.8%",
      ctr: "2.4%",
      cvr: "5.0%",
      cpa: "$2.4",
      status: "running",
    },
  ];

  let tableRows = products.map((data, i) => {
    return <TableRow productData={{ ...data, rank: i + 1 }} />;
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
