export default function Tabs() {
  return (
    <div className="flex border-b border-grey-200">
      <span className="px-3 py-2 sm:text-sm sm:py-1 sm:px-2">All</span>
      <span className="px-3 py-2 border-b-2 border-blue-600 text-blue-600 sm:text-sm sm:py-1 sm:px-2">
        Facebook
      </span>
      <span className="px-3 py-2 sm:text-sm sm:py-1 sm:px-2">Instagram</span>
      <span className="px-3 py-2 sm:text-sm sm:py-1 sm:px-2">Pinterest</span>
      <span className="px-3 py-2 sm:text-sm sm:py-1 sm:px-2">Tiktok</span>
    </div>
  );
}
