import React from 'react';

import * as C from './TechChips';

export default function Skills() {
  return (
    <section>
      <h3 className="fs-6 text-uppercase text-primary">
        <b>Skills</b>
      </h3>
      <div className="chips-stack">
        <C.JavascriptChip />
        <C.SassChip />
        <C.ReactChip />
        <C.NextChip />
        <C.NuxtChip />
        <C.TypescriptChip />
        <C.ReduxChip />
        <C.GraphqlChip />
        <C.VueChip />
        <C.webpackChip />
        <C.ApiChip />
        <C.JestChip />
        <C.CypressChip />
        <C.NodeChip />
        <C.DockerChip />
        <C.ExpressChip />
        <C.JenkinsChip />
        <C.GitChip />
        <C.ServiceWorkersChip />

        {/* Ignored on print */}
        <C.SagaChip className="d-print-none" />
        <C.HtmlChip className="d-print-none" />
        <C.CssChip className="d-print-none" />
        {/*<C.PwaChip className='d-print-none' />*/}
        <C.LinuxChip className="d-print-none" />
        <C.PhpChip className="d-print-none" />
        <C.PythonChip className="d-print-none" />
        <C.WordPressChip className="d-print-none" />
        <C.SshChip className="d-print-none" />
        <C.LaravelChip className="d-print-none" />
      </div>
    </section>
  );
}
