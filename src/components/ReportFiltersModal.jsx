import React, { useState } from "react";

export default function ReportFiltersModal({ onClose }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reportType, setReportType] = useState("");

  const submit = (e) => {
    e.preventDefault();
    // You can handle filtering logic here or pass to parent
    alert(`Filter applied:\nType: ${reportType}\nFrom: ${startDate}\nTo: ${endDate}`);
    onClose();
  };

  return (
    <div
      className="modal d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content p-3">
          <button className="btn-close mb-3" onClick={onClose}></button>
          <h4>Filter Reports</h4>

          <form onSubmit={submit}>
            <div className="mb-3">
              <label>Report Type</label>
              <select
                className="form-select"
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
              >
                <option value="">-- Select Type --</option>
                <option value="monthly">Monthly Consultations</option>
                <option value="registration">User Registration</option>
                <option value="feedback">Feedback & Ratings</option>
              </select>
            </div>

            <div className="mb-3">
              <label>Start Date</label>
              <input
                type="date"
                className="form-control"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>End Date</label>
              <input
                type="date"
                className="form-control"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            <button className="btn btn-primary w-100">Apply Filter</button>
          </form>
        </div>
      </div>
    </div>
  );
}
