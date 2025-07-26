import React, { useState } from 'react';
import './ChatPanel.css';

export default function ChatPanel() {
  const [messages, setMessages] = useState([
    { from: 'ai', text: 'outgoing voice call to your mom reminding you to drink water?' },
    { from: 'user', text: 'Yes, let’s.' },
    { from: 'ai', text: 'Working on your notification setting! Done! Stay hydrated.' },
  ]);

//   return (
//     <div className="chat-panel">
//       <h3>TEMPO AI</h3>
//       <div className="messages">
//         {messages.map((m, i) => (
//           <div key={i} className={`message ${m.from}`}>
//             {m.text}
//           </div>
//         ))}
//       </div>
//       <input type="text" placeholder="Message Tempo" className="chat-input" />
//     </div>
//   );
}
