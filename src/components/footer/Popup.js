import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Terms from "./Terms";

function Popup() {
  const [showModal, setShowModal] = useState(true);

  const openModal = () => {
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
    
  };

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={openModal} style={{display:"none"}}>
        Launch modal
      </button>

      {showModal && (
        <div className="modal show" tabIndex="-1" style={{ display: "block" }}>
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title">Datenschutzerklärung</h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <Terms />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={closeModal}
                  style={{background:"red"}}
                >
                  Akzeptieren
                </button>
                <button type="button" className="btn btn-primary btn-lg" onClick={closeModal} style={{background:"green"}}>
                Ablehnen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && (
        <div
          className="modal-backdrop show"
          style={{ display: "block" }}
          onClick={closeModal}
        ></div>
      )}
    </div>
  );
}

export default Popup;
