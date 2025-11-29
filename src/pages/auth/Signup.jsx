import React, { useState } from "react";

export default function Signup({ onSuccess }) {
  const [email, setEmail] = useState("");

  function submit(e) {
    e.preventDefault();
    onSuccess();
  }

  return (
    <div>
      <h2>Create Account</h2>

      <form onSubmit={submit}>
        <label>Email</label>
        <input
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="btn btn-primary mt-3">Next</button>
      </form>
    </div>
  );
}
