import React, { useEffect } from "react";

export default function HeroHome() {
  useEffect(() => {
    const text = "Full Stack Developer";
    let index = 0;
    const speed = 100; // Typing speed
    const delay = 1500; // Delay before retyping
    let timeoutId;

    function typeEffect() {
      const typingTextElement = document.getElementById("typing-text");
      if (!typingTextElement) return; // Prevent error if component unmounts

      if (index < text.length) {
        typingTextElement.innerHTML += text.charAt(index);
        index++;
        timeoutId = setTimeout(typeEffect, speed);
      } else {
        timeoutId = setTimeout(() => {
          if (typingTextElement) typingTextElement.innerHTML = "";
          index = 0;
          typeEffect();
        }, delay);
      }
    }

    typeEffect();

    // Cleanup function to prevent memory leaks and errors on unmount
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="home section active" id="home">
      <div className="intro">
        <img src="/tuhinphoto.jpg" alt="profile" className="shadow-dark" />
        <h1>Tuhin Shofiul Alam</h1>
        <p>
          I'm a <span id="typing-text"></span>{" "}
        </p>
        <div className="row">
          <div className="buttons padd-15 w-full flex gap-3 justify-center mt-6">
            <a href="#" className="btn">
              Download CV
            </a>
            <a href="#contact" data-section-index="1" className="btn hire-me">
              Hire Me
            </a>
          </div>
        </div>
        <div className="social-links">
          <a href="https://www.facebook.com/shafiul.alam.3760/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
              />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/webdevelopershofi/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
