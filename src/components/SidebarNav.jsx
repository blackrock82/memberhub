import React from "react";

const menuConfig = {
  admin: [
    { label: "Dashboard", key: "admin-dashboard", icon: "bi-speedometer2" },
    { label: "Manage Members", key: "manage-members", icon: "bi-people" },
    { label: "Manage Bookings", key: "manage-bookings", icon: "bi-calendar-check" },
    { label: "Messaging", key: "messaging", icon: "bi-chat-dots", danger: true },
    { label: "Documents", key: "documents", icon: "bi-folder2-open" },
    { label: "Generate Reports", key: "reports", icon: "bi-receipt" },
    { label: "Settings", key: "settings", icon: "bi-gear", danger: true },
  ],
  consultant: [
    { label: "Dashboard", key: "consultant-dashboard", icon: "bi-speedometer2" },
    { label: "Manage Members", key: "manage-members", icon: "bi-person-gear" },
    { label: "Manage Bookings", key: "manage-bookings", icon: "bi-calendar-week" },
    { label: "Messaging", key: "messages", icon: "bi-chat-left-quote", danger: true },
    { label: "Manage Invoices", key: "invoices", icon: "bi-wallet2" },
    { label: "Settings", key: "settings", icon: "bi-gear", danger: true },
  ],
  member: [
    { label: "Member Dashboard", key: "member-dashboard", icon: "bi-grid-1x2" },
    { label: "Book Consultation", key: "bookings", icon: "bi-calendar-plus" },
  ],
};

export default function SidebarNav({ onNavigate, role }) {

  const normalizedRole = role?.trim().toLowerCase();

  const roleMenu = menuConfig[normalizedRole] || [];

  return (
    <div className="list-group">
      {/* Common Nav */}
      <button
        className="list-group-item list-group-item-action"
        onClick={() => onNavigate("home")}
      >
        <i className="bi bi-house-door me-2"></i> Home
      </button>

      {/* Role-based menu */}
      {roleMenu.map(({ label, key, icon, danger }) => (
        <button
          key={key}
          className={`list-group-item list-group-item-action ${danger ? "text-danger" : ""}`}
          onClick={() => onNavigate(key)}
        >
          {icon && <i className={`bi ${icon} me-2`}></i>}
          {label}
        </button>
      ))}

      {/* Footer / Logout */}
      <button
        className="list-group-item list-group-item-action text-danger"
        onClick={() => onNavigate("logout")}
      >
        <i className="bi bi-box-arrow-right me-2"></i> Logout
      </button>
    </div>
  );
}
