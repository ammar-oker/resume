import React from 'react';

export default function Education({ className }) {
  return (
    <section className={className}>
      <h3 className="fs-6 text-uppercase text-primary">
        <b>Education</b>
      </h3>
      <div className="d-flex">
        <img
          src="/images/uludag.png"
          alt="Bursa Uludağ University"
          height="50px"
          width="50px"
        />
        <div className="ms-2">
          <h4 className="fs-6">
            <b>Bursa Uludağ University</b>
          </h4>
          <h5 className="fs-6">
            <em>Computer Programming</em>
          </h5>
          <span className="text-muted" style={{ fontSize: '10pt' }}>
            2019 ~ 2020
          </span>
        </div>
      </div>
    </section>
  );
}
