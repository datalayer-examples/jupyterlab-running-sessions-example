import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Jupyter, JupyterLabApp, JupyterLabAppAdapter } from '@datalayer/jupyter-react';
// import RunningSessions from './RunningSessions';

import * as lightThemeExtension from '@jupyterlab/theme-light-extension';
import * as runningExtension from '@jupyterlab/running-extension';
import * as collaborationExtension from '@jupyter/collaboration-extension';
// import * as datalayerRunningSessions from './jupyterlab/index';

const ThemeGlobalStyle = createGlobalStyle<any>`
  body {
    background-color: white !important;
    overflow: auto;
  }
`

const JupyterLabHeadless = () => {
  const [_, setJupyterLabAppAdapter] = useState<JupyterLabAppAdapter>();
  const onJupyterLab = (jupyterLabAppAdapter: JupyterLabAppAdapter) => {
    setJupyterLabAppAdapter(jupyterLabAppAdapter);
  }
  return (
    <>
      {/* jupyterLabAppAdapter && <RunningSessions/> */}
      <JupyterLabApp
        extensions={[
          lightThemeExtension,
          runningExtension,
          collaborationExtension,
//          datalayerRunningSessions,
        ]}
        headless={true}
        onJupyterLab={onJupyterLab}
      />
    </>
  )
}

export const RunningSessionsJupyterLabHeadless = () => (
  <Jupyter startDefaultKernel={false} disableCssLoading={true} collaborative={true}>
    <ThemeGlobalStyle />
    <JupyterLabHeadless/>
  </Jupyter>
)

export default RunningSessionsJupyterLabHeadless;
