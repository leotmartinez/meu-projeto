// import { Plus, Trash2, Pencil } from 'lucide-react';

// export function Sidebar() {
//   return (
//     <aside className="bg-blue-300 w-64 h-screen flex flex-col justify-between p-4 text-white">
//       <div>
//         <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded w-full">
//           <Plus size={16} />
//           Nova pesquisa
//         </button>

//         <div className="mt-4 p-3 bg-blue-400 rounded flex justify-between items-center cursor-pointer hover:bg-blue-500">
//           <span className="truncate">Chatbot definition expl...</span>
//           <Pencil size={14} />
//         </div>
//       </div>

//       <button className="flex items-center gap-2 text-sm hover:underline">
//         <Trash2 size={16} />
//         Excluir histórico
//       </button>
//     </aside>
//   );
// }

import { Plus, MessageCircle } from 'lucide-react';

export function Sidebar() {
  const conversations = ['Consulta 1', 'Dor no peito', 'Febre alta'];

  return (
    <div className="flex flex-col h-full p-4">
      <h1 className="text-xl font-bold mb-4">Assistente Médico</h1>

      <button className="flex items-center gap-2 mb-4 text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded">
        <Plus size={16} />
        Nova conversa
      </button>

      <div className="flex-1 overflow-y-auto space-y-2">
        {conversations.map((title, index) => (
          <button
            key={index}
            className="flex items-center gap-2 w-full px-3 py-2 text-sm text-left bg-gray-100 hover:bg-gray-200 rounded"
          >
            <MessageCircle size={16} />
            {title}
          </button>
        ))}
      </div>
    </div>
  );
}
