import React from "react";

export default function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="row">
        <div className="section-title padd-15">
          <h2>Portfolio</h2>
        </div>
      </div>

      <div className="row">
        <div className="portfolio-filter padd-15">
          <button type="button" className="active" data-filter="all">
            All
          </button>
          <button type="button" data-filter="web-design">
            Web Design
          </button>
          <button type="button" data-filter="photography">
            Photography
          </button>
          <button type="button" data-filter="wordpress">
            Wordpress
          </button>
        </div>
      </div>

      <div className="row">
        <div className="portfolio-item padd-15" data-category="web-design">
          <div className="portfolio-item-inner shadow-dark">
            <div className="portfolio-img">
              <img
                src="/portfolio/pesantren-alandalus.com.png"
                alt="portfolio"
              />
            </div>
            <div className="portfolio-info">
              <h4>Web Design</h4>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="#ec1839" fillRule="evenodd" clipRule="evenodd">
                    <path d="M10.5 5.5a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-6.5 5a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0" />
                    <path d="M14.47 14.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-item padd-15" data-category="photography">
          <div className="portfolio-item-inner shadow-dark">
            <div className="portfolio-img">
              <img
                src="/portfolio/jadwal.pesantren-alandalus.com.png"
                alt="portfolio"
              />
            </div>
            <div className="portfolio-info">
              <h4>Photography</h4>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="#ec1839" fillRule="evenodd" clipRule="evenodd">
                    <path d="M10.5 5.5a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-6.5 5a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0" />
                    <path d="M14.47 14.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-item padd-15" data-category="web-design">
          <div className="portfolio-item-inner shadow-dark">
            <div className="portfolio-img">
              <img
                src="/portfolio/pendaftaran.stitek.balikdiwa.ac.id.png"
                alt="portfolio"
              />
            </div>
            <div className="portfolio-info">
              <h4>Web Design</h4>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="#ec1839" fillRule="evenodd" clipRule="evenodd">
                    <path d="M10.5 5.5a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-6.5 5a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0" />
                    <path d="M14.47 14.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-item padd-15" data-category="wordpress">
          <div className="portfolio-item-inner shadow-dark">
            <div className="portfolio-img">
              <img
                src="/portfolio/pengaduan.pesantren-alandalus.com.png"
                alt="portfolio"
              />
            </div>
            <div className="portfolio-info">
              <h4>Wordpress</h4>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="#ec1839" fillRule="evenodd" clipRule="evenodd">
                    <path d="M10.5 5.5a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-6.5 5a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0" />
                    <path d="M14.47 14.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-item padd-15" data-category="web-design">
          <div className="portfolio-item-inner shadow-dark">
            <div className="portfolio-img">
              <img src="/portfolio/sik.punya.id.png" alt="portfolio" />
            </div>
            <div className="portfolio-info">
              <h4>Web Design</h4>
              <div className="icon">
                <i className="fa fa-search"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-item padd-15" data-category="web-design">
          <div className="portfolio-item-inner shadow-dark">
            <div className="portfolio-img">
              <img src="/portfolio/anakteladan.id.png" alt="portfolio" />
            </div>
            <div className="portfolio-info">
              <h4>Web Design</h4>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="#ec1839" fillRule="evenodd" clipRule="evenodd">
                    <path d="M10.5 5.5a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-6.5 5a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0" />
                    <path d="M14.47 14.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
