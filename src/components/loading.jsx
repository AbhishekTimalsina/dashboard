import Skeleton from "./skeleton/Skeleton";

export default function Loading({ rowNum = 5, dataNum = 8 }) {
  let Skeletons = [...Array(rowNum)].map(() => <Skeleton dataNum={dataNum} />);

  return <>{Skeletons}</>;
}
