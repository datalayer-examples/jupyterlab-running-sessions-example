/// <reference types="webpack-env" />

import { createRoot } from 'react-dom/client';
import RunningSessionsJupyterLab from './RunningSessionsJupyterLab';

import "./../style/index.css";

const div = document.createElement('div');
document.body.appendChild(div);
const root = createRoot(div)

if (module.hot) {
  module.hot.accept('./RunningSessionsJupyterLab', () => {
    const RunningSessionsJupyterLab = require('./RunningSessionsJupyterLab').default;
    root.render(<RunningSessionsJupyterLab/>);
  })
}

root.render(<RunningSessionsJupyterLab />);
