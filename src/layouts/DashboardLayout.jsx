import React, { useState } from "react";
import SidebarNav from "../components/SidebarNav";

export default function DashboardLayout({ children, onNavigate, role }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      {/* Mobile Top Bar */}
      <div className="d-md-none p-2 bg-light border-bottom mb-2">
        <button
          className="btn btn-outline-primary"
          onClick={() => setOpen(true)}
        >
          ☰ Menu
        </button>
      </div>

      <div className="d-flex">
        {/* Desktop Sidebar */}
        <div
          className="d-none d-md-block sidebar bg-white border-end p-2"
          style={{ width: "220px", minHeight: "100vh" }}
        >
          <SidebarNav onNavigate={onNavigate} role={role} />
        </div>

        {/* Main content */}
        <div className="flex-grow-1 p-3" style={{ minWidth: 0 }}>
          {children}
        </div>
      </div>

      {/* Offcanvas Sidebar for Mobile */}
      {open && (
        <div
          className="offcanvas-backdrop fade show"
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            zIndex: 1040,
          }}
        />
      )}
      <div
        className={`offcanvas offcanvas-start ${open ? "show" : ""}`}
        style={{
          visibility: open ? "visible" : "hidden",
          position: "fixed",
          top: 0,
          left: 0,
          width: "220px",
          height: "100%",
          background: "#fff",
          zIndex: 1050,
          transition: "transform 0.3s ease-in-out",
          transform: open ? "translateX(0)" : "translateX(-100%)",
          borderRight: "1px solid rgba(0,0,0,.1)",
          padding: "1rem",
        }}
      >
        <button
          className="btn-close mb-3"
          onClick={() => setOpen(false)}
        ></button>
        <SidebarNav onNavigate={(key) => {
          onNavigate(key);
          setOpen(false); 
        }} role={role} />
      </div>
    </div>
  );
}
