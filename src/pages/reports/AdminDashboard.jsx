import React, { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import ReportFiltersModal from "../../components/ReportFiltersModal";
import DownloadModal from "./DownloadModal";

export default function AdminDashboard({ onNavigate }) {
  const [modal, setModal] = useState(null);

  const [data] = useState([
    { id: 1, metric: "New Members", value: 24 },
    { id: 2, metric: "Consultations", value: 12 },
    { id: 3, metric: "Revenue", value: "$1,200" }
  ]);

  const mockReports = [
    { id: 1, name: "Monthly Consultations Summary", date: "2025-01-01" },
    { id: 2, name: "User Registration Report", date: "2025-01-05" },
    { id: 3, name: "Feedback & Ratings Summary", date: "2025-01-10" }
  ];

  return (
    <DashboardLayout onNavigate={onNavigate} role="admin">
      <h2>Admin Dashboard</h2>
      <p>Welcome, Administrator! You can view and manage reports below.</p>

      {/* Cards */}
      <div className="row">
        {data.map((d) => (
          <div className="col-12 col-md-4 mb-3" key={d.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h6 className="text-muted small">{d.metric}</h6>
                <h3>{d.value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="mt-4">
        <h6>Report Table</h6>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {data.map((r) => (
                <tr key={r.id}>
                  <td>{r.metric}</td>
                  <td>{r.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-3">
        <button
          className="btn btn-outline-secondary me-2"
          onClick={() => setModal("filters")}
        >
          Filter Reports
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setModal("download")}
        >
          Download Report
        </button>
      </div>

      {/* Recent Reports */}
      <div className="list-group mt-4">
        {mockReports.map((r) => (
          <div key={r.id} className="list-group-item">
            <strong>{r.name}</strong>
            <div className="text-muted">Generated: {r.date}</div>
          </div>
        ))}
      </div>

      {/* Modals */}
      {modal === "filters" && (
        <ReportFiltersModal onClose={() => setModal(null)} />
      )}
      {modal === "download" && (
        <DownloadModal onClose={() => setModal(null)} />
      )}
    </DashboardLayout>
  );
}
