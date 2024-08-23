"use client";

import { useState, useEffect } from "react";
import TableRow from "./tableRow";
import { useKeyWordData, useSetkeyWord } from "@/store/Store";
import FilterComponents from "../FilterComponents";
import Loading from "../loading";

export default function Table() {
  const [selectInput, setSelectInput] = useState({
    platform: "all",
    region: "all",
  });
  const [loading, setLoading] = useState(true);

  const keyWordsData = useKeyWordData();
  const setKeyword = useSetkeyWord();

  useEffect(() => {
    setLoading(true);
    fetch(
      `http://localhost:3000/api/keyword?platform=${selectInput.platform}&region=${selectInput.region}`
    )
      .then((res) => res.json())
      .then((res) => {
        setKeyword(res);
        setLoading(false);
      });
  }, [selectInput]);

  let tableRows = keyWordsData.map((data, i) => {
    return <TableRow keywordData={{ ...data, rank: i + 1 }} key={i} />;
  });

  return (
    <div>
      <FilterComponents
        selectInput={selectInput}
        setSelectInput={setSelectInput}
      />

      <div className="md:overflow-scroll">
        <table className="w-full px-4 mt-6 md:min-w-[95vw]">
          <thead>
            <tr className="bg-blue-600 text-white h-12 border-b py-2 text-left">
              <th className="pr-1 text-left pl-4 lg:text-sm md:min-w-fit">
                Rank
              </th>
              <th className="w-[40%] pr-1 pl-4 lg:text-sm lg:w-[30%] md:min-w-[40vw]">
                PRODUCT CATEGORY
              </th>
              <th className="pr-1 text-left lg:text-sm lg:text-center md:min-w-fit">
                POPULARITY
              </th>
              <th className="pr-1 text-left lg:text-sm lg:text-center md:min-w-[20vw]">
                POPULARITY CHANGE
              </th>
              <th className="pr-2 text-left lg:text-sm lg:pr-3 lg:text-center md:min-w-[10vw]">
                CTR
              </th>
              <th className="pr-2 text-left lg:text-sm lg:pr-3 lg:text-center md:min-w-[10vw]">
                CVR
              </th>
              <th className="pr-2 text-left lg:text-sm lg:pr-3 lg:text-center md:min-w-[10vw]">
                CPA
              </th>
              <th className="pr-2 text-left lg:text-sm lg:pr-3 lg:text-center md:min-w-[10vw]">
                STATUS
              </th>
              <th className="pr-1 text-left lg:text-sm md:min-w-[10vw]">
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
