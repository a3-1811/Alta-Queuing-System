import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import  "./style.scss";
const values = [
  { fill: "#FF7506", percent: 60 },
  { fill: "#7E7D88", percent: 25 },
  { fill: "#35C75A", percent: 15 },
];
function AdminRightContent() {
    const [value, onChange] = useState(new Date());
  return (
    <div className="right__content w-1/3 pt-6 ml-2 h-screen max-h-screen">
      <h2 className="mb-6 text-primary font-semibold text-xl ml-2">General</h2>
      <div className="flex flex-col items-center w-full gap-y-2">
        <div className="shadow-circle shadow-gray-300 rounded-xl px-3 py-2   flex justify-between gap-x-5">
          <div className="circles flex justify-between gap-x-2 items-center">
            <div className="cirlce relative h-14 w-14">
              {values.map((item, index) => (
                <CircularProgressbar
                  text={
                    item.percent == values[0].percent ? `${item.percent}%` : ""
                  }
                  strokeWidth={5}
                  styles={{
                    path: { stroke: item.fill },
                    trail: { stroke: "#EAEAEC" },
                    text: { stroke: "#000" ,fontSize: '24px',},
                    
                  }}
                  value={item.percent}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-${
                    14 - (index * 2)
                  } w-${14 - (index * 2)}`}
                />
              ))}
            </div>
            <div className="name">
              <div className="number font-bold text-lg text-[#535261]">4.212</div>
              <span className="text-sm text-[#FF7506] font-medium">
                <i className="fa fa-desktop"></i> Thiết bị
              </span>
            </div>
          </div>
          <div className="detail flex flex-col gap-y-1">
            <div className="flex items-center justify-between gap-x-2">
              <div className="text-xs flex items-center gap-x-1">
                <span className="h-1 w-1 block bg-yellow-300 rounded-full"></span>
                Đang hoạt động
              </div>
              <span className="text-sm font-bold text-[#FF7506]">3.799</span>
            </div>
            <div className="flex items-center justify-between gap-x-2">
              <div className="text-xs flex items-center gap-x-1">
                <span className="h-1 w-1 block bg-green rounded-full"></span>
                Bỏ qua
              </div>
              <span className="text-sm font-bold text-[#FF7506]">3.799</span>
            </div>
            <div className="flex items-center justify-between gap-x-2">
              <div className="text-xs flex items-center gap-x-1">
                <span className="h-1 w-1 block bg-red-600 rounded-full"></span>
                Đang hoạt động
              </div>
              <span className="text-sm font-bold text-[#FF7506]">3.799</span>
            </div>
          </div>
        </div>
        <div className="shadow-circle shadow-gray-300 rounded-xl px-3 py-2   flex justify-between gap-x-5">
          <div className="circles flex justify-between gap-x-2 items-center">
            <div className="cirlce relative h-14 w-14">
              {values.map((item, index) => (
                <CircularProgressbar
                  text={
                    item.percent == values[0].percent ? `${item.percent}%` : ""
                  }
                  strokeWidth={5}
                  styles={{
                    path: { stroke: item.fill },
                    trail: { stroke: "#EAEAEC" },
                    text: { stroke: "#000" ,fontSize: '24px',},
                    
                  }}
                  value={item.percent}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-${
                    14 - (index * 2)
                  } w-${14 - (index * 2)}`}
                />
              ))}
            </div>
            <div className="name">
              <div className="number font-bold text-lg text-[#535261]">4.212</div>
              <span className="text-sm text-[#FF7506] font-medium">
                <i className="fa fa-desktop"></i> Thiết bị
              </span>
            </div>
          </div>
          <div className="detail flex flex-col gap-y-1">
            <div className="flex items-center justify-between gap-x-2">
              <div className="text-xs flex items-center gap-x-1">
                <span className="h-1 w-1 block bg-yellow-300 rounded-full"></span>
                Đang hoạt động
              </div>
              <span className="text-sm font-bold text-[#FF7506]">3.799</span>
            </div>
            <div className="flex items-center justify-between gap-x-2">
              <div className="text-xs flex items-center gap-x-1">
                <span className="h-1 w-1 block bg-green rounded-full"></span>
                Bỏ qua
              </div>
              <span className="text-sm font-bold text-[#FF7506]">3.799</span>
            </div>
            <div className="flex items-center justify-between gap-x-2">
              <div className="text-xs flex items-center gap-x-1">
                <span className="h-1 w-1 block bg-red-600 rounded-full"></span>
                Đang hoạt động
              </div>
              <span className="text-sm font-bold text-[#FF7506]">3.799</span>
            </div>
          </div>
        </div>
        <div className="shadow-circle shadow-gray-300 rounded-xl px-3 py-2   flex justify-between gap-x-5">
          <div className="circles flex justify-between gap-x-2 items-center">
            <div className="cirlce relative h-14 w-14">
              {values.map((item, index) => (
                <CircularProgressbar
                  text={
                    item.percent == values[0].percent ? `${item.percent}%` : ""
                  }
                  strokeWidth={5}
                  styles={{
                    path: { stroke: item.fill },
                    trail: { stroke: "#EAEAEC" },
                    text: { stroke: "#000" ,fontSize: '24px',},
                    
                  }}
                  value={item.percent}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-${
                    14 - (index * 2)
                  } w-${14 - (index * 2)}`}
                />
              ))}
            </div>
            <div className="name">
              <div className="number font-bold text-lg text-[#535261]">4.212</div>
              <span className="text-sm text-[#FF7506] font-medium">
                <i className="fa fa-desktop"></i> Thiết bị
              </span>
            </div>
          </div>
          <div className="detail flex flex-col gap-y-1">
            <div className="flex items-center justify-between gap-x-2">
              <div className="text-xs flex items-center gap-x-1">
                <span className="h-1 w-1 block bg-yellow-300 rounded-full"></span>
                Đang hoạt động
              </div>
              <span className="text-sm font-bold text-[#FF7506]">3.799</span>
            </div>
            <div className="flex items-center justify-between gap-x-2">
              <div className="text-xs flex items-center gap-x-1">
                <span className="h-1 w-1 block bg-green rounded-full"></span>
                Bỏ qua
              </div>
              <span className="text-sm font-bold text-[#FF7506]">3.799</span>
            </div>
            <div className="flex items-center justify-between gap-x-2">
              <div className="text-xs flex items-center gap-x-1">
                <span className="h-1 w-1 block bg-red-600 rounded-full"></span>
                Đang hoạt động
              </div>
              <span className="text-sm font-bold text-[#FF7506]">3.799</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-3 mt-2">
      <Calendar onChange={onChange} value={value} className="text-xs rounded-2xl w-full" />
      </div>
    </div>
  );
}

export default AdminRightContent;
