import React, { useEffect, useState } from "react";

const BestDeal = () => {
  const initialTime = 11 * 24 * 60 * 60 * 1000; // 10 days

  // State to hold the remaining time
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    // Update the countdown every second
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        // If timeLeft is 0, stop the countdown
        if (prevTime <= 1000) {
          clearInterval(intervalId);
          return 0;
        }
        // Otherwise, decrease the timeLeft by 1 second (1000 milliseconds)
        return prevTime - 1000;
      });
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Convert timeLeft to days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  return (
    <div className="bg-[#647485] pt-44 pb-10">
      <div className="w-[90%] mx-auto flex justify-between text-white">
        <div className="w-[15%]">
          <h1 className="text-[30px] ">Best Deals</h1>
          <p className="text-[20px]">$77.00</p>
          <p className="20px pt-24 pb-10">Grab your best offers!!</p>
          <button className="border border-none px-5 py-3 rounded-lg bg-black text-white transition text-[15px]">
            Shop Now
          </button>
        </div>
        <div className="flex space-x-4">
          <div className="font-Inter rounded-md bg-[#F56E07] text-white text-center text-[34px] px-5 py-3">
            {days}
            <span className="block text-[14px] mt-1">Days</span>
          </div>
          <div className="font-Inter rounded-md bg-[#F56E07] text-white text-center text-[34px] px-5 py-3">
            {hours}
            <span className="block text-[14px] mt-1">Hours</span>
          </div>
          <div className="font-Inter rounded-md bg-[#F56E07] text-white text-center text-[34px] px-5 py-3">
            {minutes}
            <span className="block text-[14px] mt-1">Minutes</span>
          </div>
          <div className="font-Inter rounded-md bg-[#F56E07] text-white text-center text-[34px] px-5 py-3">
            {seconds}
            <span className="block text-[14px] mt-1">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDeal;
