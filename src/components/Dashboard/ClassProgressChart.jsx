import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ClassProgressChart = ({ classProgress }) => {
  const data = {
    labels: classProgress.map((item) => item.label),
    datasets: [
      {
        data: classProgress.map((item) => item.value),
        backgroundColor: ["#7E3AF2", "#6B46C1", "#553C9A", "#44337A"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Class Progress",
      },
    },
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ClassProgressChart;