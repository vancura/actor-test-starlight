---
title: Run environment
description: The document outlines the operational environment for Actors in a Docker container with file, network access, and web server capabilities.
---

The Actors run within an isolated Docker container with access to local file system and network, and they can perform an
arbitrary computing activity or call external APIs. The **standard output** of the Actor's program (stdout and stderr)
is printed out and logged, which is useful for development and debugging.

To inform the users about the progress, the Actors might set a status message, which is then displayed in the user
interface and also available via API.

Running Actors can also launch a web server, which is assigned a unique local or public URL to receive HTTP requests.
For example, this is useful for messaging and interaction between Actors, for running request-response REST APIs, or
providing a full-featured website.

The Actors can store their working data or results into specialized **storages** called Key-value store and Dataset
storages, from which they can be easily exported using API or integrated in other Actors.
