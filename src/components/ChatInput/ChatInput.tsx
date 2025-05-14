import { Send } from 'lucide-react';
import { useState } from 'react';

export function ChatInput() {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!message.trim()) return;
    console.log('Mensagem enviada:', message);
    setMessage('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-end gap-2 border-t border-gray-200 p-4">
      <textarea
        className="flex-1 resize-none rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Digite sua pergunta..."
        value={message}
        rows={1}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleSend}
        className="rounded-md bg-blue-600 p-2 text-white hover:bg-blue-700 disabled:opacity-50"
        disabled={!message.trim()}
      >
        <Send size={18} />
      </button>
    </div>
  );
}
