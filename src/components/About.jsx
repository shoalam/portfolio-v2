import { education, experiences, techIcons } from "@/data/data";
import Image from "next/image";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="row">
        <div className="section-title padd-15">
          <h2>About Me</h2>
        </div>
      </div>

      <div className="row">
        <div className="about-content padd-15">
          <div className="row">
            <div className="about-text padd-15">
              <h3>
                I'm Tuhin Shofiul Alam and <span>Web Developer</span>
              </h3>
              <p>
                I am Tuhin Shofiul Alam, an experienced Web Developer with over
                4 years of expertise in the field. I am passionate about
                leveraging cutting-edge technologies to solve complex challenges
                and create impactful web solutions. Throughout my career, I have
                engaged in various training programs and participated in
                competitive events, further honing my technical skills.
                Additionally, I actively contribute to multiple organizations
                and communities, collaborating with peers to drive innovation
                and foster knowledge-sharing within the web development
                industry.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="personal-info padd-15">
              <div className="row">
                <div className="info-item padd-15">
                  <p>
                    Birthday: <span>25 OCT 1987</span>
                  </p>
                </div>
                <div className="info-item padd-15">
                  <p>
                    Age: <span>37</span>
                  </p>
                </div>
                <div className="info-item padd-15">
                  <p>
                    Email: <span>shoalamdu@gmail.com</span>
                  </p>
                </div>
                <div className="info-item padd-15">
                  <p>
                    Phone: <span>+8801723553962</span>
                  </p>
                </div>
                <div className="info-item padd-15">
                  <p>
                    City: <span>Bogura, Bangladesh</span>
                  </p>
                </div>
                <div className="info-item padd-15">
                  <p>
                    Freelance: <span>Available</span>
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="buttons padd-15">
                  <a href="#" className="btn">
                    Download CV
                  </a>
                  <a
                    href="#contact"
                    data-section-index="1"
                    className="btn hire-me"
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="personal-skills">
            <h3>Technologies I Have Worked With:</h3>
            <div className="row skill-row padd-15">
              {techIcons?.map((item, i) => (
                <div className="skill-item" key={i}>
                  <img src={item?.icon} alt={item?.title} />
                  <h4>{item?.title}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="row">
            <div className="education padd-15">
              <h3 className="title">Education</h3>
              <div className="row">
                <div className="timeline-box padd-15">
                  <div className="timeline shadow-dark">
                    {education.map((item) => (
                      <div className="timeline-item" key={item.id}>
                        <div className="circle-dot"></div>
                        <h6 className="timeline-date">
                          <i className="fa fa-calendar"></i> {item.duration}
                        </h6>
                        <h4 className="timeline-title">{item.institution}</h4>
                        <h4 className="timeline-title">{item.degree}</h4>
                        <p className="timeline-text">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="experience padd-15">
              <h3 className="title">Experience</h3>
              <div className="row">
                <div className="timeline-box padd-15">
                  <div className="timeline shadow-dark">
                    {experiences.map((experience) => (
                      <div className="timeline-item" key={experience.id}>
                        <div className="circle-dot"></div>
                        <h6 className="timeline-date">
                          <i className="fa fa-calendar"></i>{" "}
                          {experience.duration}
                        </h6>
                        <h4 className="timeline-title">
                          {experience.designation} - {experience.company}
                        </h4>
                        <p className="timeline-text">
                          {experience.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
