import { servicesItems } from "@/data/data";
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
        {servicesItems.map((service) => (
          <div key={service.id} className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <i className={`fa ${service.icon}`}></i>
              </div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
