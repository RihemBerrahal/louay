const ActivityStats = () => {
    return (
      <div className="bg-white p-5 rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-1">
        <h2 className="font-bold text-lg mb-4">Activity Stats</h2>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <h3 className="font-bold text-2xl">2</h3>
            <p className="text-gray-500">Classes</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">100</h3>
            <p className="text-gray-500">Eleves</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">45%</h3>
            <p className="text-gray-500">Activité Totale</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">4</h3>
            <p className="text-gray-500">Jeux</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ActivityStats;