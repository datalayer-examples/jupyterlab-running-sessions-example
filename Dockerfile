# Copyright (c) Datalayer, Inc. https://datalayer.io
# Distributed under the terms of the MIT License.

FROM python:3.11

RUN mkdir /opt/jupyterlab-running-sessions

WORKDIR /opt/jupyterlab-running-sessions

RUN pip install kazoo

COPY jupyterlab_running_sessions /opt/jupyterlab_running_sessions
RUN pip install -e ./jupyterlab_running_sessions

# COPY frontplane/dist.html /opt/jupyterlab-running-sessions/index.html

WORKDIR /opt/jupyterlab-running-sessions/editor

EXPOSE 9300

CMD ["python", "-m", "jupyterlab_running_sessions"]
