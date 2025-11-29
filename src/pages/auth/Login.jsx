import React, { useState } from "react";

export default function Login({ onLogin, onForgotPassword, title = "Consultant Login" }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
    remember: false
  });

  const [errors, setErrors] = useState({});

  // Validate form
  function validate(values) {
    const errors = {};
    if (!values.username.trim()) errors.username = "Username is required";
    if (!values.password.trim()) errors.password = "Password is required";
    else if (values.password.length < 4)
      errors.password = "Password must be at least 4 characters";
    return errors;
  }

  // Update form state
  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  // Handle submit
  function submit(e) {
    e.preventDefault();

    const validation = validate(form);
    setErrors(validation);

    if (Object.keys(validation).length > 0) return;

    // Call parent with form data
    onLogin(form);
  }

  return (
    <div className="login-form-container" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>{title}</h2>

      <form onSubmit={submit}>
        {/* Username */}
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className={`form-control ${errors.username ? "is-invalid" : ""}`}
            value={form.username}
            onChange={(e) => handleChange("username", e.target.value)}
            placeholder="Enter username"
          />
          {errors.username && <div className="invalid-feedback">{errors.username}</div>}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            value={form.password}
            onChange={(e) => handleChange("password", e.target.value)}
            placeholder="Enter password"
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        {/* Remember Me + Forgot Password */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
              checked={form.remember}
              onChange={(e) => handleChange("remember", e.target.checked)}
            />
            <label htmlFor="rememberMe" className="form-check-label">
              Remember me
            </label>
          </div>

          <button
            type="button"
            className="btn btn-link p-0"
            onClick={onForgotPassword}
          >
            Forgot password?
          </button>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-success w-100">
          Login
        </button>
      </form>
    </div>
  );
}
