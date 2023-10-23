/// <reference types="webpack-env" />

import { createRoot } from 'react-dom/client';
import RunningSessionsJupyterLabHeadless from './RunningSessionsJupyterLabHeadless';

import "./../style/index.css";

const div = document.createElement('div');
document.body.appendChild(div);
const root = createRoot(div)

if (module.hot) {
  module.hot.accept('./RunningSessionsJupyterLabHeadless', () => {
    const RunningSessionsJupyterLabHeadless = require('./RunningSessionsJupyterLabHeadless').default;
    root.render(<RunningSessionsJupyterLabHeadless/>);
  })
}

root.render(<RunningSessionsJupyterLabHeadless />);
