import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CalendarPicker() {
  const [startDate, setStartDate] = useState(new Date());

  // Calculate first and last day of current month
  const now = new Date();
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 30);

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
        minDate={firstDay}
        maxDate={lastDay}
        className="rounded-xl border border-gray-300 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-amber-400 text-center"
      />
    
    </>
  );
}

export default CalendarPicker;
