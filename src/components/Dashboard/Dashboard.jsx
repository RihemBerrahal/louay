import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ClassProgressChart from './ClassProgressChart';
import ActivityCalendar from './ActivityCalendar';
import ActiveUsersChart from './ActiveUsersChart';
import TopScores from './TopScores';
import ActivityStats from './ActivityStats';

const Dashboard = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const dummyClassProgress = [
    { label: 'Classe A', value: 32 },
    { label: 'Classe B', value: 43 },
    { label: 'Classe C', value: 67 },
    { label: 'Classe D', value: 56 },
  ];

  const dummyTopScores = [
    { name: 'Jane Cooper', score: 99.99, school: 'St. Jadidar School' },
    { name: 'Eleanor Pena', score: 99.76, school: 'Polar School' },
    { name: 'Devon Lane', score: 99.5, school: 'Polar School' },
  ];

  const dummyBarChart = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Active Users',
        data: [20, 35, 50, 75, 90, 65, 80],
        backgroundColor: '#7E3AF2',
        borderRadius: 10,
      },
    ],
  };

  return (
    <div className={`min-h-screen flex ${isFullScreen ? 'p-0' : 'p-5'} bg-gray-100`}>
      <Sidebar toggleFullScreen={toggleFullScreen} />
      <main className="flex-1 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ClassProgressChart classProgress={dummyClassProgress} />
        <ActivityCalendar />
        <ActiveUsersChart chartData={dummyBarChart} />
        <TopScores topScores={dummyTopScores} />
        <ActivityStats />
      </main>
    </div>
  );
};

export default Dashboard;