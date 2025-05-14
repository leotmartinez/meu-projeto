import { ChatMessage } from './ChatMessage';

const messages = [
  { role: 'assistant', content: 'Olá! Em que posso te ajudar hoje?' },
  { role: 'user', content: 'Paciente com dor abdominal e febre há 2 dias.' },
  {
    role: 'assistant',
    content:
      'Entendi. Há sinais de infecção ou história de apendicite? Posso sugerir protocolos com base nisso.',
  },
];

export function ChatArea() {
  return (
    <div className="flex-1 overflow-y-auto bg-blue-100 pt-4">
      {messages.map((msg, index) => (
        <ChatMessage key={index} role={msg.role as 'user' | 'assistant'} content={msg.content} />
      ))}
    </div>
  );
}
