import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "react-modal";

// Define custom modal styles
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "40px",
    border: "1px solid black",
    borderRadius: "10px",
    boxShadow: "0 0 200px rgba(0, 0, 0, 0.5)",
    maxWidth: "400px",
    width: "90%",
    height: "20rem",
    textAlign: "center",
    fontSize: "2rem",

    margin: "1rem",
  },
};

Modal.setAppElement("#root");

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setModalIsOpen(true);

    emailjs
      .sendForm(
        "service_emjf1t3",
        "Tonton E.T Enterprise",
        form.current,
        "eoy6A7j3RjMiULFpI"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setMessage("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setMessage("Failed to send email. Please try again.");
        }
      );
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className="contact" id="contact">
      <h1 className="heading">Contact Us</h1>

      <div className="row">
        <form ref={form} onSubmit={sendEmail}>
          <div className="inputBox">
            <input type="text" name="from_name" required />
            <label>Name</label>
          </div>
          <div className="inputBox">
            <input type="email" name="user_email" required />
            <label>Email</label>
          </div>
          <div className="inputBox">
            <input type="number" name="number" required /> <label>number</label>
          </div>
          <div className="inputBox">
            <textarea name="message" required cols="30" rows="10"></textarea>
            <label>message</label>
          </div>
          <input type="submit" value="Send" className="btn" />
        </form>
        <Modal
          isOpen={modalIsOpen}
          style={customStyles} // Apply custom styles to the modal
          onRequestClose={closeModal}
        >
          <div>
            {loading ? <p>Please wait...</p> : <p>{message}</p>}
            <button onClick={closeModal} className="btn">
              OK
            </button>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default Contact;
