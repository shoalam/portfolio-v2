import Link from "next/link";
import React from "react";

export default function Sidebar({ setActiveSection }) {
  return (
    <div className="aside">
      <div className="nav-toggler">
        <span></span>
      </div>

      <div className="aside-inner">
        <div className="logo">
          <a href="#">DevTuhin</a>
        </div>

        <ul className="nav">
          <li>
            <Link href="#home" onClick={() => setActiveSection("home")}>
              {" "}
              <i className="fa fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link href="#about" onClick={() => setActiveSection("about")}>
              {" "}
              <i className="fa fa-user"></i> About
            </Link>
          </li>
          <li>
            <Link href="#services" onClick={() => setActiveSection("services")}>
              {" "}
              <i className="fa fa-list"></i> Services
            </Link>
          </li>
          <li>
            <Link
              href="#portfolio"
              onClick={() => setActiveSection("portfolio")}
            >
              {" "}
              <i className="fa fa-briefcase"></i> Portfolio
            </Link>
          </li>
          <li>
            <Link href="#blog" onClick={() => setActiveSection("blog")}>
              {" "}
              <i className="fa fa-envelope"></i> Blog
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={() => setActiveSection("contact")}>
              {" "}
              <i className="fa fa-comments"></i> Contact
            </Link>
          </li>
        </ul>

        <div className="copyright-text">
          &copy; {new Date().getFullYear()} | Made by Dev Tuhin
        </div>
      </div>
    </div>
  );
}
