import React from "react";
import { FaLaptop } from "react-icons/fa";

export default function Services() {
  return (
    <section className="service section" id="services">
      <div className="row">
        <div className="section-title padd-15">
          <h2>Services</h2>
        </div>
      </div>

      <div className="row">
        <div className="service-item padd-15">
          <div className="service-item-inner">
            <div className="icon">
              <FaLaptop width={24} height={24} />
            </div>
            <h4>Web Design</h4>
            <p>
              Encompasses many different skills and disciplines in the
              production and maintenance of websites.
            </p>
          </div>
        </div>

        <div className="service-item padd-15">
          <div className="service-item-inner">
            <div className="icon">
              <i className="fa fa-code"></i>
            </div>
            <h4>Development</h4>
            <p>
              Is process of managing learning and work in order to move toward a
              determined and evolving future.
            </p>
          </div>
        </div>

        <div className="service-item padd-15">
          <div className="service-item-inner">
            <div className="icon">
              <i className="fa fa-paint-brush"></i>
            </div>
            <h4>Graphic Design</h4>
            <p>
              Is a communication process using visual elements to create a
              perception of a message being conveyed.
            </p>
          </div>
        </div>

        <div className="service-item padd-15">
          <div className="service-item-inner">
            <div className="icon">
              <i className="fa fa-bug"></i>
            </div>
            <h4>Clean Code</h4>
            <p>
              Everything that can be understood with little effort and in a
              short time is considered intuitive.
            </p>
          </div>
        </div>

        <div className="service-item padd-15">
          <div className="service-item-inner">
            <div className="icon">
              <i className="fa fa-tablet"></i>
            </div>
            <h4>Fully Responsive</h4>
            <p>
              Is an approach to web design that makes web pages render well on a
              variety of devices .
            </p>
          </div>
        </div>

        <div className="service-item padd-15">
          <div className="service-item-inner">
            <div className="icon">
              <i className="fa fa-wrench"></i>
            </div>
            <h4>Problem Solving</h4>
            <p>
              Consists of using generic or ad hoc methods in an orderly manner
              to find solutions to problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
