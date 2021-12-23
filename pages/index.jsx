import React from 'react';
import Head from 'next/head';

import MetaTags from '../components/MetaTags';
import Banner from '../components/Banner';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Languages from '../components/Languages';

export default function Resume() {
  return (
    <>
      <Head>
        <title>Ammar Oker - Resume</title>
        <MetaTags />
        <meta property="og:url" content="https://ammar-oker.github.io/resume" />
      </Head>
      <div className="bg-primary text-white">
        <div className="resume-container top pb-2">
          <Banner />
        </div>
      </div>
      <div className="resume-container body pt-4">
        <div className="row justify-content-between">
          <div className="col-12 col-sm-7">
            <WorkExperience />
          </div>
          <div className="col-12 col-sm-5">
            <Skills />
            <Education className="pt-4" />
            <Languages className="pt-4" />
          </div>
        </div>
      </div>
    </>
  );
}
