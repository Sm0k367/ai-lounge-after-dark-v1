'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface ChatPanelProps {
  onParamsChange: (params: any) => void;
}

const COMMAND_SUGGESTIONS = [
  'Make it faster',
  'Change color to cyan',
  'Make it bigger',
  'Switch to geometric',
  'Increase intensity',
  'Make it slower',
  'Change to organic style',
  'Reset to default',
];

export default function ChatPanel({ onParamsChange }: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: '🎤 Welcome to AI Lounge After Dark! Describe what you want to see...',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const parseCommand = (text: string) => {
    const lowerText = text.toLowerCase();
    const params: any = {};

    // Speed commands
    if (lowerText.includes('faster')) params.speed = 2;
    if (lowerText.includes('slower')) params.speed = 0.5;

    // Scale commands
    if (lowerText.includes('bigger')) params.scale = 1.5;
    if (lowerText.includes('smaller')) params.scale = 0.7;

    // Color commands
    if (lowerText.includes('cyan')) params.color = '#00D9FF';
    if (lowerText.includes('pink')) params.color = '#FF006E';
    if (lowerText.includes('gold') || lowerText.includes('yellow')) params.color = '#FFD60A';
    if (lowerText.includes('purple')) params.color = '#9D4EDD';
    if (lowerText.includes('green')) params.color = '#00FF41';

    // Style commands
    if (lowerText.includes('geometric')) params.style = 'geometric';
    if (lowerText.includes('organic')) params.style = 'organic';
    if (lowerText.includes('smooth')) params.style = 'smooth';

    // Intensity commands
    if (lowerText.includes('intense') || lowerText.includes('bright')) params.intensity = 1;
    if (lowerText.includes('subtle') || lowerText.includes('dim')) params.intensity = 0.3;

    // Reset
    if (lowerText.includes('reset') || lowerText.includes('default')) {
      params.speed = 1;
      params.scale = 1;
      params.color = '#FF006E';
      params.style = 'smooth';
      params.intensity = 0.5;
    }

    return params;
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Parse command and update params
    const params = parseCommand(input);
    if (Object.keys(params).length > 0) {
      onParamsChange(params);
    }

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        '✨ Updating your vision...',
        '🎨 Making it happen...',
        '🚀 Transforming the scene...',
        '💫 Adjusting parameters...',
        '🌟 Creating magic...',
      ];

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)],
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="flex flex-col h-full bg-lounge-dark rounded-lg border border-lounge-cyan/20 overflow-hidden shadow-lg">
      {/* Header */}
      <div className="px-4 py-3 border-b border-lounge-cyan/20 bg-lounge-darker">
        <h2 className="font-bold text-lg">🎤 AI Director</h2>
        <p className="text-xs text-lounge-cyan">Describe your vision</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-in`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                msg.role === 'user'
                  ? 'bg-lounge-pink text-white'
                  : 'bg-lounge-cyan/20 text-lounge-cyan'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-lounge-cyan/20 px-4 py-2 rounded-lg">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-lounge-cyan rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-lounge-cyan rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-lounge-cyan rounded-full animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions */}
      <div className="px-4 py-2 border-t border-lounge-cyan/20 bg-lounge-darker max-h-20 overflow-y-auto">
        <p className="text-xs text-lounge-cyan/60 mb-2">Quick commands:</p>
        <div className="flex flex-wrap gap-1">
          {COMMAND_SUGGESTIONS.slice(0, 4).map((cmd) => (
            <button
              key={cmd}
              onClick={() => {
                setInput(cmd);
              }}
              className="text-xs px-2 py-1 bg-lounge-cyan/10 hover:bg-lounge-cyan/20 rounded border border-lounge-cyan/30 text-lounge-cyan transition"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-lounge-cyan/20 bg-lounge-darker">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Describe your vision..."
            disabled={isLoading}
            className="flex-1 px-4 py-2 bg-lounge-dark rounded border border-lounge-cyan/30 text-white placeholder-lounge-cyan/40 focus:outline-none focus:border-lounge-cyan disabled:opacity-50"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="px-4 py-2 bg-lounge-pink hover:bg-opacity-80 rounded font-bold disabled:opacity-50 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
