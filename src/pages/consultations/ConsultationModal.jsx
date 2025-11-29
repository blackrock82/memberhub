import React, { useState, useEffect } from "react";

export default function ConsultationModal({ consult, mode, checklist, onClose, onSubmit }) {
  const [name, setName] = useState(""); 
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");
  const [selectedMember, setSelectedMember] = useState("");

  useEffect(() => {
    if (mode === "manage" && consult) {
      setTopic(consult.title);
      setSelectedMember("");
      setDate("");
      setName("");
    }
  }, [mode, consult]);

  const submit = (e) => {
    e.preventDefault();
    onSubmit({ name, topic, date, selectedMember });
  };

  return (
    <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content p-3">
          <button className="btn-close mb-3" onClick={onClose}></button>
          <h4>{mode === "manage" ? "Consultation Summary" : "Book Consultation"}</h4>

          {consult && mode === "manage" && (
            <p>
              <strong>{consult.title}</strong> <br />
              Consultant: {consult.consultant}
            </p>
          )}

          <form onSubmit={submit}>
            {/* Name field for booking */}
            {mode === "book" && (
              <div className="mb-3">
                <label>Member Name</label>
                <input
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>
            )}

            {/* Consultation Topic */}
            {mode !== "manage" && (
              <div className="mb-3">
                <label>Consultation Topic</label>
                <input
                  className="form-control"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., Strategy, Finance, HR…"
                  required
                />
              </div>
            )}

            {/* Select Date */}
            <div className="mb-3">
              <label>Select Date</label>
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="dd-----yyyy"
                required
              />
              <small className="form-text text-muted">Format: dd/mm/yyyy</small>
            </div>

            {/* Checklist for manage */}
            {mode === "manage" && (
              <div className="mb-3">
                <label>Assign Checklist</label>
                <select
                  className="form-select"
                  value={selectedMember}
                  onChange={(e) => setSelectedMember(e.target.value)}
                  required
                >
                  <option value="">-- Select Checklist --</option>
                  {checklist.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button className="btn btn-primary">
              {mode === "manage" ? "Update Member" : "Confirm Booking"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
