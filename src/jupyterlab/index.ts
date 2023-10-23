import { Token } from '@lumino/coreutils';
import { JupyterFrontEnd, JupyterFrontEndPlugin, ILayoutRestorer } from '@jupyterlab/application';
import { MainAreaWidget, ICommandPalette, WidgetTracker } from '@jupyterlab/apputils';
import { ISettingRegistry } from '@jupyterlab/settingregistry';
import { ILauncher } from '@jupyterlab/launcher';
import { ITranslator } from '@jupyterlab/translation';
import { IRunningSessionManagers, RunningSessions } from '@jupyterlab/running';
import icon from '@datalayer/icons-react/data2/PartyPopperIconJupyterLab';
import { JupyterLabRunningSessionsWidget } from './widget';

import '../../style/index.css';

export type IJupyterLabRunningSessions = {};

export const IJupyterLabRunningSessions = new Token<IJupyterLabRunningSessions>(
  '@datalayer/jupyterlab-running-sessions:plugin'
);

/**
 * The command IDs used by the plugin.
 */
namespace CommandIDs {
  export const create = 'create-jupyterlab-running-sessions-widget';
}

/**
 * Initialization data for the @datalayer/jupyterlab-running-sessions extension.
 */
const plugin: JupyterFrontEndPlugin<IJupyterLabRunningSessions> = {
  id: '@datalayer/jupyterlab-running-sessions:plugin',
  autoStart: true,
  requires: [ICommandPalette, IRunningSessionManagers, ITranslator],
  optional: [ISettingRegistry, ILauncher, ILayoutRestorer],
  provides: IJupyterLabRunningSessions,
  activate: (
    app: JupyterFrontEnd,
    palette: ICommandPalette,
    runningSessionManagers: IRunningSessionManagers,
    translator: ITranslator,
    settingRegistry?: ISettingRegistry,
    launcher?: ILauncher,
    restorer?: ILayoutRestorer,
  ): IJupyterLabRunningSessions => {
    const { commands } = app;
    const command = CommandIDs.create;
    const tracker = new WidgetTracker<MainAreaWidget<JupyterLabRunningSessionsWidget>>({
      namespace: 'jupyterlab-running-sessions',
    });
    if (restorer) {
      void restorer.restore(tracker, {
        command,
        name: () => 'jupyterlab-running-sessions',
      });
    }
    const runningSessions = new RunningSessions(runningSessionManagers, translator);
    commands.addCommand(command, {
      caption: 'Show RunningSessions',
      label: 'RunningSessions',
      icon,
      execute: () => {
        const content = new JupyterLabRunningSessionsWidget({ runningSessions: runningSessions});
        const widget = new MainAreaWidget<JupyterLabRunningSessionsWidget>({ content });
        widget.title.label = 'RunningSessions';
        widget.title.icon = icon;
        app.shell.add(widget, 'main');
        tracker.add(widget);
      }
    });
    const category = 'Datalayer Examples';
    palette.addItem({ command, category });
    if (launcher) {
      launcher.add({
        command,
        category,
        rank: 1.1,
      });
    }
    if (settingRegistry) {
      settingRegistry
        .load(plugin.id)
        .then(settings => {
          console.log('@datalayer/jupyterlab-running-sessions settings loaded:', settings.composite);
        })
        .catch(reason => {
          console.error('Failed to load settings for @datalayer/jupyterlab-running-sessions.', reason);
        });
    }
    return {};
  }
};

export default plugin;
