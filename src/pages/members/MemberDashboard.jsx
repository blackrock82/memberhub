import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

export default function MemberDashboard({ onNavigate }) {
  return (
    
    <DashboardLayout onNavigate={onNavigate} role="member">
      <h2>Member Dashboard</h2>
      <p className="text-muted">Welcome to your member portal.</p>

      <div className="alert alert-success">
        You can now request consultations, view appointment status, and update
        your profile.
      </div>
    </DashboardLayout>
  );
}
