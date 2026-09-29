export function Footer() {
  return (
    <footer
      id="main-site-footer"
      className="bg-stone-900 text-stone-300 border-t border-stone-800 py-10 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-lg font-bold block text-white">
          亞馬遜國家山岳協會
        </span>
        <span className="text-xs text-stone-400 font-mono tracking-wider block mt-1">
          Amazon Alpine Association
        </span>
        <nav aria-label="頁尾導覽" className="mt-5 flex items-center justify-center gap-6 text-sm">
          <a href="https://amazon-hike.com/" className="text-stone-300 hover:text-emerald-300 hover:underline underline-offset-2">
            協會首頁
          </a>
          <a href="https://amazon-hike.com/chapter01/" className="text-stone-300 hover:text-emerald-300 hover:underline underline-offset-2">
            登山入門教學
          </a>
        </nav>
      </div>
    </footer>
  );
}
