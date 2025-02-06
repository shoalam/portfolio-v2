import React from "react";

export default function HeroHome() {
  return (
    <section className="home section active" id="home">
      <div className="container">
        <div className="intro">
          <img src="images/tria.jpg" alt="profile" className="shadow-dark" />
          <h1>Tuhin Shofiul Alam</h1>
          <p>I'm a Full Stack Web Developer</p>
          <div className="social-links">
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
