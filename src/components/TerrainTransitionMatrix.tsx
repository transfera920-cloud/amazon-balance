import { useState } from 'react';
import { Waves, Mountain, ShieldAlert, ArrowRight, CheckCircle2, Footprints } from 'lucide-react';
import { TerrainStage } from '../types';

const TERRAIN_STAGES: TerrainStage[] = [
  {
    id: 'stage-water-rock',
    name: '水中岩石',
    frictionCondition: '水流動壓 + 矽藻青苔薄膜，動態摩擦係數極低且受水流側向浮力推擠。',
    supportAssessment: '無法單純肉眼判定是否鬆動；水光折射易造成深度誤判。',
    riskFactor: '盲目跨步踩入暗石縫、受水流沖擊瞬間失去單腳支撐。',
    tacticalAction: '以登山杖探測深度與穩固度，重心留在後腳，腳底垂直下壓試探，不跨大步。',
  },
  {
    id: 'stage-wet-rock',
    name: '濕岩（離水面）',
    frictionCondition: '表面殘留薄水膜與濕黏淤泥，靜摩擦力略高於水中，但傾角大時極易瞬間側滑。',
    supportAssessment: '尋找水平微凹槽、粗糙花崗岩晶體或無青苔侵蝕之背陰硬面。',
    riskFactor: '誤以為出水即安全，步伐急促發力蹬踏，導致腳掌打滑後仰。',
    tacticalAction: '利用全腳掌或前腳掌平貼受力，嚴禁腳尖單點點踏；降低重心緩慢轉移重量。',
  },
  {
    id: 'stage-muddy-bank',
    name: '溪岸泥土',
    frictionCondition: '飽水軟爛，剪切強度極低；鞋底深刻痕容易被黏土填平，造成「光胎效應」。',
    supportAssessment: '表層泥土無法提供足夠反作用力，易隨體重向下坍陷。',
    riskFactor: '鞋底卡滿爛泥後，踩下一處硬石時摩擦力徹底歸零。',
    tacticalAction: '踏於有草皮根系交織的實土塊，或先輕敲石塊甩脫鞋底厚泥；步幅縮小。',
  },
  {
    id: 'stage-tree-roots',
    name: '樹根',
    frictionCondition: '樹皮含水與外露木質部表面極其光滑，摩擦係數接近冰面；方向與受力垂直時極滑。',
    supportAssessment: '天然圓弧形表面無法提供水平支撐基底；浮根下常有空洞。',
    riskFactor: '踩踏濕滑圓弧樹根頂部，腳掌瞬間橫向滑脫扭傷腳踝。',
    tacticalAction: '原則上避開踩踏濕樹根！若非踩不可，腳掌應順應樹根凹折交會處，或踩在樹根前後的泥土基底。',
  },
  {
    id: 'stage-loose-scree',
    name: '碎石（Scree）',
    frictionCondition: '單顆碎石本身雖有摩擦力，但整體結構為不穩定的散體流動顆粒，受力即滑移滾動。',
    supportAssessment: '非固定岩體，支撐力取決於碎石層厚度與下層基底硬度。',
    riskFactor: '下坡以腳跟猛踩碎石，誘發整片石層連鎖崩滑與身體失速後摔。',
    tacticalAction: '控制下落動量，屈膝順應滑動慣性（滑步承接），保持兩腳前後錯位以隨時接替支撐。',
  },
  {
    id: 'stage-steep-slope',
    name: '陡坡（陡峭上攀／下切）',
    frictionCondition: '重力沿坡面分解的下滑分力急劇放大，對鞋底剪切力與腳踝關節力矩達到峰值。',
    supportAssessment: '垂直落差大，需要手腳三點並用的複合幾何支撐。',
    riskFactor: '上身過度貼近坡面導致腳跟浮起失去抓地面積，或下坡過度後仰重心失控。',
    tacticalAction: '軀幹與坡面保持空間，腳掌全掌貼地；善用之字形路徑分解直落坡度與重力慣性。',
  },
];

export function TerrainTransitionMatrix() {
  const [selectedStage, setSelectedStage] = useState<number>(0);
  const current = TERRAIN_STAGES[selectedStage];

  return (
    <div
      id="terrain-transition-matrix-interactive"
      className="my-8 bg-stone-900 text-stone-100 rounded-2xl border border-stone-800 p-5 sm:p-7 shadow-lg"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-stone-800">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <Waves className="w-4 h-4" />
            <span>教案核心模型 5.3</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
            地質界面切換鏈：水中岩石至陡坡的支撐重構
          </h3>
        </div>
        <div className="text-xs text-stone-400 bg-stone-800/80 px-3 py-1.5 rounded-full border border-stone-700 w-fit">
          點選階段查看支撐判斷轉換
        </div>
      </div>

      {/* Progression Steps Nav */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 my-5">
        {TERRAIN_STAGES.map((stage, idx) => {
          const isSelected = selectedStage === idx;
          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => setSelectedStage(idx)}
              className={`p-3 rounded-xl text-left transition-all relative border ${
                isSelected
                  ? 'bg-emerald-950/70 border-emerald-500 text-white shadow-md'
                  : 'bg-stone-800/60 border-stone-700/60 text-stone-300 hover:bg-stone-800 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-1">
                <span>0{idx + 1}</span>
                {idx < TERRAIN_STAGES.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-stone-500 hidden lg:block" />
                )}
              </div>
              <div className="font-semibold text-sm truncate">{stage.name}</div>
              {isSelected && (
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-emerald-500 rotate-45" />
              )}
            </button>
          );
        })}
      </div>

      {/* Detail Showcase Card */}
      <div className="bg-stone-950/80 rounded-xl border border-stone-850 p-5 sm:p-6 mt-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-emerald-300 mb-3">
          <Footprints className="w-4 h-4" />
          <span>第 0{selectedStage + 1} 階段分析：{current.name}</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div className="bg-stone-900/90 rounded-lg p-4 border border-stone-800">
            <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1.5">
              摩擦力與物理條件
            </h4>
            <p className="text-stone-200 leading-relaxed text-xs sm:text-sm">
              {current.frictionCondition}
            </p>
          </div>

          <div className="bg-stone-900/90 rounded-lg p-4 border border-stone-800">
            <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5" />
              潛在失控風險點
            </h4>
            <p className="text-stone-200 leading-relaxed text-xs sm:text-sm">
              {current.riskFactor}
            </p>
          </div>

          <div className="bg-stone-900/90 rounded-lg p-4 border border-stone-800">
            <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1.5">
              支撐力學重新評估
            </h4>
            <p className="text-stone-200 leading-relaxed text-xs sm:text-sm">
              {current.supportAssessment}
            </p>
          </div>

          <div className="bg-stone-900/90 rounded-lg p-4 border border-emerald-900/80 bg-emerald-950/30">
            <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              亞馬遜山岳協會 戰術動作指引
            </h4>
            <p className="text-emerald-100 leading-relaxed text-xs sm:text-sm font-medium">
              {current.tacticalAction}
            </p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
          <div className="flex items-center gap-1.5">
            <Mountain className="w-3.5 h-3.5 text-stone-500" />
            <span>核心結論：每換一種地面，都必須清零上一段的腳感，重新判斷支撐。</span>
          </div>
          <span className="font-mono text-stone-500">
            {selectedStage + 1} / {TERRAIN_STAGES.length}
          </span>
        </div>
      </div>
    </div>
  );
}
