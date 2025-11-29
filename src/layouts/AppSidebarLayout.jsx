import React, { useState } from "react";
import SidebarNav from "../components/SidebarNav";

export default function AppSidebarLayout({ children, onNavigate, role }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="admin-layout-container">
      
      {/* Mobile Top Bar */}
      <div className="d-md-none p-2 bg-light border-bottom mb-2">
        <button className="btn btn-outline-primary" onClick={() => setOpen(!open)}>
          ☰ Menu
        </button>
      </div>

      <div className="d-flex">
        {/* Sidebar */}
        <div
          className={`sidebar bg-white border-end p-2 ${open ? "d-block" : "d-none"} d-md-block`}
          style={{ width: "220px", minHeight: "100vh" }}
        >
          <SidebarNav onNavigate={onNavigate} role={role} />
        </div>

        {/* Main content */}
        <div className="flex-grow-1 p-3">
          {children}
        </div>
      </div>
    </div>
  );
}
