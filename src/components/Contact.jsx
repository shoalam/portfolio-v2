"use client";

import { useEffect, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [storedData, setStoredData] = useState([]);

  // On initial load, check if there's data in localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }

    // Load stored data from localStorage and show it in a table
    const storedEntries = localStorage.getItem("allFormData");
    if (storedEntries) {
      setStoredData(JSON.parse(storedEntries));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Store data in localStorage
    localStorage.setItem("formData", JSON.stringify(formData));

    const currentData = JSON.parse(localStorage.getItem("allFormData") || "[]");
    console.log("Existing data from allFormData before pushing:", currentData);
    currentData.push(formData);
    localStorage.setItem("allFormData", JSON.stringify(currentData));

    // Update state to reflect the new data in the table
    setStoredData(currentData);
  };

  console.log(storedData);
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>

        <div className="row">
          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-phone"></i>
            </div>
            <h4>Call Us On</h4>
            <p>+8801723553962</p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-map-marker"></i>
            </div>
            <h4>Office</h4>
            <p>Bogura, Bangladesh</p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-envelope"></i>
            </div>
            <h4>Email</h4>
            <p>shoalamdu@gmail.com</p>
          </div>
        </div>

        <form className="contact-form padd-15" onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-item col-6 padd-15">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name*"
                  name="name"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-item col-6 padd-15">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email*"
                  name="email"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-item col-12 padd-15">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject*"
                  name="subject"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-item col-12 padd-15">
              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder="Your Message..."
                  name="message"
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 padd-15">
              <button type="submit" className="btn">
                Send Message
              </button>
            </div>
          </div>
        </form>
        {storedData.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {storedData.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.name}</td>
                  <td>{entry.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data stored yet</p>
        )}
      </div>
    </section>
  );
}
