'use client';

interface ControlPanelProps {
  params: {
    speed: number;
    scale: number;
    color: string;
    style: string;
    intensity: number;
  };
  onChange: (params: any) => void;
}

export default function ControlPanel({ params, onChange }: ControlPanelProps) {
  const handleChange = (key: string, value: any) => {
    onChange({ ...params, [key]: value });
  };

  return (
    <div className="bg-lounge-dark rounded-lg border border-lounge-cyan/20 p-4 shadow-lg">
      <h3 className="font-bold text-lg mb-4 text-lounge-cyan">⚙️ Parameters</h3>

      <div className="space-y-4">
        {/* Speed */}
        <div>
          <label className="text-sm text-lounge-cyan/80 block mb-2">
            Speed: {params.speed.toFixed(2)}x
          </label>
          <input
            type="range"
            min="0.1"
            max="3"
            step="0.1"
            value={params.speed}
            onChange={(e) => handleChange('speed', parseFloat(e.target.value))}
            className="w-full h-2 bg-lounge-cyan/20 rounded-lg appearance-none cursor-pointer accent-lounge-pink"
          />
        </div>

        {/* Scale */}
        <div>
          <label className="text-sm text-lounge-cyan/80 block mb-2">
            Scale: {params.scale.toFixed(2)}x
          </label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={params.scale}
            onChange={(e) => handleChange('scale', parseFloat(e.target.value))}
            className="w-full h-2 bg-lounge-cyan/20 rounded-lg appearance-none cursor-pointer accent-lounge-pink"
          />
        </div>

        {/* Intensity */}
        <div>
          <label className="text-sm text-lounge-cyan/80 block mb-2">
            Intensity: {(params.intensity * 100).toFixed(0)}%
          </label>
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.1"
            value={params.intensity}
            onChange={(e) => handleChange('intensity', parseFloat(e.target.value))}
            className="w-full h-2 bg-lounge-cyan/20 rounded-lg appearance-none cursor-pointer accent-lounge-pink"
          />
        </div>

        {/* Color */}
        <div>
          <label className="text-sm text-lounge-cyan/80 block mb-2">Color</label>
          <div className="flex gap-2">
            <input
              type="color"
              value={params.color}
              onChange={(e) => handleChange('color', e.target.value)}
              className="w-12 h-10 rounded cursor-pointer border border-lounge-cyan/30"
            />
            <div className="flex-1 flex gap-1">
              {['#FF006E', '#00D9FF', '#FFD60A', '#9D4EDD', '#00FF41'].map((color) => (
                <button
                  key={color}
                  onClick={() => handleChange('color', color)}
                  className={`flex-1 h-10 rounded border-2 transition ${
                    params.color === color
                      ? 'border-white'
                      : 'border-lounge-cyan/30 hover:border-lounge-cyan/60'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Style */}
        <div>
          <label className="text-sm text-lounge-cyan/80 block mb-2">Style</label>
          <div className="grid grid-cols-3 gap-2">
            {['smooth', 'geometric', 'organic'].map((style) => (
              <button
                key={style}
                onClick={() => handleChange('style', style)}
                className={`px-3 py-2 rounded text-sm font-bold transition ${
                  params.style === style
                    ? 'bg-lounge-pink text-white'
                    : 'bg-lounge-cyan/10 text-lounge-cyan hover:bg-lounge-cyan/20'
                }`}
              >
                {style.charAt(0).toUpperCase() + style.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
