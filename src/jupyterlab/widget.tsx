import { ReactWidget } from '@jupyterlab/apputils';
import { RunningSessions } from '@jupyterlab/running';
import RunningSessionsComponent from '../RunningSessions';
import { RunningSessionsProps } from "./../RunningSessions";

export class JupyterLabRunningSessionsWidget extends ReactWidget {
  private _runningSessions: RunningSessions;
  constructor(props: RunningSessionsProps) {
    super();
    this._runningSessions = props.runningSessions;
    this.addClass('dla-Container');
  }

  render(): JSX.Element {
    return (
      <>
        <RunningSessionsComponent runningSessions={this._runningSessions}/>
      </>
    )
  }
}
