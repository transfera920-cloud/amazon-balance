import { useState, useEffect } from 'react';
import { Mountain, Menu, X, BookOpen } from 'lucide-react';

export function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-site-header"
      className="sticky top-0 z-40 bg-stone-900 text-stone-100 shadow-md border-b border-stone-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Area Linking to https://amazon-hike.com/intro */}
          <a
            id="brand-header-link"
            href="https://amazon-hike.com/intro"
            className="group flex items-center gap-3 py-2 text-stone-100 hover:text-emerald-300 transition-colors"
            title="前往 亞馬遜國家山岳協會"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-700/80 border border-emerald-500/40 flex items-center justify-center text-white shadow-sm group-hover:bg-emerald-600 transition-colors">
              <Mountain className="w-6 h-6" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                亞馬遜國家山岳協會
              </span>
              <span className="text-xs text-stone-400 tracking-wider font-mono">
                Amazon Alpine Association
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="全站功能導航" className="hidden md:flex items-center gap-6">
            <a
              id="nav-textbook-chapter"
              href="#chapter-overview"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-3 py-1.5 rounded-full"
            >
              <BookOpen className="w-4 h-4" />
              <span>登山行走技術</span>
            </a>

            <a
              id="nav-quick-practice"
              href="#practice-drills"
              className="text-sm font-medium text-stone-300 hover:text-white transition-colors"
            >
              實作練習
            </a>

            <a
              id="nav-quick-summary"
              href="#chapter-summary"
              className="text-sm font-medium text-stone-300 hover:text-white transition-colors"
            >
              本章總結
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-400 hover:text-white focus:outline-none"
              aria-label={mobileMenuOpen ? '關閉選單' : '開啟導航選單'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Reading Progress Indicator */}
      <div className="w-full bg-stone-800 h-1" aria-hidden="true">
        <div
          className="bg-emerald-500 h-1 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="md:hidden bg-stone-900 border-b border-stone-800 px-4 py-4 space-y-3">
          <a
            href="#section-1"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-300 hover:text-emerald-400 text-sm"
          >
            1. 鞋底止滑不是全部
          </a>
          <a
            href="#section-3"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-300 hover:text-emerald-400 text-sm"
          >
            3. 登山遇到溯溪／涉水
          </a>
          <a
            href="#section-6"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-300 hover:text-emerald-400 text-sm"
          >
            6. 下坡不是單純煞車
          </a>
          <a
            href="#section-10"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-300 hover:text-emerald-400 text-sm"
          >
            10. 登山杖：輔助而非替代
          </a>
          <a
            href="#section-16"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-300 hover:text-emerald-400 text-sm"
          >
            16. 下坡完整動作流程
          </a>
          <a
            href="#practice-drills"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-300 hover:text-emerald-400 text-sm"
          >
            18. 實作練習指南
          </a>
        </div>
      )}
    </header>
  );
}
