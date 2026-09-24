import {
  ShieldAlert,
  HelpCircle,
  Footprints,
  Sparkles,
  Layers,
  Scale,
  Activity,
  AlertCircle,
  Eye,
  CheckCircle,
} from 'lucide-react';
import { Header } from './components/Header';
import { TableOfContents } from './components/TableOfContents';
import { TerrainTransitionMatrix } from './components/TerrainTransitionMatrix';
import { InteractiveBiomechanicalDemonstrator } from './components/InteractiveBiomechanicalDemonstrator';
import { PracticeChecklist } from './components/PracticeChecklist';
import { Footer } from './components/Footer';
import { Breadcrumb } from './components/Breadcrumb';
import { NavSection } from './types';

const SECTIONS: NavSection[] = [
  { id: 'section-friction', title: '鞋底止滑不是全部', shortTitle: '1. 鞋底止滑不是全部' },
  { id: 'section-skating', title: '滑冰：理解重心與支撐', shortTitle: '2. 滑冰案例比對' },
  { id: 'section-stream-crossing', title: '登山遇到溯溪與涉水', shortTitle: '3. 溯溪與涉水地形' },
  { id: 'section-felt-shoes', title: '溯溪鞋與濕滑岩面', shortTitle: '4. 溯溪鞋客觀剖析' },
  { id: 'section-center-of-gravity', title: '重心與踩點', shortTitle: '5. 重心與踩點控制' },
  { id: 'section-downhill-braking', title: '下坡不是單純煞車', shortTitle: '6. 下坡慣性管理' },
  { id: 'section-vision-stride', title: '視線、步幅與預判', shortTitle: '7. 視線步幅與關節鏈' },
  { id: 'section-trekking-poles', title: '登山杖：輔助而非替代', shortTitle: '8. 登山杖與注意力' },
  { id: 'section-hands-terrain', title: '雙手與地形利用', shortTitle: '9. 雙手樹枝與箭竹' },
  { id: 'section-ropes', title: '繩索的正確理解', shortTitle: '10. 繩索的多重屬性' },
  { id: 'section-descent-workflow', title: '下坡完整動作流程', shortTitle: '11. 八步下坡與背包' },
  { id: 'practice-drills', title: '實作練習', shortTitle: '12. 六大實作訓練' },
  { id: 'chapter-summary', title: '本章總結', shortTitle: '13. 本章核心總結' },
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-800">
      <Header />

      {/* Main Container with Article & Aside */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex-1 w-full">
        <div className="flex flex-col xl:flex-row gap-10 lg:gap-14 items-start">
          
          {/* Main Educational Article */}
          <main className="w-full flex-1 min-w-0">
            <Breadcrumb />
            <article id="educational-article" className="prose prose-stone max-w-none">
              
              {/* Header / Meta Hero Banner */}
              <header id="chapter-overview" className="pb-8 border-b border-stone-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-200">
                    登山行走生物力學教案
                  </span>
                </div>

                {/* Sole H1 in the document */}
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
                  登山行走技術：重心、踩點與下坡控制
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl text-emerald-900/90 font-medium leading-relaxed mb-6">
                  鞋底提供摩擦，真正控制身體的是重心、踩點與平衡。
                </p>

                {/* Core Framework Principle Card */}
                <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-7 shadow-sm border border-stone-800">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>本章核心力學定律</span>
                  </div>
                  <p className="text-base sm:text-lg font-semibold text-white mb-4">
                    登山行走不是單純比較鞋底止滑能力。
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 text-sm">
                    <div className="bg-stone-800/80 p-3.5 rounded-xl border border-stone-700">
                      <div className="text-xs text-stone-400 mb-1">物理條件</div>
                      <div className="font-bold text-emerald-300">鞋底提供摩擦條件</div>
                    </div>
                    <div className="bg-stone-800/80 p-3.5 rounded-xl border border-stone-700">
                      <div className="text-xs text-stone-400 mb-1">路徑選擇</div>
                      <div className="font-bold text-emerald-300">腳掌尋找踩點</div>
                    </div>
                    <div className="bg-stone-800/80 p-3.5 rounded-xl border border-stone-700">
                      <div className="text-xs text-stone-400 mb-1">核心控制</div>
                      <div className="font-bold text-emerald-300">身體控制重心</div>
                    </div>
                    <div className="bg-stone-800/80 p-3.5 rounded-xl border border-stone-700">
                      <div className="text-xs text-stone-400 mb-1">動態微調</div>
                      <div className="font-bold text-emerald-300">雙手協助平衡</div>
                    </div>
                    <div className="bg-stone-800/80 p-3.5 rounded-xl border border-stone-700">
                      <div className="text-xs text-stone-400 mb-1">外部支撐</div>
                      <div className="font-bold text-emerald-300">裝備與地形提供輔助</div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-stone-800 flex flex-wrap gap-1.5 text-xs text-stone-400">
                    <span className="font-mono text-stone-500 mr-1">教案涵蓋關鍵字：</span>
                    {[
                      '登山鞋止滑', '鞋底摩擦力', '重心控制', '踩點', '平衡', '下坡技巧', '下坡慣性',
                      '步幅', '步頻', '視線與預判', '登山杖', '登山杖支點', '雙手平衡', '繩索',
                      '樹枝', '箭竹', '濕滑岩面', '溯溪', '涉水', '溯溪鞋', '溪床地形'
                    ].map((tag) => (
                      <span key={tag} className="bg-stone-800 px-2 py-0.5 rounded text-stone-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </header>

              {/* 1. SECTION: 鞋底止滑不是全部 */}
              <section id="section-friction" className="py-10 border-b border-stone-200">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 uppercase tracking-wider mb-2">
                  <span>教學模組 01</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  鞋底止滑不是全部
                </h2>

                <p className="text-stone-700 leading-relaxed text-base sm:text-lg">
                  許多剛接觸登山的初學者常有一種直覺迷思：「只要買一雙最高等級的黃金大底（Vibram）登山鞋，下山就不會滑倒。」然而，山難救援與野外滑落統計不斷提醒我們：不同鞋底材質配方、紋路深淺與地面條件，確實會造成抓地表現的數值差異；
                  <strong>但鞋底從來不是絕對的安全保證。</strong>
                </p>

                <p className="text-stone-700 leading-relaxed text-base">
                  當踩點選擇錯誤（例如踩在浮動碎石、圓形濕木或厚青苔上）、身體重心脫離支撐底面、步幅過大導致著地力矩失衡時，即使鞋底擁有極高的實驗室摩擦係數，腳下整片接觸界面依然會連同泥沙一起崩塌位移。
                </p>

                {/* 4-Step Formula Banner */}
                <div className="my-6 p-5 bg-stone-100 rounded-xl border-l-4 border-emerald-700">
                  <h3 className="text-base font-bold text-stone-900 mb-2">
                    行走力學四位一體核心定理
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="bg-white p-3 rounded-lg border border-stone-200 shadow-2xs">
                      <div className="text-xs text-stone-500 font-mono">條件層</div>
                      <div className="font-bold text-stone-900 text-sm mt-1">摩擦力是條件</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-stone-200 shadow-2xs">
                      <div className="text-xs text-stone-500 font-mono">決策層</div>
                      <div className="font-bold text-stone-900 text-sm mt-1">踩點是選擇</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-stone-200 shadow-2xs">
                      <div className="text-xs text-stone-500 font-mono">執行層</div>
                      <div className="font-bold text-stone-900 text-sm mt-1">重心是控制</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-stone-200 shadow-2xs">
                      <div className="text-xs text-stone-500 font-mono">狀態層</div>
                      <div className="font-bold text-emerald-800 text-sm mt-1">平衡是結果</div>
                    </div>
                  </div>
                </div>

                <p className="text-stone-700 leading-relaxed text-base">
                  如果把安全完全寄託在裝備的防滑性能上，登山者就會在行走中放鬆對身體感知的敏銳度。建立安全行走習慣的第一步，就是把鞋底視為「與地球表面產生摩擦的界面」，而將掌控主導權收回自己的神經與肌肉控制系統。
                </p>
              </section>

              {/* 2. SECTION: 滑冰案例 */}
              <section id="section-skating" className="py-10 border-b border-stone-200">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 uppercase tracking-wider mb-2">
                  <span>教學模組 02</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  滑冰：理解重心與支撐
                </h2>

                <p className="text-stone-700 leading-relaxed text-base">
                  為了深刻體會「重心與支撐」的核心本質，我們可以觀察滑冰運動。在光滑的冰面上，金屬冰刀與冰層之間的摩擦係數趨近於零；如果單純依賴摩擦力，任何人都寸步難行。
                </p>

                <div className="grid sm:grid-cols-2 gap-4 my-6">
                  <div className="bg-stone-100 p-5 rounded-xl border border-stone-200">
                    <h3 className="font-bold text-stone-900 text-base mb-2 flex items-center gap-2">
                      <Scale className="w-4 h-4 text-emerald-700" />
                      滑冰者的動態力學控制要素
                    </h3>
                    <ul className="text-sm text-stone-700 space-y-2 list-disc list-inside">
                      <li><strong>摩擦條件：</strong>極低摩擦界面，不向冰面索求過多靜摩擦阻力。</li>
                      <li><strong>支撐點切換：</strong>單腳著刀時，重量垂直精準落於刀刃窄面。</li>
                      <li><strong>重心位置：</strong>骨盆與軀幹永遠保持在中立垂直力線上。</li>
                      <li><strong>身體姿勢：</strong>膝蓋與踝關節隨時保持彈性彎曲以吸震與變向。</li>
                      <li><strong>平衡與速度控制：</strong>利用身體側傾角度引導動能，而非硬性煞停。</li>
                    </ul>
                  </div>

                  <div className="bg-emerald-50/70 p-5 rounded-xl border border-emerald-200">
                    <h3 className="font-bold text-emerald-950 text-base mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-emerald-800" />
                      教案比對原則說明
                    </h3>
                    <p className="text-sm text-emerald-900 leading-relaxed">
                      請學員特別注意：<strong>滑冰並不是與登山完全相同的物理環境</strong>。
                      山徑存在複雜的三維起伏、石礫與土壤阻力，而冰面則是平整剛體。
                      協會引用滑冰案例，僅作為理解<strong>重心、支撐點與動態平衡控制</strong>的直觀力學啟發：
                      當外在摩擦條件極度不可靠時，決定你會不會倒下的，是你把重心放在哪裡。
                    </p>
                  </div>
                </div>
              </section>

              {/* 3. SECTION: 登山遇到溯溪與涉水 */}
              <section id="section-stream-crossing" className="py-10 border-b border-stone-200">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 uppercase tracking-wider mb-2">
                  <span>教學模組 03 & 05</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  登山遇到溯溪與涉水
                </h2>

                <p className="text-stone-700 leading-relaxed text-base">
                  在台灣或高山多溪流的步道環境中，登山者常需面臨無橋樑的過溪與涉水挑戰。溪床不是平坦走道，而是充滿複合變數的流體動力環境：
                </p>

                <div className="my-6 grid sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                  <div className="p-3.5 bg-stone-100 rounded-lg border border-stone-200">
                    <strong className="block text-stone-900 font-semibold mb-1">流體與浮力</strong>
                    <span className="text-stone-600">
                      水流速度會產生持續的側向推力，水深及膝時更會產生可觀浮力，削弱雙腳對底部的有效正向壓力。
                    </span>
                  </div>
                  <div className="p-3.5 bg-stone-100 rounded-lg border border-stone-200">
                    <strong className="block text-stone-900 font-semibold mb-1">水底遮蔽與泥沙</strong>
                    <span className="text-stone-600">
                      水面折射使水深與底面凹凸產生視覺誤差；水底沉積的泥沙與青苔會讓踩點瞬間側滑。
                    </span>
                  </div>
                  <div className="p-3.5 bg-stone-100 rounded-lg border border-stone-200">
                    <strong className="block text-stone-900 font-semibold mb-1">鬆動岩石與暗流</strong>
                    <span className="text-stone-600">
                      水下圓石常處於力學非穩態，受力可能翻滾；雙手與登山杖必須隨時作為三角互鎖支點。
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mt-6 mb-3">
                  涉水的三階段判斷矩陣
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs">
                    <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded mr-2">
                      第一階段 · 溯溪前
                    </span>
                    <strong className="text-stone-900">路徑勘查與裝備調校：</strong>
                    <p className="text-stone-600 mt-1">
                      觀察整段水域，選擇河面寬闊、水流平緩之淺灘，避開急流峽口或深潭邊緣。解開背包胸扣與腰扣（落水時能一秒卸包脫困），調整登山杖至適當長度。
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs">
                    <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded mr-2">
                      第二階段 · 溯溪中
                    </span>
                    <strong className="text-stone-900">面對水流與三點接觸：</strong>
                    <p className="text-stone-600 mt-1">
                      身體微側向面對上游，將登山杖插在上游處作為主支點抵抗水流；步伐採側向滑步，腳掌不離底面太高，試探踩點穩固後再轉移重心，嚴禁大步跳石。
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs">
                    <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded mr-2">
                      第三階段 · 離開溪流後
                    </span>
                    <strong className="text-stone-900">地質界面的連續重構：</strong>
                    <p className="text-stone-600 mt-1">
                      上岸絕不代表危險結束。從水裡到陸地，地面材質會以極高頻率連續更迭，必須每一步重新評估支撐條件。
                    </p>
                  </div>
                </div>

                {/* Interactive Terrain Transition Matrix */}
                <TerrainTransitionMatrix />
              </section>

              {/* 4. SECTION: 溯溪鞋與濕滑岩面 */}
              <section id="section-felt-shoes" className="py-10 border-b border-stone-200">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 uppercase tracking-wider mb-2">
                  <span>教學模組 04</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  溯溪鞋與濕滑岩面
                </h2>

                <p className="text-stone-700 leading-relaxed text-base">
                  在涉水與潮濕溪谷環境中，毛氈底（菜瓜布底）或特殊黏性橡膠的「溯溪鞋」，因為具備快速排水、輕量以及能刺破水下微細藻類薄膜形成微咬合的特性，在特定水域情境中確實可能具備較佳的抓地表現。
                </p>

                {/* Strict Warning Box on felt-sole shoes */}
                <div className="my-6 p-5 bg-amber-50 rounded-xl border border-amber-300">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-base mb-2">
                    <ShieldAlert className="w-5 h-5 text-amber-600" />
                    <span>亞馬遜山岳協會 嚴正裝備警示：拒絕盲信神化裝備</span>
                  </div>
                  <p className="text-sm text-amber-950 mb-3 leading-relaxed">
                    在山野教育中，教練群嚴格要求學員建立客觀裝備觀。<strong>以下四種錯誤認知具有高度危險性，必須徹底消除：</strong>
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                    <div className="bg-white/90 p-3 rounded-lg border border-amber-200 text-amber-950 font-medium">
                      ✕ 禁忌迷思一：溯溪鞋一定安全
                    </div>
                    <div className="bg-white/90 p-3 rounded-lg border border-amber-200 text-amber-950 font-medium">
                      ✕ 禁忌迷思二：溯溪鞋一定防滑
                    </div>
                    <div className="bg-white/90 p-3 rounded-lg border border-amber-200 text-amber-950 font-medium">
                      ✕ 禁忌迷思三：穿溯溪鞋不會滑
                    </div>
                    <div className="bg-white/90 p-3 rounded-lg border border-amber-200 text-amber-950 font-medium">
                      ✕ 禁忌迷思四：溯溪鞋適合所有登山環境
                    </div>
                  </div>
                  <p className="text-xs text-amber-900/90 mt-3 leading-relaxed">
                    <strong>真實物理實況：</strong>
                    毛氈底在水中石頭上表現優良，但一旦離開溪水走到乾燥硬泥陡坡、松針林道或乾燥碎石斜坡時，毛氈纖維完全無法像深齒橡膠刻痕般咬住土壤，反而會像穿著拖鞋踩在溜滑梯上一樣極速失速滑倒！鞋底永遠只是對應特定界面的物理工具，絕無放之四海皆準的萬能防滑鞋。
                  </p>
                </div>
              </section>

              {/* 5. SECTION: 重心與踩點 */}
              <section id="section-center-of-gravity" className="py-10 border-b border-stone-200">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 uppercase tracking-wider mb-2">
                  <span>教學模組 05 & 09</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  重心與踩點
                </h2>

                <p className="text-stone-700 leading-relaxed text-base">
                  登山走得穩不穩，本質上是人體重心（Center of Gravity / Mass）與接觸踩點之間幾何關係的動態調配。
                </p>

                <div className="grid md:grid-cols-3 gap-4 my-6 text-sm">
                  <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs">
                    <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5">
                      <Footprints className="w-4 h-4 text-emerald-700" />
                      踩點選擇原則
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      優先尋找岩石或土坡上的<strong>水平微凹槽</strong>。斜面上若有微小平台，能讓重力垂直向下壓緊接觸面，產生最大靜摩擦阻力。避免踩在傾斜面或圓錐頂端。
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs">
                    <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5">
                      <Scale className="w-4 h-4 text-emerald-700" />
                      全腳掌支撐面積
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      盡可能以全腳掌或前腳掌大面積貼合地面，避免只用鞋尖或鞋跟單點承重。更大的接觸面積意味著更均勻的壓力分佈，大幅降低鞋底打滑的剪切極限。
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs">
                    <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5">
                      <Activity className="w-4 h-4 text-emerald-700" />
                      身體連續動作系統
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      <strong>腳踝、膝蓋、髖部、軀幹</strong>構成連貫的動力閉環鏈。不要將某一種固定姿勢（如死板的直立或固定彎腰）描述成所有坡度都適用；關節必須隨坡度變化隨機微調。
                    </p>
                  </div>
                </div>
              </section>

              {/* 6. SECTION: 下坡不是單純煞車 */}
              <section id="section-downhill-braking" className="py-10 border-b border-stone-200">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 uppercase tracking-wider mb-2">
                  <span>教學模組 06</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  下坡不是單純煞車
                </h2>

                <p className="text-stone-700 leading-relaxed text-base">
                  在多數登山者的下坡經驗中，膝蓋劇痛與大腿股四頭肌燃燒是最常見的痛點。這通常源於錯誤的力學心態：把下坡當成一連串「急踩煞車」的對抗運動。每跨出一步，就用膝蓋完全打直或鎖死的方式硬生生把身體擋住。
                </p>

                <div className="my-6 p-5 bg-stone-900 text-white rounded-xl border border-stone-800">
                  <div className="text-emerald-400 font-mono text-xs uppercase tracking-wider mb-1">
                    亞馬遜山岳協會 下坡哲學
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-white mb-2">
                    不是不用力，而是不把力浪費在對抗慣性。
                  </div>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    下坡的真正技術，在於<strong>「管理慣性」</strong>。透過提前預判地形、精準挑選踩點、控制身體重心落點，讓下一步自然流暢地承接上一個動作留下的位能動量。利用微曲的膝蓋和彈性足踝充當懸吊避震器，將下落衝擊化為向前進的平順力量，從根本上減少不必要的體能耗竭與關節勞損。
                  </p>
                </div>
              </section>

              {/* 7. SECTION: 視線、步幅與預判 */}
              <section id="section-vision-stride" className="py-10 border-b border-stone-200">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 uppercase tracking-wider mb-2">
                  <span>教學模組 07 & 08</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  視線、步幅與預判
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 mb-2 flex items-center gap-2">
                      <Eye className="w-5 h-5 text-emerald-800" />
                      視線與前瞻預判：不要只看腳尖
                    </h3>
                    <p className="text-stone-700 leading-relaxed text-base">
                      人在緊張或疲勞時，視線容易不由自主地鎖定在自己腳尖正前方 30 公分處。這種「管狀視野」極度危險。
                      正確的視線應維持立體分層切換：提前判斷<strong>下一腳的落點</strong>、<strong>再下一步的連續路徑</strong>、乃至<strong>整段 5～10 公尺地形</strong>的落差與走勢。唯有視線提前抵達，大腦才有充足時間預先規劃速度、踩點與身體轉向。
                    </p>
                  </div>

                  <div className="bg-stone-100 p-5 rounded-xl border border-stone-200">
                    <h3 className="text-base font-bold text-stone-900 mb-2">
                      步幅與步頻的客觀調節
                    </h3>
                    <p className="text-sm text-stone-700 leading-relaxed mb-3">
                      在碎石、樹根或濕滑複雜地形下，<strong>適當縮短步幅</strong>能讓著地點更接近身體垂直投影重心，萬一踩點發生微幅滑動，另一隻腳能以極短時間重新完成補位支撐，大幅增加重新平衡的機會。
                    </p>
                    <div className="p-3 bg-white rounded-lg border border-stone-300 text-xs text-stone-700">
                      <strong>教學準則提醒：</strong>
                      協會嚴禁將「走小碎步」教條化成所有地形的死板規則！在平坦寬敞的松針緩下坡，過於細碎的步幅會使步頻暴增、消耗心肺體能。步幅應當如同汽車變速箱，因應路況自由縮放切換。
                    </div>
                  </div>
                </div>
              </section>

              {/* 8. SECTION: 登山杖：輔助而非替代 */}
              <section id="section-trekking-poles" className="py-10 border-b border-stone-200">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 uppercase tracking-wider mb-2">
                  <span>教學模組 10 & 11</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  登山杖：輔助而非替代
                </h2>

                <p className="text-stone-700 leading-relaxed text-base">
                  登山杖是卓越的輔助工具，但它永遠不是取代雙腿核心承重的替代品。
                </p>

                <p className="text-stone-700 leading-relaxed text-base mt-2">
                  尤其在下坡時，許多登山者因為恐懼而將登山杖尖插在正前方很遠的地面。為了用手腕撐住身體，上半身勢必向前過度延伸，直接導致
                  <strong>身體重心被強行牽引向前移出支撐底面</strong>。一旦杖尖在碎石或浮葉上滑開，整個人將毫無懸念地向前俯衝翻滾！
                </p>

                {/* Biomechanical demonstrator component */}
                <InteractiveBiomechanicalDemonstrator />

                <div className="mt-6 p-5 bg-stone-100 rounded-xl border border-stone-200">
                  <h3 className="text-base font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-emerald-700" />
                    注意力分配與認知負荷
                  </h3>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    使用雙杖時，大腦每走一步除了要計算腳下踩點，還必須額外連續判斷：<strong>左杖支點</strong>、<strong>右杖支點</strong>、<strong>杖尖落點是否插進石縫卡死</strong>、以及<strong>泥土支點是否具有足夠抗壓可靠性</strong>。
                    在複雜地形、岩壁攀爬或暴露感強烈的瘦稜上，雙杖會急劇佔用大腦有限的注意力資源。適時將雙杖收攏或轉為單杖、甚至空出雙手，是進階安全管理的重要修為。
                  </p>
                </div>
              </section>

              {/* 9. SECTION: 雙手與地形利用 */}
              <section id="section-hands-terrain" className="py-10 border-b border-stone-200">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 uppercase tracking-wider mb-2">
                  <span>教學模組 12 & 13</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  雙手與地形利用
                </h2>

                <p className="text-stone-700 leading-relaxed text-base">
                  空出的雙手是登山者最天然的動態平衡翼。雙手可以：維持身體空間平衡、抓握粗壯健康樹幹、輕扶穩定岩面獲取觸覺反饋、改變身體面向以側身過地形。
                </p>

                {/* Tree branches & Yushan cane warning */}
                <div className="my-6 p-5 bg-stone-100 rounded-xl border border-stone-300">
                  <h3 className="text-base font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-amber-700" />
                    樹枝與箭竹的致命誤區：不可預設為可靠確保點
                  </h3>
                  <p className="text-sm text-stone-700 leading-relaxed mb-2">
                    在箭竹林或陡坡攀爬時，許多人習慣看到身旁有樹枝或整叢箭竹就一把抓過去。
                    <strong>「抓住」絕對不等於「可以把全身 60～80 公斤重量掛上去」！</strong>
                  </p>
                  <ul className="text-xs sm:text-sm text-stone-600 space-y-1.5 list-disc list-inside">
                    <li>枯枝可能內部已經中空腐朽，受力瞬間齊根斷裂。</li>
                    <li>高山箭竹根系極淺，整叢拉扯極可能連根拔起，使登山者連人帶竹直接墜落。</li>
                    <li>樹枝與箭竹僅能作為「微幅借力輔助」或「引導身體面向的觸覺參考」，雙腳踩點才是真正的生命線。</li>
                  </ul>
                </div>
              </section>

              {/* 10. SECTION: 繩索的正確理解 */}
              <section id="section-ropes" className="py-10 border-b border-stone-200">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 uppercase tracking-wider mb-2">
                  <span>教學模組 14</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  繩索的正確理解
                </h2>

                <p className="text-stone-700 leading-relaxed text-base">
                  台灣山徑上常見形形色色的架設繩索。許多人以為「看到繩子就一定要拉」，這是一大安全隱憂。在野外，一條固定繩索可能扮演截然不同的角色：
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 my-5 text-xs sm:text-sm">
                  <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs">
                    <span className="font-bold text-stone-900 block mb-1">1. 路線界定與邊界</span>
                    <span className="text-stone-600">
                      提示正確路徑走向，防止登山者在濃霧或黑夜中偏離步道走入崩壁。
                    </span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs">
                    <span className="font-bold text-stone-900 block mb-1">2. 危險防墜警戒線</span>
                    <span className="text-stone-600">
                      標記路基淘空斷面，警示切勿靠近邊緣，此類繩索絕對不可用力抓拉。
                    </span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs">
                    <span className="font-bold text-stone-900 block mb-1">3. 方向提示與輕扶</span>
                    <span className="text-stone-600">
                      在急陡坡輔助平衡，手掌微扣隨身體移動滑動，不施加重大拉力。
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl text-xs sm:text-sm text-emerald-950 leading-relaxed">
                  <strong>核心觀念：</strong>
                  看到繩子不代表一定要拉。當你用力死拉繩索時，向外的拉力往往會改變你原本穩定的身體重心，把腳底從垂直受壓的踩點上拔離！此外，風化日曬的舊繩、錨點鬆動的枯樹，都隨時可能在重力拉扯下脫落。學會手腳三點穩踏地形，繩索僅作最末端的應急輔助。
                </div>
              </section>

              {/* 11. SECTION: 下坡完整動作流程 */}
              <section id="section-descent-workflow" className="py-10 border-b border-stone-200">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 uppercase tracking-wider mb-2">
                  <span>教學模組 15, 16 & 17</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  下坡完整動作流程
                </h2>

                <p className="text-stone-700 leading-relaxed text-base mb-4">
                  清晰理解人體與工具的層次關係：
                  <strong>鞋子</strong>提供摩擦條件；
                  <strong>登山杖</strong>提供幾何額外支點；
                  <strong>繩索</strong>是特定情境下的非絕對輔助；
                  <strong>地形</strong>可供利用但可靠性步步需驗證；
                  <strong>人體</strong>才是踩點、重心、平衡與動作控制的主宰。
                </p>

                {/* 8-step Downhill workflow */}
                <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 my-6 border border-stone-800">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-emerald-400" />
                    標準下坡連貫動作流程（八步閉環循環）
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm">
                    {[
                      { step: '01', title: '先看地形', desc: '提前遠眺前方 5～10 公尺坡度、地質轉折與落差。' },
                      { step: '02', title: '預判', desc: '大腦在 0.5 秒內生成未來 2～3 步的最佳行進連貫軌跡。' },
                      { step: '03', title: '選擇踩點', desc: '篩除虛浮碎石與濕圓樹根，鎖定水平凹槽或實硬土塊。' },
                      { step: '04', title: '判斷重心', desc: '維持軀幹中立，骨盆微下沉，確保垂直重心投射在支撐底面。' },
                      { step: '05', title: '決定步幅與速度', desc: '因應坡度適度收窄步幅，維持平穩節奏，不突然急煞。' },
                      { step: '06', title: '視需要使用工具或雙手', desc: '登山杖身側輔助點地，雙手自然張開維持空間平衡。' },
                      { step: '07', title: '控制慣性', desc: '屈膝緩衝下墜動量，不與重力硬碰硬，轉化為下一步動能。' },
                      { step: '08', title: '準備下一個踩點', desc: '著地瞬間視線已鎖定次一踩點，完成無縫動作承接。' },
                    ].map((item) => (
                      <div
                        key={item.step}
                        className="flex items-start gap-3 p-3 rounded-xl bg-stone-800/70 border border-stone-700/60"
                      >
                        <span className="font-mono text-emerald-400 font-bold text-sm">
                          {item.step}
                        </span>
                        <div className="flex-1">
                          <strong className="text-white text-sm block">{item.title}</strong>
                          <span className="text-stone-300 text-xs">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backpack biomechanics */}
                <div className="p-5 bg-stone-100 rounded-xl border border-stone-200 mt-6">
                  <h3 className="text-base font-bold text-stone-900 mb-2">
                    背包力學：重量與晃動對動態平衡的直接衝擊
                  </h3>
                  <p className="text-sm text-stone-700 leading-relaxed mb-2">
                    背上的背包並非靜止重量，而是動態系統的一部分。
                    當背包背負系統未調整緊貼、或者內部裝備鬆散未妥善打包時，行進間背包的<strong>左右晃動</strong>與<strong>上下位移延遲</strong>會產生強烈的額外力矩，在腳掌落地瞬間破壞身體重心平衡。
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    <strong>客觀標準聲明：</strong>
                    協會拒絕引用缺乏科學依據的固定幾公斤死板標準。負重能力因個人體重、核心肌力與體能訓練而異；核心在於將重物緊靠上背脊椎骨、拉緊壓縮帶消除晃動，確保重心不被拖曳偏離。
                  </p>
                </div>
              </section>

              {/* 12. SECTION: 實作練習 */}
              <section id="practice-drills" className="py-10 border-b border-stone-200">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 uppercase tracking-wider mb-2">
                  <span>教學模組 18</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  實作練習
                </h2>
                <p className="text-stone-700 leading-relaxed text-base mb-6">
                  知識只有在肌肉與神經元形成本能反射時，才能在危急時刻拯救生命。請於安全緩坡環境下，逐一完成以下六大核心實作課目：
                </p>

                {/* Interactive Practice Checklist */}
                <PracticeChecklist />
              </section>

              {/* 13. SECTION: 本章總結 */}
              <section id="chapter-summary" className="py-10">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 uppercase tracking-wider mb-2">
                  <span>課綱總結</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  本章總結
                </h2>

                <div className="bg-stone-900 text-stone-100 p-6 sm:p-8 rounded-2xl border border-stone-800 space-y-4">
                  <p className="text-base sm:text-lg text-emerald-300 font-medium leading-relaxed">
                    走過山林，步步皆是物理與生理的對話。
                  </p>
                  <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                    不要再寄望某雙神級登山鞋能在所有地形上牢牢吸附地面。
                    建立清晰的步道視野，縮短步幅留出動態微調彈性；
                    將登山杖與固定繩索視為有限支撐，而非全身重力的託付；
                    讓屈膝彈性管理重力慣性，讓每一步流暢承接上一步。
                  </p>
                </div>
              </section>

            </article>
          </main>

          {/* Sticky Table of Contents (Desktop Sidebar) */}
          <TableOfContents sections={SECTIONS} />

        </div>
      </div>

      <Footer />
    </div>
  );
}
