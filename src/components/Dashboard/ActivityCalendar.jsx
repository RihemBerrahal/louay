import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ActivityCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onChange = (date) => {
    setSelectedDate(date);
    // Update active users chart based on selected date range
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h2 className="font-bold text-lg mb-4">Activity Calendar</h2>
      <Calendar onChange={onChange} value={selectedDate} />
    </div>
  );
};

export default ActivityCalendar;