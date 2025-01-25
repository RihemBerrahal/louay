import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ActiveUsersChart = ({ chartData }) => {
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Active Users",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#E5E7EB",
        },
      },
    },
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ActiveUsersChart;