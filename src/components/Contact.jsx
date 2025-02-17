"use client";

import { useEffect, useState } from "react";
import { db, collection, addDoc, getDocs } from "@/lib/firebaseConfig";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [storedData, setStoredData] = useState([]);
  const [statusMessage, setStatusMessage] = useState({ type: "", message: "" });

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "contactmessages"));
      const formEntries = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStoredData(formEntries);
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (statusMessage.message) {
      const timer = setTimeout(() => {
        setStatusMessage({ type: "", message: "" });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "contactmessages"), formData);

      setStoredData((prev) => [...prev, { id: docRef.id, ...formData }]);

      setStatusMessage({
        type: "success",
        message: "Message sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatusMessage({
        type: "error",
        message: "Failed to send message. Try again!",
      });
    }
  };

  return (
    <section className="contact section" id="contact">
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
          <h4>Call Me On</h4>
          <p>+8801723553962</p>
        </div>
        <div className="contact-info-item padd-15">
          <div className="icon">
            <i className="fa fa-map-marker"></i>
          </div>
          <h4>Address</h4>
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
      {statusMessage.message && (
        <div
          className={`alert ${
            statusMessage.type === "success" ? "alert-success" : "alert-error"
          }`}
        >
          {statusMessage.message}
        </div>
      )}
      <style>
        {`
        .alert {
        padding: 10px;
        margin-top: 10px;
        border-radius: 5px;
        font-size: 14px;
        text-align: center;
        max-width: 450px;
        width: 100%;
        position: fixed;
        top: 20px;
        right: 20px;
      }
      .alert-success {
        background-color: #d4edda;
        color: #155724;
      }
      .alert-error {
        background-color: #f8d7da;
        color: #721c24;
      }

        `}
      </style>
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
                required
              />
            </div>
          </div>
          <div className="form-item col-6 padd-15">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email*"
                name="email"
                onChange={handleChange}
                required
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
                required
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
    </section>
  );
}
