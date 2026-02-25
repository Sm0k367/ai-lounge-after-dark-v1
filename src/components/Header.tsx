'use client';

interface HeaderProps {
  onStreamMode: () => void;
}

export default function Header({ onStreamMode }: HeaderProps) {
  return (
    <header className="bg-lounge-darker border-b border-lounge-cyan/20 px-6 py-4 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-lounge-pink to-lounge-cyan rounded-lg flex items-center justify-center font-bold text-lg animate-float">
            🎤
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-lounge-pink via-lounge-cyan to-lounge-gold bg-clip-text text-transparent">
              AI Lounge After Dark
            </h1>
            <p className="text-xs text-lounge-cyan">Create • Collaborate • Stream</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onStreamMode}
            className="px-6 py-2 bg-lounge-pink hover:bg-opacity-80 rounded font-bold transition animate-pulse-glow"
          >
            ⛶ Stream Mode
          </button>
          <button className="px-6 py-2 bg-lounge-cyan/10 hover:bg-lounge-cyan/20 rounded font-bold text-lounge-cyan border border-lounge-cyan/30 transition">
            📤 Export
          </button>
          <button className="px-6 py-2 bg-lounge-cyan/10 hover:bg-lounge-cyan/20 rounded font-bold text-lounge-cyan border border-lounge-cyan/30 transition">
            🔗 Share
          </button>
        </div>
      </div>
    </header>
  );
}
