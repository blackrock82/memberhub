import React from "react";

export default function FlowSelector({ onSelect }) {
  return (
    <div>
      <h1>Memberhub Portal</h1>
      <p>Select a workflow:</p>

      <ul>
        <li>
          <button className="btn btn-primary" onClick={() => onSelect("register")}>
            Member Registration
          </button>
        </li>

        <li className="mt-2">
          <button className="btn btn-secondary" onClick={() => onSelect("login-consultant")}>
            Consultant Login
          </button>
        </li>

        <li className="mt-2">
          <button className="btn btn-dark" onClick={() => onSelect("login-admin")}>
            Administrator Login
          </button>
        </li>
      </ul>
    </div>
  );
}
