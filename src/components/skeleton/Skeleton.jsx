export default function Skeleton({ dataNum }) {
  let singleSkeleton = [...Array(dataNum - 1)].map(() => <SingleSkeleton />);

  return (
    <tr className=" border-b border-zinc-200 animate-pulse">
      <td className="pl-4 py-3 rounded-md">
        <div className="bg-slate-200 w-4/5 h-8 rounded"></div>
      </td>
      {singleSkeleton}
    </tr>
  );
}

function SingleSkeleton() {
  return (
    <td className="rounded">
      <div className="py-3 bg-slate-200 w-4/5 h-7 rounded"></div>
    </td>
  );
}
