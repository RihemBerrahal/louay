const TopScores = ({ topScores }) => {
    return (
      <div className="bg-white p-5 rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-1">
        <h2 className="font-bold text-lg mb-4">Top Scores</h2>
        {topScores.map((score, index) => (
          <div
            key={index}
            className={`flex justify-between items-center mb-4 ${index === 2 ? '' : 'border-b pb-4 border-gray-200'}`}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-12 h-12 rounded-full flex justify-center items-center text-white font-bold ${
                  index === 0
                    ? 'bg-green-400'
                    : index === 1
                    ? 'bg-yellow-400'
                    : 'bg-orange-400'
                }`}
              >
                {index + 1}st
              </div>
              <div>
                <h3 className="font-bold">{score.name}</h3>
                <p className="text-sm">{score.score}%, {score.school}</p>
              </div>
            </div>
            <span
              className={`font-bold ${
                index === 0 ? 'text-green-500' : index === 1 ? 'text-yellow-500' : 'text-orange-500'
              }`}
            >
              {score.score}%
            </span>
          </div>
        ))}
      </div>
    );
  };
  
  export default TopScores;