export function Breadcrumb() {
  return (
    <nav aria-label="麵包屑" className="mb-6 text-xs sm:text-sm text-stone-500">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li>
          <a href="https://amazon-hike.com/" className="hover:text-emerald-700 hover:underline underline-offset-2">首頁</a>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <a href="https://amazon-hike.com/intro" className="hover:text-emerald-700 hover:underline underline-offset-2">登山入門教學</a>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="text-stone-700 font-medium">登山行走技術</li>
      </ol>
    </nav>
  );
}
