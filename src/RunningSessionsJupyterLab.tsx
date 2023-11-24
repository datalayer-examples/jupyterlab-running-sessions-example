import { Jupyter, JupyterLabApp } from '@datalayer/jupyter-react';

import * as lightThemeExtension from '@jupyterlab/theme-light-extension';
import * as runningExtension from '@jupyterlab/running-extension';
import * as collaborationExtension from '@jupyter/collaboration-extension';
import * as datalayerRunningSessions from './jupyterlab/index';

const JupyterLabComponent = () => (
  <JupyterLabApp
    extensions={[
      lightThemeExtension,
      collaborationExtension,
      runningExtension,
      datalayerRunningSessions,
    ]}
    position="absolute"
    height="100vh"
  />
)

export const RunningSessionsJupyterLab = () => (
  <Jupyter startDefaultKernel={false} disableCssLoading={true} collaborative={true}>
    <JupyterLabComponent/>
  </Jupyter>
)

export default RunningSessionsJupyterLab;
