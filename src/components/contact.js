// import React, { useState } from "react";
// import axios from "axios";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     number: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const response = await axios.post(
//         "http://localhost:3001/send-email",
//         formData
//       );
//       console.log(response.data);
//       setLoading(false);
//       setMessage("Email sent successfully!");
//       // Handle success, maybe show a success message
//     } catch (error) {
//       console.error("There was an error!", error);
//       setLoading(false);
//       setMessage("Failed to send email. Please try again.");
//       // Handle error, show an error message
//     }
//   };

//   return (
//     <section className="contact" id="contact">
//       <h1 className="heading">contact us</h1>

//       <div className="row">
//         <form onSubmit={handleSubmit}>
//           <div className="inputBox">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//             <label>name</label>
//           </div>
//           <div className="inputBox">
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <label>email</label>
//           </div>
//           <div className="inputBox">
//             <input
//               type="number"
//               name="number"
//               value={formData.number}
//               onChange={handleChange}
//               required
//             />
//             <label>number</label>
//           </div>
//           <div className="inputBox">
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               cols="30"
//               rows="10"
//             ></textarea>
//             <label>message</label>
//           </div>
     
//           <input type="submit" className="btn" value="send message" />
//           {loading && <p style={{color:"black"}}>Please wait...</p>}
//           {message && <p style={{color:"black"}}>{message}</p>}
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">contact us</h1>

      <div className="row">
        <form name="contact" method="POST" data-netlify="true">
          <div className="inputBox">
            <input type="text" name="name" required />
            <label>name</label>
          </div>
          <div className="inputBox">
            <input type="email" name="email" required />
            <label>email</label>
          </div>
          <div className="inputBox">
            <input type="number" name="number" required />
            <label>number</label>
          </div>
          <div className="inputBox">
            <textarea name="message" required cols="30" rows="10"></textarea>
            <label>message</label>
          </div>

          <input type="submit" className="btn" value="send message" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
