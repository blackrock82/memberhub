import React, { useState } from "react";

export default function MemberRegister({ onDone }) {
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    mobile: "",
    industry: "",
    level: "",
    password: "",
    confirm: "",
  });

  const [errors, setErrors] = useState({});

  function validate(values) {
    const errors = {};

    if (!values.name) errors.name = "Full name is required";

    if (!values.email) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      errors.email = "Invalid email";

    if (!values.password) errors.password = "Password required";
    else if (values.password.length < 6)
      errors.password = "Password must be at least 6 characters";

    if (values.password !== values.confirm)
      errors.confirm = "Passwords do not match";

    return errors;
  }

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validation = validate(form);
    setErrors(validation);


    if (Object.keys(validation).length > 0) return;


    setTimeout(() => onDone(), 500);
  }

  function handleCancel() {
    setForm({
      name: "",
      business: "",
      email: "",
      mobile: "",
      industry: "",
      level: "",
      password: "",
      confirm: "",
    });
    setErrors({});
  }

  return (
    <div className="member-register-form" style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h2>Member Registration</h2>

      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="mb-3">
          <label>Full Name</label>
          <input
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Your full name"
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        {/* Business Name */}
        <div className="mb-3">
          <label>Business Name</label>
          <input
            className="form-control"
            value={form.business}
            onChange={(e) => handleChange("business", e.target.value)}
            placeholder="Your business name"
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="example@email.com"
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        {/* Mobile Number */}
        <div className="mb-3">
          <label>Mobile Number</label>
          <input
            className="form-control"
            value={form.mobile}
            onChange={(e) => handleChange("mobile", e.target.value)}
            placeholder="e.g. 123 456 7890"
          />
        </div>

        {/* Industry */}
        <div className="mb-3">
          <label>Industry</label>
          <select
            className="form-control"
            value={form.industry}
            onChange={(e) => handleChange("industry", e.target.value)}
          >
            <option value="">Select Industry</option>
            <option>Finance</option>
            <option>Technology</option>
            <option>Healthcare</option>
            <option>Retail</option>
            <option>Construction</option>
            <option>Other</option>
          </select>
        </div>

        {/* Membership Level */}
        <div className="mb-3">
          <label>Membership Level</label>
          <select
            className="form-control"
            value={form.level}
            onChange={(e) => handleChange("level", e.target.value)}
          >
            <option value="">Select Level</option>
            <option>Basic</option>
            <option>Silver</option>
            <option>Gold</option>
            <option>Platinum</option>
          </select>
        </div>

        {/* Password */}
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            value={form.password}
            onChange={(e) => handleChange("password", e.target.value)}
            placeholder="Enter a password"
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>

        {/* Retype Password */}
        <div className="mb-3">
          <label>Retype Password</label>
          <input
            type="password"
            className={`form-control ${errors.confirm ? "is-invalid" : ""}`}
            value={form.confirm}
            onChange={(e) => handleChange("confirm", e.target.value)}
            placeholder="Re-enter password"
          />
          {errors.confirm && (
            <div className="invalid-feedback">{errors.confirm}</div>
          )}
        </div>

        <button className="btn btn-primary me-2">Signup</button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
