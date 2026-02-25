// pages/index.js
import { useRef, useEffect, useState } from 'react';

export default function Home() {
const canvasRef = useRef(null);
const [log, setLog] = useState([]);
const [input, setInput] = useState("");

useEffect(() => {
const canvas = canvasRef.current;
if (canvas) {
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#1a0552';
ctx.fillRect(0, 0, canvas.width, canvas.height);
// Placeholder: Draw sun
ctx.beginPath();
ctx.arc(200, 150, 60, 0, 2 * Math.PI, false);
ctx.fillStyle = '#ffee55';
ctx.fill();
// More visuals coming soon!
}
}, []); // will re-run when visuals are more dynamic

function onSend(e) {
e.preventDefault();
if (!input.trim()) return;
setLog(l => [...l, { user: true, text: input }]);
// Basic: We'll handle parsing/chat-bot/AI next step!
setInput("");
}

return (
<div style={{
display: 'flex', minHeight: '100vh', background: 'linear-gradient(90deg, #23242a 0%, #4c2a7e 100%)',
color: '#fff', fontFamily: 'sans-serif'
}}>
<aside style={{ width: 340, minHeight: '100vh', background: '#251a3a', padding: 20 }}>
<h2>AI LOUNGE<br /><span style={{ fontSize: 22 }}>After Dark</span></h2>
<div style={{ height: 480, overflowY: 'auto', marginBottom: 30, background: "#1d1836", borderRadius: 6, padding: 10 }}>
{log.map((entry, i) => (
<div key={i} style={{ textAlign: entry.user ? 'right' : 'left', margin: "7px 0" }}>
<span style={{ background: entry.user ? "#4429b9" : "#222", borderRadius: 4, padding: "4px 8px" }}>
{entry.text}
</span>
</div>
))}
</div>
<form onSubmit={onSend} style={{ display: 'flex' }}>
<input
value={input}
onChange={e => setInput(e.target.value)}
style={{ flex: 1, padding: 8, borderRadius: 4, border: "none", marginRight: 6, fontSize: 16 }}
placeholder="Type your command…"
autoFocus
/>
<button type="submit" style={{
background: "#c833ff", color: "#fff", border: 'none', borderRadius: 4, padding: "0 20px"
}}>Send</button>
</form>
</aside>
<main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
<canvas ref={canvasRef} width={800} height={600} style={{
borderRadius: 16, background: "#111", maxWidth: "98%", maxHeight: "90vh"
}}/>
</main>
</div>
);
}
