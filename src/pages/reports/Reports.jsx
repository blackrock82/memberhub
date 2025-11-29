import React from "react";

export default function Reports({ openFilters, openDownload }) {
  const mockReports = [
    { id: 1, name: "Monthly Consultations Summary", date: "2025-01-01" },
    { id: 2, name: "User Registration Report", date: "2025-01-05" },
    { id: 3, name: "Feedback & Ratings Summary", date: "2025-01-10" },
  ];

  return (
    <div>
      <h2>Admin Reports</h2>

      <div className="mt-3">
        <button className="btn btn-outline-secondary me-2" onClick={openFilters}>
          Filter Reports
        </button>

        <button className="btn btn-primary" onClick={openDownload}>
          Download Report
        </button>
      </div>

      <div className="list-group mt-4">
        {mockReports.map((r) => (
          <div key={r.id} className="list-group-item">
            <strong>{r.name}</strong>
            <div className="text-muted">Generated: {r.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
