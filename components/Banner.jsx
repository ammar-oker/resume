import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import {
  faAt,
  faLocationDot,
  faMobileScreenButton,
} from '@fortawesome/free-solid-svg-icons';

import SocialLink from './SocialLink';

export default function Banner() {
  return (
    <section>
      <div className="row justify-content-between">
        <div className="col-12 col-sm-6">
          <h1 className="display-3">Ammar Oker</h1>
          <h2 className="fs-5">Software Engineer - Web</h2>
          <ul className=" list-inline">
            <li className="list-inline-item">
              <SocialLink
                icon={faLinkedinIn}
                title="Ammar Oker on LinkedIn"
                className="text-white"
                href="https://www.linkedin.com/in/ammar-oker/"
              />
            </li>
            <li className="list-inline-item">
              <SocialLink
                icon={faGithub}
                title="Ammar Oker on Github"
                className="text-white"
                href="https://github.com/ammar-oker"
              />
            </li>
            <li className="list-inline-item">
              <SocialLink
                icon={faStackOverflow}
                title="Ammar Oker on StackOverflow"
                className="text-white"
                href="https://stackoverflow.com/users/11877987/ammar-oker"
              />
            </li>
          </ul>
        </div>
        <div className="col-12 col-sm-6 d-flex flex-column justify-content-center align-items-start align-items-sm-end">
          {/*<a href="https://www.irs.gov/pub/irs-pdf/f1040x.pdf" target="_blank"*/}
          {/*   type="application/octet-stream" download="yourpdf.pdf" className='btn btn-outline-light btn-sm mb-2 d-print-none'>*/}
          {/*  <FontAwesomeIcon style={{ width: '14px' }} icon={faDownload} /> Download Resume as PDF*/}
          {/*</a>*/}
          <ul className="m-0 list-unstyled">
            <li className="pb-2 fs-5">
              <FontAwesomeIcon
                height={'20px'}
                className="fs-5"
                icon={faLocationDot}
              />{' '}
              <i>Istanbul, Turkey</i>
            </li>
            <li className="pb-1">
              <a
                className="text-decoration-none text-white"
                href="mailto:oker.ammar@gmail.com"
              >
                <FontAwesomeIcon height={'20px'} className="fs-6" icon={faAt} />{' '}
                oker.ammar@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
