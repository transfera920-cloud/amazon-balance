import { useState, useEffect } from 'react';
import { ListCollapse, ChevronRight } from 'lucide-react';
import { NavSection } from '../types';

interface TableOfContentsProps {
  sections: NavSection[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside
      id="desktop-table-of-contents"
      aria-label="文章目錄導覽"
      className="hidden xl:block w-72 shrink-0"
    >
      <div className="sticky top-24 bg-white/90 backdrop-blur-sm border border-stone-200/90 rounded-2xl p-5 shadow-xs">
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-stone-200 text-stone-900">
          <ListCollapse className="w-5 h-5 text-emerald-700" />
          <span className="font-semibold text-sm tracking-wide">教案導覽目錄</span>
        </div>

        <nav aria-label="本章小節導覽">
          <ul className="space-y-1 text-xs">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`group flex items-center justify-between py-1.5 px-2.5 rounded-lg transition-all ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-900 font-semibold border-l-2 border-emerald-600'
                        : 'text-stone-600 hover:text-stone-950 hover:bg-stone-50'
                    }`}
                  >
                    <span className="truncate">{section.shortTitle}</span>
                    <ChevronRight
                      className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                        isActive
                          ? 'text-emerald-700 translate-x-0.5'
                          : 'text-stone-300 opacity-0 group-hover:opacity-100'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-5 pt-4 border-t border-stone-200/80 text-[11px] text-stone-500 leading-relaxed">
          <p className="font-medium text-stone-700 mb-1">亞馬遜國家山岳協會 教案標準</p>
          <p>
            建議依循章節順序研讀，結合步道實作訓練，建立系統性的身體動態平衡神經反射。
          </p>
        </div>
      </div>
    </aside>
  );
}
