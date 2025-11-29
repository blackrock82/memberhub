import React from "react";
import Modal from "../../components/Modal";

export default function DownloadModal({ onClose }) {
  return (
    <Modal 
      title="Download Report"
      onClose={onClose}
      size="modal-sm"
      footer={
        <>
          <button className="btn btn-secondary" onClick={onClose}>Close</button>
        </>
      }
    >
      <p>Select format:</p>

      <button className="btn btn-outline-primary w-100 mb-2">
        PDF
      </button>

      <button className="btn btn-outline-success w-100 mb-2">
        Excel (.xlsx)
      </button>

      <button className="btn btn-outline-dark w-100">
        CSV
      </button>
    </Modal>
  );
}
