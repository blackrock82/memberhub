import React from 'react'
export default function Input({label, type='text', value, onChange, placeholder, error, name}) {
  return (
    <div className="mb-3">
      {label && <label className="form-label">{label}</label>}
      <input name={name} className={'form-control '+(error?'is-invalid':'')} type={type} value={value||''} onChange={e=>onChange?.(e.target.value)} placeholder={placeholder} />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}
