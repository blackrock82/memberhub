import React, { useState } from "react";
import Navbar from "./components/Navbar";
import FlowSelector from "./pages/FlowSelector";
import MemberRegister from "./pages/members/MemberRegister";
import MemberDashboard from "./pages/members/MemberDashboard";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import SignupSuccess from "./pages/auth/SignupSuccess";
import ConsultDashboard from "./pages/consultations/ConsultDashboard";
import AdminDashboard from "./pages/reports/AdminDashboard";
import Reports from "./pages/reports/Reports";
import ReportFiltersModal from "./components/Modal";
import DownloadModal from "./pages/reports/DownloadModal";

export default function App() {
  const [route, setRoute] = useState("home");
  const [modal, setModal] = useState(null);
  const [selected, setSelected] = useState(null);
  const [loginType, setLoginType] = useState("consultant"); 

  return (
    <div>
      {/* Pass current route to Navbar for conditional links */}
      <Navbar onNavigate={setRoute} route={route} />

      <div className="container container-max mt-4">
        {/* Home */}
        {route === "home" && (
          <FlowSelector
            onSelect={(r) => {
              if (r === "login-admin") {
                setLoginType("admin");
                setRoute("login");
              } else if (r === "login-consultant") {
                setLoginType("consultant");
                setRoute("login");
              } else {
                setRoute(r);
              }
            }}
          />
        )}

        {/* Member Flow */}
        {route === "register" && <MemberRegister onDone={() => setRoute("signup-success")} />}
        {route === "member-dashboard" && <MemberDashboard />}
        {route === "signup" && <Signup onSuccess={() => setRoute("signup-success")} />}
        {route === "signup-success" && (
          <SignupSuccess onContinue={() => setRoute("member-dashboard")} />
        )}

        {/* Login */}
        {route === "login" && (
          <Login
            onLogin={() =>
              setRoute(loginType === "admin" ? "admin-dashboard" : "consult-dashboard")
            }
            title={loginType === "admin" ? "Admin Login" : "Consultant Login"}
          />
        )}

        {/* Dashboards */}
        {route === "consult-dashboard" && <ConsultDashboard onNavigate={setRoute} />}
        {route === "admin-dashboard" && <AdminDashboard onNavigate={setRoute} />}

        {/* Reports (optional separate page) */}
        {route === "reports" && (
          <Reports
            openFilters={() => setModal("filters")}
            openDownload={() => setModal("download")}
          />
        )}

        {/* Modals */}
        {modal === "filters" && <ReportFiltersModal onClose={() => setModal(null)} />}
        {modal === "download" && <DownloadModal onClose={() => setModal(null)} />}
      </div>
    </div>
  );
}
