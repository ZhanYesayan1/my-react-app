import React,{useState}from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../styles/dashboard.css'
import { AgCharts } from "ag-charts-react";

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date("2024-01-01"));
  const [endDate, setEndDate] = useState(null);

  
  const salesData = [
    { date: new Date("2024-01-01"), sales: 50 },
    { date: new Date("2024-01-02"), sales: 60 },
    { date: new Date("2024-01-03"), sales: 70 },
    { date: new Date("2024-01-04"), sales: 80 },
    { date: new Date("2024-01-05"), sales: 90 },
    { date: new Date("2024-01-06"), sales: 55 },
    { date: new Date("2024-01-07"), sales: 75 }
  ];

 
  const filteredSalesData = salesData.filter((data) => {
    const date = data.date;
    return date >= startDate && (!endDate || date <= endDate);
  });


  const options = {
    data: filteredSalesData.map(data => ({
      ...data,
      date: data.date.toISOString().split('T')[0] 
    })),
    series: [
      {
        type: "line",
        xKey: "date",
        yKey: "sales",
        stroke: "blue",
      }
    ],
    axes: [
      {
        type: "category",
        position: "bottom",
        label: { rotation: -45 }
      },
      {
        type: "number",
        position: "left"
      }
    ],
  };

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className='dashboard'>
      <h1>Dashboard </h1>
      <div className='dashboard-content'>
        <div className='calendar'>
         <DatePicker
          selected={startDate}
          onChange={onChange}
         startDate={startDate}
          endDate={endDate}
          selectsRange
         inline
          />
        </div>
        <div className='chart'>
          {filteredSalesData.length > 0 ? (
         <AgCharts options={options} />
         ) : (
         <p>No data to display for the selected date range.</p>
         )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;