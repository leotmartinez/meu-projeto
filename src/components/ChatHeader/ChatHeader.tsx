import { Loader } from 'lucide-react';

export function ChatHeader() {
  return (
    <div className="border-b border-blue-400 p-4 flex items-center gap-3 bg-blue-100 text-blue-900">
      <Loader className="animate-spin text-blue-600" size={20} />
      <p className="text-sm">
        O Assistente Inteligente de Pesquisas Hospitalares que retorna protocolos médicos indicados com base nos sintomas do paciente ou na sua requisição direta!
      </p>
    </div>
  );
}
