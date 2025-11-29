import React, { useState } from "react";

export default function ConsultFeedback({ onDone }) {
  const [rating, setRating] = useState(5);
  const [notes, setNotes] = useState("");

  function submit(e) {
    e.preventDefault();
    onDone();
  }

  return (
    <div>
      <h2>Consultation Feedback</h2>

      <form onSubmit={submit} className="mt-3">
        <label className="mb-1">Rating</label>
        <select
          className="form-select mb-3"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option>5 - Excellent</option>
          <option>4 - Good</option>
          <option>3 - Average</option>
          <option>2 - Poor</option>
          <option>1 - Terrible</option>
        </select>

        <label className="mb-1">Feedback Notes</label>
        <textarea
          className="form-control mb-3"
          rows="3"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <button className="btn btn-success">Submit Feedback</button>
      </form>
    </div>
  );
}
