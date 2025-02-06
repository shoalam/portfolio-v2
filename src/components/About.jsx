export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
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
                  Hi, I'm a web developer and have been in this field for more
                  than 4 years. It feels good to help and solve problems,
                  problems, and logic that is applied to today's technology.
                  Regarding web developers, I have participated in several
                  training and competitions in the same field. I also contribute
                  with several organizations and communities.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="personal-info padd-15">
                <div className="row">
                  <div className="info-item padd-15">
                    <p>
                      Birthday: <span>29 Nov 1998</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Age: <span>21</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Email: <span>triatop9@gmail.com</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Phone: <span>+62 01010101</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      City: <span>Batu, Indonesia</span>
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

              <div className="skills padd-15">
                <div className="row">
                  <div className="skill-item padd-15">
                    <h5>Laravel</h5>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: "90%" }}
                      ></div>
                      <div className="skill-percent">90%</div>
                    </div>
                  </div>

                  <div className="skill-item padd-15">
                    <h5>PHP</h5>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: "95%" }}
                      ></div>
                      <div className="skill-percent">95%</div>
                    </div>
                  </div>

                  <div className="skill-item padd-15">
                    <h5>Wordpress</h5>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: "90%" }}
                      ></div>
                      <div className="skill-percent">90%</div>
                    </div>
                  </div>

                  <div className="skill-item padd-15">
                    <h5>Javascript</h5>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: "85%" }}
                      ></div>
                      <div className="skill-percent">85%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="education padd-15">
                <h3 className="title">Education</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h6 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2014 - 2017
                        </h6>
                        <h4 className="timeline-title">
                          High School SMK Islam Batu
                        </h4>
                        <p className="timeline-text">
                          Basic understanding of programming, logic that I can
                          get from school and experience high school level
                          competition.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="experience padd-15">
                <h3 className="title">Experience</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h6 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2016
                        </h6>
                        <h4 className="timeline-title">
                          Frontend Developer - Kebunbibit.
                        </h4>
                        <p className="timeline-text">
                          Armed with html, css, wordpress and blogger. I learned
                          the basics from a programmer for the first time.
                        </p>
                      </div>
                    </div>
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
