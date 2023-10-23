// Pick only Lumino to avoid loading unneeded components/css.
import { Lumino } from "@datalayer/jupyter-react/lib/jupyter/lumino/Lumino";
import { RunningSessions } from '@jupyterlab/running';

export type RunningSessionsProps = {
  runningSessions: RunningSessions;
}

const JupyterLabRunningSessions = (props: RunningSessionsProps) => {
  const { runningSessions } = props;
  return (
    <div style={{margin: 10}}>
      <h1>This is a 🪐 Lumino Widget displayed as a ⚛️ React.js component.</h1>
      <Lumino>
        {runningSessions}
      </Lumino>
    </div>
  );
}

export default JupyterLabRunningSessions;
