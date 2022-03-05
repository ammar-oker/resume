import React from 'react';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import SocialLink from './SocialLink';
import formatDate from '../utils/formatDate';
import {
  CssChip,
  DockerChip,
  HtmlChip,
  JavascriptChip,
  JenkinsChip,
  LaravelChip,
  NextChip,
  NodeChip,
  PhpChip,
  ReactChip,
  ReduxChip,
  SagaChip,
  TypescriptChip,
  VueChip,
  WordPressChip,
} from './TechChips';

const experiences = [
  {
    id: 'getir',
    title: 'Web Developer',
    tech: [
      <JavascriptChip key="getir-js" />,
      <ReactChip key="getir-react" />,
      <NextChip key="getir-next" />,
      <ReduxChip key="getir-redux" />,
      <SagaChip key="getir-saga" />,
    ],
    startDate: '11-01-2021',
    company: {
      name: 'Getir',
      location: 'Istanbul, TR',
      website: 'https://getir.com/',
      linkedin: 'https://www.linkedin.com/company/getir/',
      logo: '/resume/images/getir.webp',
    },
  },
  {
    id: 'vl',
    title: 'Front-end Developer',
    tech: [
      <JavascriptChip key="vl-js" />,
      <TypescriptChip key="vl-ts" />,
      <ReactChip key="vl-react" />,
      <VueChip key="vl-vue" />,
      <NodeChip key="vl-node" />,
      <DockerChip key="vl-docker" />,
      <JenkinsChip key="vl-jenkins" />,
      <WordPressChip key="vl-wp" />,
    ],
    startDate: '09-01-2020',
    endDate: '09-30-2021',
    highlights: [
      // 'I was responsible for all web projects in the company.',
      'Reduced the bundle size of one of our products by 70% which led to significant performance increase.',
      'Introduce dark mode to one of our products which made it easier to use by the night-shift users.',
    ],
    company: {
      name: 'Volt Lines',
      location: 'Istanbul, TR',
      website: 'https://www.voltlines.com/en-ae/',
      linkedin: 'https://www.linkedin.com/company/voltlines/',
      logo: '/resume/images/voltlines.webp',
    },
  },
  {
    id: 'lipo',
    title: 'Javascript Developer',
    tech: [
      <JavascriptChip key="lipo-js" />,
      <HtmlChip key="lipo-html" />,
      <CssChip key="lipo-css" />,
      <PhpChip key="lipo-php" />,
      <WordPressChip key="lipo-wp" />,
      <LaravelChip key="lipo-laravel" />,
    ],
    startDate: '04-01-2019',
    endDate: '08-31-2020',
    company: {
      name: 'Lippo Grup',
      location: 'Istanbul, TR',
      website: 'https://lippogrup.com/',
      linkedin: 'https://www.linkedin.com/company/lippo-grup/',
      logo: '/resume/images/lippo.webp',
    },
  },
];

export default function WorkExperience() {
  return (
    <section>
      <h3 className="fs-6 text-uppercase text-primary">
        <b>Experience</b>
      </h3>
      {experiences.map(
        ({ id, title, company, tech, highlights, startDate, endDate }) => (
          <div
            key={id}
            className="content p-3 rounded-3 mb-3 w-100"
            style={{ background: 'rgba(191, 215, 237, 0.2)' }}
          >
            <div className="d-flex w-100 justify-content-between">
              <h4 className="fs-5">{title}</h4>
              <span
                className="text-muted d-block mb-2"
                style={{ fontSize: '10pt' }}
              >
                {formatDate(startDate)} ~{' '}
                {endDate ? formatDate(endDate) : 'Present'}
              </span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <div>
                <img
                  className="rounded-3"
                  height="50px"
                  width="50px"
                  alt={company.name}
                  src={company.logo}
                />
              </div>
              <div className="ms-2">
                <h5 className="m-0">
                  <strong className="fs-5">{company.name}</strong> -{' '}
                  <em className="text-muted fs-6">{company.location}</em>
                </h5>
                <ul className="list-unstyled m-0 list-inline">
                  <li className="list-inline-item">
                    <SocialLink
                      icon={faLinkedinIn}
                      title={`${company.name} on LinkedIn`}
                      className="fs-6 text-muted"
                      href={company.linkedin}
                    />
                  </li>
                  <li className="list-inline-item">
                    <SocialLink
                      icon={faGlobe}
                      className="fs-6 text-muted"
                      title={`Visit ${company.name} website`}
                      href={company.website}
                    />
                  </li>
                </ul>
              </div>
            </div>
            {tech && <div className="chips-stack">{[...tech]}</div>}
            {highlights && (
              <ul>
                {highlights.map((item, i) => (
                  <li key={`highlight-${i}`}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ),
      )}
    </section>
  );
}
