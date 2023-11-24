import { ReactWidget } from '@jupyterlab/apputils';
import { IRunningSessionManagers } from '@jupyterlab/running';
import RunningSessionsComponent from '../RunningSessions';
import { RunningSessionsProps } from "./../RunningSessions";

export class JupyterLabRunningSessionsWidget extends ReactWidget {
  private _runningSessionManagers: IRunningSessionManagers;
  constructor(props: RunningSessionsProps) {
    super();
    this._runningSessionManagers = props.runningSessionManagers;
    this.addClass('dla-Container');
  }

  render(): JSX.Element {
    return (
      <>
        <>Running Sessions</>
        <RunningSessionsComponent runningSessionManagers={this._runningSessionManagers}/>
      </>
    )
  }
}
