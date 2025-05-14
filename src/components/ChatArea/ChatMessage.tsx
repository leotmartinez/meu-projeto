type ChatMessageProps = {
  role: 'user' | 'assistant';
  content: string;
};

export function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === 'user';

  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} px-4 py-2`}
    >
      <div
        className={`max-w-xl rounded-xl px-4 py-2 text-sm shadow ${
          isUser
            ? 'bg-blue-500 text-white'
            : 'bg-white text-gray-800 border border-gray-300'
        }`}
      >
        {content}
      </div>
    </div>
  );
}
