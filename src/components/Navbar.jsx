import React from "react";

export default function Navbar({ onNavigate, route }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a
        role="button"
        className="navbar-brand"
        onClick={() => onNavigate("home")}
      >
        MemberHub
      </a>

      <div className="navbar-nav">
        {/* Always show home / register links */}
        <a
          className="nav-link"
          role="button"
          onClick={() => onNavigate("register")}
        >
          Member Register
        </a>
      </div>
    </nav>
  );
}
