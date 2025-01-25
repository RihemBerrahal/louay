import { FullscreenIcon } from 'lucide-react';

const Sidebar = () => {
  const toggleFullScreen = () => {
    // Toggle fullscreen functionality
  };

  return (
    <aside className="w-64 bg-purple-800 text-white p-5 rounded-lg">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div>
            <h3 className="font-bold">Mr. Mondher</h3>
            <p className="text-sm">Prof</p>
          </div>
        </div>
        <button
          onClick={toggleFullScreen}
          className="p-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
        >
          <FullscreenIcon className="w-5 h-5" />
        </button>
      </div>
      <input
        type="text"
        placeholder="Rechercher"
        className="w-full p-2 rounded-md mb-6 bg-gray-200 text-gray-800"
      />
      <nav>
        {[
          { label: 'Classes', icon: '📚' },
          { label: 'Jeux', icon: '🎮' },
          { label: 'Cours', icon: '📘' },
          { label: 'Statistiques', icon: '📊', isActive: true },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 p-2 rounded-md hover:bg-purple-600 transition cursor-pointer mb-2 ${
              item.isActive && 'bg-purple-600'
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
      <button className="mt-10 w-full p-2 bg-gray-200 text-gray-800 rounded-md">
        Se Déconnecter
      </button>
    </aside>
  );
};

export default Sidebar;