import { Sidebar } from '../Sidebar/Sidebar';
import { ChatArea } from '../ChatArea/ChatArea';

export function MainLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white border-r border-gray-200">
        <Sidebar />
      </aside>
      <main className="flex-1 flex flex-col">
        <ChatArea />
      </main>
    </div>
  );
}
