import React from "react";

export default function Contact() {
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

        <form action="#" className="contact-form padd-15">
          <div className="row">
            <div className="form-item col-6 padd-15">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name*"
                />
              </div>
            </div>
            <div className="form-item col-6 padd-15">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email*"
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
      </div>
    </section>
  );
}
