'use client';

import { useState, useEffect } from 'react';
import Canvas from '@/components/Canvas';
import ChatPanel from '@/components/ChatPanel';
import ControlPanel from '@/components/ControlPanel';
import Header from '@/components/Header';

export default function Home() {
  const [sceneParams, setSceneParams] = useState({
    speed: 1,
    scale: 1,
    color: '#FF006E',
    style: 'smooth',
    intensity: 0.5,
  });

  const [isStreamMode, setIsStreamMode] = useState(false);

  if (isStreamMode) {
    return (
      <div className="w-screen h-screen bg-black relative">
        <Canvas params={sceneParams} />
        <button
          onClick={() => setIsStreamMode(false)}
          className="absolute top-4 right-4 px-4 py-2 bg-lounge-pink rounded hover:bg-opacity-80 font-bold z-50"
        >
          Exit Stream
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-lounge-darker">
      {/* Header */}
      <Header onStreamMode={() => setIsStreamMode(true)} />

      {/* Main Content */}
      <div className="flex flex-1 gap-4 p-4 overflow-hidden">
        {/* Canvas Area */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex-1 bg-lounge-dark rounded-lg border border-lounge-cyan/20 overflow-hidden shadow-lg">
            <Canvas params={sceneParams} />
          </div>

          {/* Control Panel */}
          <ControlPanel params={sceneParams} onChange={setSceneParams} />
        </div>

        {/* Right Sidebar */}
        <div className="w-80 flex flex-col gap-4 overflow-hidden">
          {/* Chat Panel */}
          <ChatPanel onParamsChange={setSceneParams} />
        </div>
      </div>
    </div>
  );
}
