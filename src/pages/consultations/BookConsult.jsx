import React, { useState } from "react";

export default function BookConsult({ onBooked }) {
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");

  function submit(e) {
    e.preventDefault();
    onBooked();
  }

  return (
    <div>
      <h2>Book Consultation</h2>

      <form className="mt-3" onSubmit={submit}>
        <div className="mb-3">
          <label>Consultation Topic</label>
          <input
            className="form-control"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., Strategy, Finance, HR…"
          />
        </div>

        <div className="mb-3">
          <label>Select Date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button className="btn btn-primary">Confirm Booking</button>
      </form>
    </div>
  );
}
