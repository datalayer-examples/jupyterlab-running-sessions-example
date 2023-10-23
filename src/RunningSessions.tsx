import { useState, useEffect } from "react";
import { Lumino } from "@datalayer/jupyter-react/lib/jupyter/lumino/Lumino";
import { Box } from "@primer/react";
import { IRunningSessionManagers, RunningSessions } from '@jupyterlab/running';

export type RunningSessionsProps = {
  runningSessionManagers: IRunningSessionManagers;
}

const JupyterLabRunningSessions = (props: RunningSessionsProps) => {
  const { runningSessionManagers } = props;
  const [runningSessions, setRunningSessions] = useState<RunningSessions>();
  useEffect(() => {
    const runningSessions = new RunningSessions(runningSessionManagers);
    setRunningSessions(runningSessions);
  }, [runningSessionManagers]);
  return (
    <div style={{margin: 10}}>
      <h1>This is a 🪐 Lumino Widget displayed as a ⚛️ React.js Component 🎉</h1>
      { runningSessions &&
        <Box
          sx={{
            '& .jp-RunningSessions': {
              minHeight: 600
            }
          }}
        >
          <Lumino>
            {runningSessions}
          </Lumino>
        </Box>
      }
    </div>
  );
}

export default JupyterLabRunningSessions;
