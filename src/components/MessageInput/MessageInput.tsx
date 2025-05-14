import { SendHorizonal } from 'lucide-react';

export function MessageInput() {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="flex w-full max-w-3xl items-center gap-2 rounded-full border border-blue-500 bg-blue-100 px-4 py-2">
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          className="flex-1 bg-transparent outline-none text-sm text-blue-900 placeholder:text-blue-500"
        />
        <button className="text-blue-600 hover:text-blue-800 transition">
          <SendHorizonal size={20} />
        </button>
      </div>
    </div>
  );
}
