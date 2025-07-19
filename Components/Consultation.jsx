import React from "react";
import CalendarPicker from "./CalendarPicker";
import RazorpayReact from "./RazorpayReact";

const Consultation = () => {
  return (
    <div className="-mt-28">
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-3xl font-bold mb-6 mt-10">Book a Consultation</h1>
      <p className="mb-8 text-gray-600 text-center max-w-xl">
        Choose a date for your consultation using the calendar below. We look forward to helping you with your floral needs!
      </p>
      
    </div>
    <div className="-mt-52 flex justify-center items-center mb-48 w-full">
    <form className=" flex flex-col justify-center items-center gap-4 w-72 md:w-1/3 pt-4 md:pt-12 rounded-4xl bg-blue-50 pb-8 shadow-lg " onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Your Name" className="rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" required />
          <input type="email" placeholder="Your Email" className="rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" required />
          <input type="Mobile number" placeholder="Your Phone number" className="rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" required />
          <p className="text-2xl font-semibold text-center">Select consultation Date</p>
          <CalendarPicker />
          <RazorpayReact />
</form>
</div>
    </div>

  );
};

export default Consultation;

