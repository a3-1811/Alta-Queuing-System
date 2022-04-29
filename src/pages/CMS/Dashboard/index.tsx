import React from "react";
import "./style.scss";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Filler,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import AdminRightContent from "../AdminRightContent";
ChartJS.register(
  ArcElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);
const data = function () {
  var canvas = document.createElement("canvas");
  var chart = canvas.getContext("2d")
  if(chart !== null){
    let  gradient = chart.createLinearGradient(0, 0, 0, 450);

  gradient.addColorStop(0, "rgba(206, 221, 255,1)");
  gradient.addColorStop(0.5, "rgba(206, 221, 255,0.7)");
  gradient.addColorStop(1, "rgba(206, 221, 255,0.3)");
  return {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Chanllenge",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: gradient,
        borderColor: "#5185F7",
        pointStyle: "circle",
        pointRadius: 6,
        pointBorderWidth: 3,
        pointBorderColor: "#fff",
        pointBackgroundColor: "#5185F7",
      },
    ],
  };
  }
  
};
const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      yAlign: "bottom",
      padding: {
        left: 30,
        right: 30,
        top: 5,
        bottom: 5,
      },
      backgroundColor: "#5185F7",
      displayColors: false,
      callbacks: {
        title: function (tooltipItem : any) {
          return;
        },
        label: function (tooltipItem : any) {
          return tooltipItem.dataset.data[tooltipItem["dataIndex"]];
        },
      },
    },
  },
  legend: {
    display: false,
  },
  elements: {
    line: {
      tension: 0.5,
    },
  },
  scale: {
    yAxes: [
      {
        type: "linear",
        position: "bottom",
        ticks: {
          max: 100,
          min: 0,
          stepSize: 1,
        },
      },
    ],
  },
};

function Dashboard() {
  return (
    <div className="flex w-full">
    <div className="pt-5 dashboard__main w-2/3">
      <h2 className="mb-6 text-primary font-semibold text-2xl">Dashboard</h2>
      <div className="content w-full">
        <div className="list flex items-center justify-between w-full gap-x-1 gap-y-1 flex-wrap">
          <div className="item flex flex-col items-start gap-y-1 px-3 py-2 rounded-xl">
            <div className="header flex items-center gap-x-3">
              <div className="iconBox h-10 w-10 flex items-center justify-center bg-primary rounded-full bg-opacity-10">
                <i className="fa fa-carrot text-primary text-xl"></i>
              </div>
              <div className="limit-2 font-bold text-xs w-[90px]">
                Number chanllenges
              </div>
            </div>
            <div className="font-bold text-3xl text-gray-600">390</div>
          </div>
          <div className="item flex flex-col items-start gap-y-1 px-3 py-2  rounded-xl">
            <div className="header flex items-center gap-x-3">
              <div className="iconBox h-10 w-10 flex items-center justify-center bg-[#FFAC6A] rounded-full bg-opacity-10">
                <i className="fa fa-language text-[#FFAC6A] text-xl"></i>
              </div>
              <div className="limit-2 font-bold text-xs w-[90px]">
                Number languages
              </div>
            </div>
            <div className="font-bold text-3xl text-gray-600">390</div>
          </div>
          <div className="item flex flex-col items-start gap-y-1 px-3 py-2  rounded-xl">
            <div className="header flex items-center gap-x-3">
              <div className="iconBox h-10 w-10 flex items-center justify-center bg-green rounded-full bg-opacity-10">
                <i className="fa fa-user-astronaut text-green text-xl"></i>
              </div>
              <div className="limit-2 font-bold text-xs w-[90px]">
                Number users
              </div>
            </div>
            <div className="font-bold text-3xl text-gray-600">390</div>
          </div>
          <div className="item flex flex-col items-start gap-y-1 px-3 py-2  rounded-xl">
            <div className="header flex items-center gap-x-3">
              <div className="iconBox h-10 w-10 flex items-center justify-center bg-red-600 rounded-full bg-opacity-10">
                <i className="fab fa-canadian-maple-leaf text-red-600 text-xl"></i>
              </div>
              <div className="limit-2 font-bold text-xs w-[90px]">
                Number diffcults
              </div>
            </div>
            <div className="font-bold text-3xl text-gray-600">390</div>
          </div>
        </div>
        <div className="chart w-full mt-5 h-full p-[15px]">
          <div className="flex justify-between items-center w-full">
            <h3 className="font-bold text-sm">Statistical table</h3>
            <div className="selectBox flex justify-center items-center gap-x-3">
              <span className="font-bold text-sm">View by</span>
              <select className="rounded-2xl cursor-pointer focus:outline-none w-[100px] outline-none border-gray-200 border-1 px-[12px] py-[5px] text-gray-500">
                <option value="day">Day</option>
                <option value="month">Month</option>
              </select>
            </div>
          </div>
          {/* Chart  */}
          <Line data={data() as any} options={options as any} />
        </div>
      </div>
      
    </div>
      <AdminRightContent/>
    </div>
  );
}

export default Dashboard;
