import React, { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import ConsultationModal from "./ConsultationModal";

export default function ConsultDashboard({ onNavigate }) {
  const [selectedConsult, setSelectedConsult] = useState(null);
  const [modalMode, setModalMode] = useState(null);
  const [checklist] = useState(["Checklist A", "Checklist B", "Checklist C"]);
  const [successDate, setSuccessDate] = useState("");

  const mockConsults = [
    { id: 1, title: "Business Strategy Review", consultant: "Dr. Moyo" },
    { id: 2, title: "Financial Advisory", consultant: "Ms. Chirwa" },
    { id: 3, title: "HR Conflict Resolution", consultant: "Mr. Dube" },
  ];

  const openBookModal = () => {
    setSelectedConsult(null);
    setModalMode("book");
  };

  const openManageModal = (consult) => {
    setSelectedConsult(consult);
    setModalMode("manage");
  };

  const handleSubmit = ({ topic, date, selectedMember }) => {
    setSuccessDate(date);
    setModalMode("success");
  };

  return (
    <DashboardLayout onNavigate={onNavigate} role="consultant">
      <h2 className="mb-3">Consultant Dashboard</h2>

      <div className="alert alert-success">
        Welcome back! You are logged in as a Consultant.
      </div>

      <p>Manage your members below.</p>

      <div className="mt-4">
        <h3>Available Consultations</h3>

        <div className="list-group mt-3">
          {mockConsults.map((c) => (
            <div key={c.id} className="list-group-item">
              <strong>{c.title}</strong>
              <div className="text-muted">Consultant: {c.consultant}</div>
              <button
                className="btn btn-sm btn-outline-primary mt-2"
                onClick={() => openManageModal(c)}
              >
                Manage Booking
              </button>
            </div>
          ))}
        </div>

        <button className="btn btn-primary mt-3" onClick={openBookModal}>
          Book New Consultation
        </button>
      </div>

      {(modalMode === "book" || modalMode === "manage") && (
        <ConsultationModal
          consult={selectedConsult}
          mode={modalMode}
          checklist={checklist}
          onClose={() => setModalMode(null)}
          onSubmit={handleSubmit}
        />
      )}

      {modalMode === "success" && (
        <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content p-3">
              <h4 className="mb-3">Successfully Updated</h4>
              <p>
                Member appointment has been confirmed for{" "}
                <strong>{successDate}</strong>.
              </p>
              <p>Consultancy has been confirmed.</p>
              <button
                className="btn btn-primary mt-3"
                onClick={() => setModalMode(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
