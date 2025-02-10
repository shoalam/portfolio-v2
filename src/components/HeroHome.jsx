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
          <a href="https://github.com/shoalam" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
