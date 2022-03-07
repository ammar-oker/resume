import React from 'react';

export default function Projects({ className }) {
  return (
    <section className={className}>
      <h3 className="fs-6 text-uppercase text-primary">
        <b>Projects</b>
      </h3>
      <div className="d-flex">
        <img
          src="/resume/images/spotifier.webp"
          alt="Bursa Uludağ University"
          height="50px"
          width="50px"
        />
        <div className="ms-2">
          <h4 className="fs-6 mb-1">
            <b>Spotify Insights</b>
          </h4>
          <a
            className="fs-6"
            target="_blank"
            rel="noreferrer"
            href="https://insights.spotifier.club/"
          >
            insights.spotifier.club
          </a>
        </div>
      </div>
    </section>
  );
}
