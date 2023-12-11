import React from 'react'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">contact us</h1>

      <div className="row">
        <form action="">
          <div className="inputBox">
            <input type="text" required />
            <label>name</label>
          </div>

          <div className="inputBox">
            <input type="email" required />
            <label>email</label>
          </div>

          <div className="inputBox">
            <input type="number" required />
            <label>number</label>
          </div>

          <div className="inputBox">
            <textarea required name="" id="" cols="30" rows="10"></textarea>
            <label>message</label>
          </div>

          <input type="submit" className="btn" value="send message" />
        </form>

        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5083.100123183013!2d7.010707904900426!3d51.466020044785674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b91d437117de5b%3A0x924b5dab02ef7c7!2sKellersohnweg%2016%2C%2045326%20Essen%2C%20Germany!5e0!3m2!1sen!2sde!4v1639356454703!5m2!1sen!2sde"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  )
}

export default Contact