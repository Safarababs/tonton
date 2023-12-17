import React, {useState } from "react";
import axios from 'axios';
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    company: "",
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setModalIsOpen(true);
    const updatedFormData = {
      ...formData,
      company: formData.company.trim() !== '' ? formData.company : 'Company name not provided',
    };
  
    try {
      await axios.post('https://tontonbackend.onrender.com/email', updatedFormData);
      setLoading(false);
          setMessage("Email sent successfully!");
    } catch (error) {
      setLoading(false);
          setMessage("Failed to send email. Please try again.");
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className="contact" id="contact">
      <h1 className="title">Contact Us</h1>

      <div className="row">
        <form  onSubmit={handleSubmit}>
          <div className="inputBox">
            <input type="text" value={formData.name} onChange={handleChange} name="name" required />
            <label>Name</label>
          </div>
          <div className="inputBox">
            <input type="text" value={formData.company} onChange={handleChange} name="company" />
            <label className="nonRequiredLabel">company Name (optional)</label>
          </div>
          <div className="inputBox">
            <input type="email" value={formData.email} onChange={handleChange} name="email" required />
            <label>Email</label>
          </div>
          <div className="inputBox">
            <input type="number" name="number" value={formData.number} onChange={handleChange} required /> <label>number</label>
          </div>
          <div className="inputBox">
            <textarea name="message" value={formData.message} onChange={handleChange} required cols="30" rows="10"></textarea>
            <label>message</label>
          </div>
          <input type="submit" value="Send" className="customBtn" />
        </form>
        <Modal
          isOpen={modalIsOpen}
          style={customStyles} // Apply custom styles to the modal
          onRequestClose={closeModal}
        >
          <div>
            {loading ? <p>Please wait...</p> : <p>{message}</p>}
            <button onClick={closeModal} className="customBtn">
              OK
            </button>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default Contact;
