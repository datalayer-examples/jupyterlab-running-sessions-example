"""The JupyterLab Running Sessions Server application."""

import os

from traitlets import Unicode

from jupyter_server.utils import url_path_join
from jupyter_server.extension.application import ExtensionApp, ExtensionAppJinjaMixin

from ._version import __version__

from .handlers.index.handler import IndexHandler


DEFAULT_STATIC_FILES_PATH = os.path.join(os.path.dirname(__file__), "./static")

DEFAULT_TEMPLATE_FILES_PATH = os.path.join(os.path.dirname(__file__), "./templates")


class JupyterLabRunningSessionsExtensionApp(ExtensionAppJinjaMixin, ExtensionApp):
    """The JupyterLab Running Sessions Server extension."""

    name = "jupyterlab_running_sessions"

    extension_url = "/jupyterlab_running_sessions"

    load_other_extensions = True

    static_paths = [DEFAULT_STATIC_FILES_PATH]
    template_paths = [DEFAULT_TEMPLATE_FILES_PATH]

    config_a = Unicode("", config=True, help="Config A example.")
    config_b = Unicode("", config=True, help="Config B example.")
    config_c = Unicode("", config=True, help="Config C example.")

    def initialize_settings(self):
        pass

    def initialize_templates(self):
        self.serverapp.jinja_template_vars.update({"jupyterlab_running_sessions_version" : __version__})

    def initialize_handlers(self):
        handlers = [
            ("jupyterlab_running_sessions", IndexHandler),
        ]
        self.handlers.extend(handlers)


# -----------------------------------------------------------------------------
# Main entry point
# -----------------------------------------------------------------------------

main = launch_new_instance = JupyterLabRunningSessionsExtensionApp.launch_instance
