import React from "react";

export default function Modal({ 
  title = "Modal Title", 
  children, 
  footer, 
  size = "",   // "modal-sm", "modal-lg", "modal-xl"
  onClose 
}) {
  return (
    <div className="modal d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className={`modal-dialog ${size}`}>
        <div className="modal-content">

          {/* HEADER */}
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          {/* BODY CONTENT */}
          <div className="modal-body">
            {children}
          </div>

          {/* FOOTER */}
          {footer && (
            <div className="modal-footer">
              {footer}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
