"use client"

import { useState, useEffect } from "react";

type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

export default function StudyReminders() {
  const [schedule, setSchedule] = useState<Record<DaysOfWeek, string>>({
    Monday: "",
    Tuesday: "",
    Wednesday: "",
    Thursday: "",
    Friday: "",
    Saturday: "",
    Sunday: "",
  });

  const [activeTimers, setActiveTimers] = useState<Record<DaysOfWeek, boolean>>({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });

  useEffect(() => {
    const checkReminder = setInterval(() => {
      const now = new Date();
      const currentTime = now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0");
      const today = now.toLocaleString("en-US", { weekday: "long" }) as DaysOfWeek;
      
      if (activeTimers[today] && schedule[today] === currentTime) {
        alert(`Time to study! It's ${currentTime}`);
        setActiveTimers((prev) => ({ ...prev, [today]: false })); // Reset timer after alert
      }
    }, 60000);

    return () => clearInterval(checkReminder);
  }, [schedule, activeTimers]);

  const handleTimeChange = (day: DaysOfWeek, time: string) => {
    setSchedule((prev) => ({ ...prev, [day]: time }));
  };

  const startTimer = (day: DaysOfWeek) => {
    if (!schedule[day]) {
      alert("Please set a study time before starting the timer!");
      return;
    }
    setActiveTimers((prev) => ({ ...prev, [day]: true }));
    alert(`Timer started for ${day} at ${schedule[day]}`);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Study Schedule</h1>

      {/* Study Schedule Table */}
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Day</th>
            <th className="border border-gray-300 px-4 py-2">Study Time</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(schedule).map((day) => (
            <tr key={day}>
              <td className="border border-gray-300 px-4 py-2">{day}</td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="time"
                  value={schedule[day as DaysOfWeek]}
                  onChange={(e) => handleTimeChange(day as DaysOfWeek, e.target.value)}
                  className="border p-2 rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => startTimer(day as DaysOfWeek)}
                  className={`px-4 py-2 rounded text-white ${
                    activeTimers[day as DaysOfWeek] ? "bg-green-500" : "bg-blue-500"
                  }`}
                >
                  {activeTimers[day as DaysOfWeek] ? "Timer Active" : "Start Timer"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
