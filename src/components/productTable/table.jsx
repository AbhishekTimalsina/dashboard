"use client";
import { useEffect, useState } from "react";
import FilterComponents from "../FilterComponents";
import TableRow from "./tableRow";

import { useProductData, useSetProduct } from "@/store/Store";
import Loading from "../loading";

export default function Table() {
  const [selectInput, setSelectInput] = useState({
    platform: "all",
    region: "all",
  });
  const [loading, setLoading] = useState(true);
  const productsData = useProductData();
  const setProduct = useSetProduct();

  useEffect(() => {
    setLoading(true);
    fetch(
      `http://localhost:3000/api/product?platform=${selectInput.platform}&region=${selectInput.region}`
    )
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
        setLoading(false);
      });
  }, [selectInput]);

  let tableRows = productsData.map((data, i) => {
    return <TableRow productData={data} key={i} />;
  });
  return (
    <div>
      <FilterComponents
        selectInput={selectInput}
        setSelectInput={setSelectInput}
      />
      <div className="md:overflow-scroll">
        <table className="w-full mt-6 md:min-w-[95vw]">
          <thead>
            <tr className="bg-blue-600 text-white border-b py-3 text-left">
              <th className="w-[40%] pr-1 pl-4 py-3 lg:text-sm lg:w-[35%] md:pr-3 md:min-w-[45vw]">
                PRODUCT CATEGORY
              </th>
              <th className="pr-1 text-left py-3 lg:text-sm lg:text-center md:pr-3 md:w-fit">
                POPULARITY
              </th>
              <th className="pr-1 text-left py-3 lg:text-sm lg:text-center md:pr-3 md:min-w-[20vw]">
                POPULARITY CHANGE
              </th>
              <th className="pr-1 text-left py-3 lg:text-sm lg:pr-3 lg:text-center md:pr-3 md:min-w-[10vw]">
                CTR
              </th>
              <th className="pr-1 text-left py-3 lg:text-sm lg:pr-3 lg:text-center md:pr-3 md:min-w-[10vw]">
                CVR
              </th>
              <th className="pr-1 text-left py-3 lg:text-sm lg:pr-3 lg:text-center md:pr-3 md:min-w-[10vw]">
                CPA
              </th>
              <th className="pr-1 text-left py-3 lg:text-sm lg:pr-3 lg:text-center md:pr-3 md:min-w-[8vw]">
                STATUS
              </th>
              <th className="pr-1 text-left py-3 lg:text-sm lg:text-center md:pr-3 md:min-w-fit">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>{loading ? <Loading /> : tableRows}</tbody>
        </table>
      </div>
    </div>
  );
}
