import React from 'react';
import { faGears, faTerminal } from '@fortawesome/free-solid-svg-icons';
import {
  faDocker,
  faGit,
  faJsSquare,
  faLinux,
  faNodeJs,
  faPhp,
  faPython,
  faReact,
  faVuejs,
  faSass,
  faWordpressSimple,
  faCss3,
  faLaravel,
  faHtml5,
} from '@fortawesome/free-brands-svg-icons';

import Chip from './Chip';

const nextLogo = '/svgs/nextjs.svg';
const nuxtLogo = '/svgs/nuxtjs.svg';
const reduxLogo = '/svgs/redux.svg';
const typescriptLogo = '/svgs/typescript.svg';
const graphqlLogo = '/svgs/graphql.svg';
const webpackLogo = '/svgs/webpack.svg';
const apiIcon = '/svgs/api.svg';
const pwaLogo = '/svgs/pwa.svg';
const jestLogo = '/svgs/jest.svg';
const cypressLogo = '/svgs/cypress.svg';
const expressLogo = '/svgs/expressjs.svg';
const jenkinsLogo = '/svgs/jenkins.svg';
const sagaLogo = '/svgs/redux-saga.svg';

export const JavascriptChip = ({ className }) => (
  <Chip className={className} name="Javascript" icon={faJsSquare} />
);
export const CssChip = ({ className }) => (
  <Chip className={className} name="CSS3" icon={faCss3} />
);
export const HtmlChip = ({ className }) => (
  <Chip className={className} name="HTML5" icon={faHtml5} />
);
export const SassChip = ({ className }) => (
  <Chip className={className} name="SASS" icon={faSass} />
);
export const ReactChip = ({ className }) => (
  <Chip className={className} name="React" icon={faReact} />
);
export const NextChip = ({ className }) => (
  <Chip className={className} name="NextJS" icon={nextLogo} />
);
export const VueChip = ({ className }) => (
  <Chip className={className} name="Vue" icon={faVuejs} />
);
export const NuxtChip = ({ className }) => (
  <Chip className={className} name="Nuxt" icon={nuxtLogo} />
);
export const TypescriptChip = ({ className }) => (
  <Chip className={className} name="Typescript" icon={typescriptLogo} />
);
export const GitChip = ({ className }) => (
  <Chip className={className} name="Git" icon={faGit} />
);
export const ReduxChip = ({ className }) => (
  <Chip className={className} name="Redux" icon={reduxLogo} />
);
export const GraphqlChip = ({ className }) => (
  <Chip className={className} name="GraphQL" icon={graphqlLogo} />
);
export const webpackChip = ({ className }) => (
  <Chip className={className} name="Webpack" icon={webpackLogo} />
);
export const ApiChip = ({ className }) => (
  <Chip className={className} name="RESTful API" icon={apiIcon} />
);
export const PwaChip = ({ className }) => (
  <Chip className={className} icon={pwaLogo} />
);
export const ServiceWorkersChip = ({ className }) => (
  <Chip className={className} name="Service Workers" icon={faGears} />
);
export const JestChip = ({ className }) => (
  <Chip className={className} name="Jest" icon={jestLogo} />
);
export const CypressChip = ({ className }) => (
  <Chip className={className} name="Cypress" icon={cypressLogo} />
);
export const NodeChip = ({ className }) => (
  <Chip className={className} name="NodeJS" icon={faNodeJs} />
);
export const DockerChip = ({ className }) => (
  <Chip className={className} name="Docker" icon={faDocker} />
);
export const LinuxChip = ({ className }) => (
  <Chip className={className} name="Linux" icon={faLinux} />
);
export const ExpressChip = ({ className }) => (
  <Chip className={className} name="Express" icon={expressLogo} />
);
export const JenkinsChip = ({ className }) => (
  <Chip className={className} name="Jenkins" icon={jenkinsLogo} />
);
export const PhpChip = ({ className }) => (
  <Chip className={className} name="PHP" icon={faPhp} />
);
export const PythonChip = ({ className }) => (
  <Chip className={className} name="Python" icon={faPython} />
);
export const WordPressChip = ({ className }) => (
  <Chip className={className} name="WordPress" icon={faWordpressSimple} />
);
export const SshChip = ({ className }) => (
  <Chip className={className} name="SSH" icon={faTerminal} />
);
export const LaravelChip = ({ className }) => (
  <Chip className={className} name="Laravel" icon={faLaravel} />
);
export const SagaChip = ({ className }) => (
  <Chip className={className} name="Saga" icon={sagaLogo} />
);
