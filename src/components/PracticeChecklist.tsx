import { useState } from 'react';
import { CheckSquare, Square, Award, RotateCcw, HelpCircle } from 'lucide-react';
import { DrillItem } from '../types';

const DRILLS: DrillItem[] = [
  {
    id: 'drill-cog',
    category: '重心控制',
    title: '微坡度單腳靜態與動態重心平衡測試',
    objective: '體會重力垂線與腳掌支撐面（Base of Support）的空間對應，戒除下坡過度後仰。',
    method: [
      '在 15 度緩斜坡上，將全身重量 100% 移轉至單腳。',
      '膝蓋微屈保持阻尼彈性，另一腳懸空於空中 5 秒。',
      '感受腳掌前掌、外側緣與腳跟的三點受壓平衡。',
    ],
    keyObservation: '軀幹中立時，足底受力均勻；一旦軀幹過度前傾或後縮，小腿前側或阿基里斯腱會劇烈緊繃。',
    commonMistake: '害怕摔倒而將骨盆向後坐，導致重心懸空在腳跟後方，腳掌極易瞬間鏟飛。',
  },
  {
    id: 'drill-stride',
    category: '步幅與步頻',
    title: '階梯與碎石路段「半步節拍」快切切換',
    objective: '擺脫下坡固定大步邁出的壞習慣，養成依據路面粗糙度動態縮小步幅的本能反射。',
    method: [
      '選擇一段連續不規則下坡階梯或土徑。',
      '刻意將平時習慣的步幅縮短為 1/2 至 2/3。',
      '維持輕快的「踏、踏、踏」連續步頻，每一步著地時間控制在 0.3 秒以內。',
    ],
    keyObservation: '短步幅下，即使某一個踩點踩到鬆石微滑，另一腳已緊接落地，能立即接管身體平衡。',
    commonMistake: '把「縮短步幅」變成所有地形的僵化教條，在平緩寬闊土徑也走小碎步，平白浪費體能。',
  },
  {
    id: 'drill-gaze',
    category: '視線預判',
    title: '三點視距掃描法（腳下－次步－全局）',
    objective: '訓練眼睛不要死盯著腳尖正前方 30 公分，建立立體前瞻的路徑決策模型。',
    method: [
      '起步前，先用 2 秒抬頭掃描未來 5 至 8 公尺的整體行進稜線與落差。',
      '行走中，視線主要聚焦在前方 2 至 3 步（約 2 公尺）處挑選下一個最佳踩點。',
      '腳尖即將落下的瞬間，僅用眼睛餘光做最後微調確認，視線早已投射向再下一步。',
    ],
    keyObservation: '視線提前到達，大腦有充足時間計算重心轉移軌跡，行進流暢度與速度自然提升。',
    commonMistake: '全程低頭盯著自己鞋尖，走到大坑洞或斷層前才被迫緊急急煞，重重衝擊膝蓋。',
  },
  {
    id: 'drill-hands',
    category: '雙手平衡',
    title: '雙手開展本體感覺與無支點通過障礙',
    objective: '理解雙臂如走鋼索者的平衡桿，學會利用輕觸與手臂動態擺動調控身體轉動慣量。',
    method: [
      '收起登山杖，徒手走在凹凸不平的林道或大石塊邊緣。',
      '兩手手肘微彎，自然張開於身體兩側腰際高度。',
      '經過側傾岩壁時，手掌僅以指腹「輕觸滑動」獲取空間反饋，不將體重用力下壓。',
    ],
    keyObservation: '放鬆的雙臂能瞬間補償腳下踩點微晃，減少大腦驚慌反應。',
    commonMistake: '手一碰到岩石或樹幹就死命狠抓，反而將身體強行拉向外側，拉歪下肢重心線。',
  },
  {
    id: 'drill-poles-comparison',
    category: '登山杖與注意力',
    title: '無杖／單杖／雙杖 同一地形對比實驗',
    objective: '親身體會登山杖帶來的支撐輔助與大腦注意力（Attention）認知負擔的權衡。',
    method: [
      '在同一段包含石階、樹根與土坡的 30 公尺下坡重複走三次。',
      '第 1 次：徒手無杖，感受純靠下肢關節彈性與雙臂自然平衡。',
      '第 2 次：單手握杖，另一手徒手，感受單側支點與空手反應靈活度。',
      '第 3 次：雙手握杖，體會大腦同時計算「雙腳踩點 + 左右兩支杖尖落點」的注意力分配。',
    ],
    keyObservation: '雙杖在平緩開闊下坡最省力；但遇到手腳並用的亂石落差時，雙杖可能卡住岩縫，反而大幅增加認知負擔。',
    commonMistake: '以為只要握雙杖就能如履平地，在複雜岩場捨不得收杖，導致無法騰出手抓岩角保命。',
  },
  {
    id: 'drill-terrain-reliability',
    category: '地形利用',
    title: '',
    objective: '徹底破除「看到繩子就拉、看到樹枝就抓、看到石塊就踩」的盲從危險直覺。',
    method: [
      '遇到懸空石塊，先以杖尖或腳掌前緣輕敲試探是否具備空洞聲或晃動。',
      '遇到樹枝或箭竹，先以手腕試拉 20% 力道確認根系是否牢固，確認後僅作扶持輔助。',
      '遇到山徑垂吊繩索，先觀察固定錨點是否風化生鏽，雙腳穩踏地面，手部僅維持引導。',
    ],
    keyObservation: '所有外界地形與工具都是「動態未知數」，唯有身體主動試探驗證後方可借力。',
    commonMistake: '把全身重量直接撲倒懸掛在腐朽枯枝或風化細繩上，發生扯斷墜落事故。',
  },
];

export function PracticeChecklist() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  const toggleDrill = (id: string) => {
    setCompleted((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const resetAll = () => {
    setCompleted({});
  };

  const completedCount = Object.values(completed).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / DRILLS.length) * 100);

  return (
    <div
      id="practice-drills-module"
      className="my-10 bg-white rounded-2xl border border-stone-200 p-5 sm:p-7 shadow-xs"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-stone-200">
        <div>
          <div className="flex items-center gap-2 text-emerald-800 text-xs font-mono uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>野外現地教學指引</span>
          </div>
          <h3 className="text-xl font-bold text-stone-900 mt-1">
            六大核心能力實作訓練檢核表
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            由亞馬遜國家山岳協會教練群編纂，涵蓋重心、步幅、視線、雙手、登山杖與地形識別。
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-xs text-stone-500 font-mono">已完成練習</div>
            <div className="text-lg font-bold text-emerald-800 font-mono">
              {completedCount} / {DRILLS.length} ({progressPercent}%)
            </div>
          </div>
          {completedCount > 0 && (
            <button
              type="button"
              onClick={resetAll}
              className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg transition-colors"
              title="重設所有打勾項目"
              aria-label="重設練習進度"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-stone-100 rounded-full h-2.5 my-5 overflow-hidden">
        <div
          className="bg-emerald-700 h-2.5 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Drills List */}
      <div className="space-y-4">
        {DRILLS.map((drill, index) => {
          const isDone = !!completed[drill.id];
          return (
            <div
              key={drill.id}
              className={`rounded-xl border transition-all p-4 sm:p-5 ${
                isDone
                  ? 'bg-emerald-50/50 border-emerald-300'
                  : 'bg-stone-50/80 border-stone-200 hover:border-stone-300'
              }`}
            >
              <div className="flex items-start gap-3">
                <button
                  type="button"
                  onClick={() => toggleDrill(drill.id)}
                  className="mt-1 text-emerald-800 focus:outline-none shrink-0"
                  aria-label={
                    isDone
                      ? `標記 ${drill.title || drill.category} 為未完成`
                      : `標記 ${drill.title || drill.category} 為已完成`
                  }
                >
                  {isDone ? (
                    <CheckSquare className="w-5 h-5 text-emerald-700" />
                  ) : (
                    <Square className="w-5 h-5 text-stone-400 hover:text-stone-600" />
                  )}
                </button>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-stone-200 text-stone-700">
                      練習 0{index + 1} · {drill.category}
                    </span>
                    {drill.title ? (
                      <h4 className="text-base font-bold text-stone-900">
                        {drill.title}
                      </h4>
                    ) : null}
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 mb-3">
                    <strong>訓練目標：</strong>
                    {drill.objective}
                  </p>

                  {/* Implementation steps */}
                  <div className="bg-white rounded-lg p-3 border border-stone-200/70 text-xs sm:text-sm text-stone-700 space-y-1.5 mb-3">
                    <span className="font-semibold text-stone-900 block text-xs uppercase tracking-wider text-stone-500">
                      操作步驟流程：
                    </span>
                    {drill.method.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2">
                        <span className="font-mono text-emerald-800 font-bold text-xs">
                          0{sIdx + 1}.
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key observation & mistake */}
                  <div className="grid sm:grid-cols-2 gap-2 text-xs">
                    <div className="bg-emerald-100/50 text-emerald-950 p-2.5 rounded-md border border-emerald-200">
                      <span className="font-bold block mb-0.5 text-emerald-900">
                        ✓ 關鍵身體回饋與體會：
                      </span>
                      {drill.keyObservation}
                    </div>
                    <div className="bg-amber-50 text-amber-950 p-2.5 rounded-md border border-amber-200">
                      <span className="font-bold block mb-0.5 text-amber-900 flex items-center gap-1">
                        <HelpCircle className="w-3.5 h-3.5" />
                        常見致命盲點：
                      </span>
                      {drill.commonMistake}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
