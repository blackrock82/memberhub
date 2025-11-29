import React from "react";

export default function SignupSuccess({ onContinue }) {
  return (
    <div>
        <div className="alert alert-success">
        <h5>Account created</h5>
        <p>Registration details have been sent to your email.</p>
        <p className="mb-0"><strong>Your Digital Member ID:</strong> STD#N87256</p>
        <button className="btn btn-primary" onClick={onContinue}>
        Continue to Dashboard
      </button>
      </div>
  

    </div>
  );
}
