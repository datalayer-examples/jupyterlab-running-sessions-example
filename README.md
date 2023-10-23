[![Datalayer](https://assets.datalayer.tech/datalayer-25.svg)](https://datalayer.io)

[![Become a Sponsor](https://img.shields.io/static/v1?label=Become%20a%20Sponsor&message=%E2%9D%A4&logo=GitHub&style=flat&color=1ABC9C)](https://github.com/sponsors/datalayer)

# 🪐 JupyterLab Running Sessions Example

> JupyterLab Running Sessions Example.

Expose the `RunningSessions` of JupyterLab `Lumino` widget as a `React.js` component.

<div align="center" style="text-align: center">
  <img alt="JupyterLab Running Sessions" src="https://datalayer-jupyter-examples.s3.amazonaws.com/jupyterlab-running-sessions.png" />
</div>

This is what it takes to show the Running Sessions in your React component.

```tsx
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
```

## Develop

```bash
pip install -e .[test]
jupyter labextension develop . --overwrite
jupyter labextension list
jupyter server extension list
yarn jupyterlab
```
