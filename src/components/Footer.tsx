export function Footer() {
  return (
    <footer
      id="main-site-footer"
      className="bg-stone-900 text-stone-300 border-t border-stone-800 py-10 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <a
          id="brand-footer-link"
          href="https://amazon-hike.com/"
          className="inline-block group focus:outline-none"
          title="前往 亞馬遜國家山岳協會"
        >
          <span className="text-lg font-bold block text-white group-hover:text-emerald-300 transition-colors">
            亞馬遜國家山岳協會
          </span>
          <span className="text-xs text-stone-400 font-mono tracking-wider block mt-1 group-hover:text-stone-300 transition-colors">
            Amazon Alpine Association
          </span>
        </a>
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
