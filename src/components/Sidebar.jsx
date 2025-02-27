"use client";
import { navItems } from "@/data/data";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const pathname = usePathname();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={`aside ${showSidebar ? "open" : ""}`}>
      <div
        className={`nav-toggler ${showSidebar ? "open" : ""}`}
        onClick={toggleSidebar}
      >
        <span></span>
      </div>

      <div className="aside-inner">
        <ThemeToggle />
        <div className="flex justify-center">
          <img
            src="/tuhinphoto.jpg"
            alt="profile"
            className="shadow-dark w-20 h-20 rounded-full"
          />
        </div>
        {/*<div className="logo">
          <a href="#">DevTuhin</a>
        </div>*/}

        <ul className="nav">
          {navItems &&
            navItems?.map((item) => {
              return (
                <li key={item?.id}>
                  <Link
                    href={item?.link}
                    className={pathname === item.link ? "active" : ""}
                  >
                    {" "}
                    <i className="fa fa-home"></i> {item?.title}
                  </Link>
                </li>
              );
            })}
        </ul>

        <div className="copyright-text">
          &copy; {new Date().getFullYear()} | Made by Dev Tuhin
        </div>
      </div>
    </div>
  );
}
