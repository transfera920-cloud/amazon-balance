import { useState } from 'react';
import { ShieldCheck, AlertTriangle, Crosshair, Sparkles } from 'lucide-react';

export function InteractiveBiomechanicalDemonstrator() {
  const [poleMode, setPoleMode] = useState<'correct' | 'dangerous'>('correct');
  const [slopeAngle, setSlopeAngle] = useState<'moderate' | 'steep'>('steep');

  return (
    <div
      id="biomechanical-interactive-demonstrator"
      className="my-8 bg-stone-100 rounded-2xl border border-stone-300/80 p-5 sm:p-7 shadow-xs"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200">
        <div>
          <span className="text-xs font-mono font-semibold text-emerald-800 uppercase tracking-wider">
            人體力學模型展示
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-0.5">
            下坡重心位移與登山杖支點力學比對
          </h3>
        </div>

        {/* Toggle Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="bg-stone-200 p-1 rounded-xl flex items-center text-xs">
            <button
              type="button"
              onClick={() => setSlopeAngle('moderate')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                slopeAngle === 'moderate'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              中度緩坡 (15°)
            </button>
            <button
              type="button"
              onClick={() => setSlopeAngle('steep')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                slopeAngle === 'steep'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              陡峭下切 (35°)
            </button>
          </div>

          <div className="bg-stone-200 p-1 rounded-xl flex items-center text-xs">
            <button
              type="button"
              onClick={() => setPoleMode('correct')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                poleMode === 'correct'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              正確：近身輔助支點
            </button>
            <button
              type="button"
              onClick={() => setPoleMode('dangerous')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                poleMode === 'dangerous'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              危險：過遠遠伸插杖
            </button>
          </div>
        </div>
      </div>

      {/* SVG Canvas Schematic */}
      <div className="mt-5 bg-stone-900 text-white rounded-xl p-5 relative overflow-hidden border border-stone-800">
        <div className="grid md:grid-cols-12 gap-6 items-center">
          {/* Left Diagram Visualization */}
          <div className="md:col-span-6 flex flex-col items-center justify-center p-3 bg-stone-950/60 rounded-lg border border-stone-800">
            <svg
              viewBox="0 0 360 240"
              className="w-full max-w-sm h-auto"
              aria-label="人體重心與登山杖下坡力學示意圖"
            >
              {/* Slope Line */}
              <line
                x1="20"
                y1={slopeAngle === 'steep' ? '60' : '90'}
                x2="340"
                y2={slopeAngle === 'steep' ? '210' : '180'}
                stroke="#78716c"
                strokeWidth="4"
                strokeDasharray="4 2"
              />
              <text
                x="28"
                y={slopeAngle === 'steep' ? '50' : '80'}
                fill="#a8a29e"
                fontSize="11"
                fontFamily="monospace"
              >
                斜坡傾角 ({slopeAngle === 'steep' ? '35°' : '15°'})
              </text>

              {/* Human Figure (Abstract Biomechanical Joints) */}
              {/* Feet contact point on slope */}
              <circle cx="160" cy={slopeAngle === 'steep' ? '130' : '135'} r="6" fill="#10b981" />
              <text x="135" y={slopeAngle === 'steep' ? '148' : '153'} fill="#10b981" fontSize="10">
                腳掌支撐面
              </text>

              {/* Knee joint */}
              <circle cx="152" cy={slopeAngle === 'steep' ? '100' : '105'} r="5" fill="#34d399" />

              {/* Pelvis / Center of Mass */}
              <circle
                cx={poleMode === 'dangerous' ? '185' : '150'}
                cy="75"
                r="7"
                fill={poleMode === 'dangerous' ? '#f59e0b' : '#38bdf8'}
              />
              <text
                x={poleMode === 'dangerous' ? '198' : '100'}
                y="75"
                fill={poleMode === 'dangerous' ? '#fbbf24' : '#7dd3fc'}
                fontSize="11"
                fontWeight="bold"
              >
                重心 (COM)
              </text>

              {/* Center of mass plumb line (gravity vector) */}
              <line
                x1={poleMode === 'dangerous' ? '185' : '150'}
                y1="75"
                x2={poleMode === 'dangerous' ? '185' : '150'}
                y2={slopeAngle === 'steep' ? '190' : '170'}
                stroke={poleMode === 'dangerous' ? '#ef4444' : '#38bdf8'}
                strokeWidth="2"
                strokeDasharray="3 3"
              />
              <polygon
                points={
                  poleMode === 'dangerous'
                    ? '181,185 189,185 185,193'
                    : '146,165 154,165 150,173'
                }
                fill={poleMode === 'dangerous' ? '#ef4444' : '#38bdf8'}
              />

              {/* Torso */}
              <line
                x1={poleMode === 'dangerous' ? '185' : '150'}
                y1="75"
                x2={poleMode === 'dangerous' ? '200' : '148'}
                y2="42"
                stroke="#e7e5e4"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Head */}
              <circle
                cx={poleMode === 'dangerous' ? '208' : '147'}
                cy="30"
                r="10"
                fill="#d6d3d1"
              />

              {/* Sight / Eye line of gaze */}
              <line
                x1={poleMode === 'dangerous' ? '216' : '155'}
                y1="30"
                x2="270"
                y2="120"
                stroke="#a7f3d0"
                strokeWidth="1.5"
                strokeDasharray="2 2"
              />
              <text x="250" y="112" fill="#a7f3d0" fontSize="9">
                預判視線
              </text>

              {/* Trekking Pole */}
              {poleMode === 'dangerous' ? (
                // Dangerous: Pole planted way ahead
                <g>
                  <line
                    x1="200"
                    y1="50"
                    x2="265"
                    y2={slopeAngle === 'steep' ? '175' : '155'}
                    stroke="#f97316"
                    strokeWidth="3"
                  />
                  <circle
                    cx="265"
                    cy={slopeAngle === 'steep' ? '175' : '155'}
                    r="5"
                    fill="#ef4444"
                  />
                  <text
                    x="240"
                    y={slopeAngle === 'steep' ? '195' : '175'}
                    fill="#f87171"
                    fontSize="10"
                    fontWeight="bold"
                  >
                    杖尖過遠 (危險)
                  </text>
                </g>
              ) : (
                // Correct: Pole planted close to feet base
                <g>
                  <line
                    x1="148"
                    y1="50"
                    x2="175"
                    y2={slopeAngle === 'steep' ? '137' : '142'}
                    stroke="#10b981"
                    strokeWidth="3"
                  />
                  <circle
                    cx="175"
                    cy={slopeAngle === 'steep' ? '137' : '142'}
                    r="4"
                    fill="#34d399"
                  />
                  <text
                    x="182"
                    y={slopeAngle === 'steep' ? '143' : '147'}
                    fill="#6ee7b7"
                    fontSize="10"
                  >
                    身側輔助支點
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* Right Explanation & Biomechanical Analysis */}
          <div className="md:col-span-6 space-y-3 text-xs sm:text-sm">
            {poleMode === 'dangerous' ? (
              <div className="bg-amber-950/40 border border-amber-800/80 rounded-lg p-4">
                <div className="flex items-center gap-2 text-amber-300 font-bold mb-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>危險模式解析：杖尖放得太遠的力學陷阱</span>
                </div>
                <p className="text-stone-200 leading-relaxed">
                  下坡時，若為了尋找心理依靠而將登山杖尖遠遠插在前下方，上半身必然隨手部向前延伸而
                  <strong>過度前傾</strong>。此時身體重心（COM）被迫越過腳掌支撐面下方。
                </p>
                <div className="mt-2 text-amber-200 font-medium">
                  致命連鎖反應：一旦遠處杖尖在浮土或落葉上滑脫，人體將失去抗力矩，瞬間向前仆倒滾落。
                </div>
              </div>
            ) : (
              <div className="bg-emerald-950/40 border border-emerald-800/80 rounded-lg p-4">
                <div className="flex items-center gap-2 text-emerald-300 font-bold mb-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>標準模式解析：杖身與軀幹維持動態同軸</span>
                </div>
                <p className="text-stone-200 leading-relaxed">
                  杖尖落點置於前腳同側身旁或稍前處（約半步距離）。手肘微彎彈性吸震，
                  <strong>身體重心依然垂直落在雙腳支撐基底範圍內</strong>。
                </p>
                <div className="mt-2 text-emerald-200 font-medium">
                  力學優勢：登山杖只承擔 15%~20% 的動態微調力，主要平衡與支撐始終由雙腿屈膝關節鏈穩定承接。
                </div>
              </div>
            )}

            <div className="bg-stone-800/80 rounded-lg p-3.5 border border-stone-700 text-xs text-stone-300 space-y-1.5">
              <div className="flex items-center gap-1.5 font-semibold text-white">
                <Crosshair className="w-3.5 h-3.5 text-emerald-400" />
                <span>連續運動閉環系統：關節協同</span>
              </div>
              <p>
                <strong>腳踝：</strong>貼合微地形坡度角；
                <strong>膝蓋：</strong>保持彈性微曲，不鎖死對抗慣性；
                <strong>髖部：</strong>吸收下落衝擊，調控骨盆位移；
                <strong>軀幹：</strong>核心微收，視線眺望 2～3 步外預判路徑。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
