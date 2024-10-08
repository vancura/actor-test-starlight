---
title: Storage
description: This document provides an overview of the Actor system's specialized storage options, including Key-value stores and Datasets, and their integration and usage within various applications.
---

The Actor system provides two specialized storages that can be used by Actors for storing files and results: **Key-value
store** and **Dataset**, respectively. For each Actor run, the system automatically creates so-called **default storages
** of both these types in empty state and makes them readily available for the Actor.

Alternatively, a caller can request reusing existing storage when starting a new Actor run. This is similar to
redirecting standard input in UNIX, and it is useful if you want an Actor to operate on an existing Key-value store or
Dataset instead of creating a new one.

<!-- TODO: The above feature is not implemented yet -->

Besides these so-called **default storages**, which are created or linked automatically, the Actors are free to create
new storages or access existing ones, either by ID or a name that can be set to them (e.g. `bob/screenshots`).
The input schema file and output schema file provide special support for referencing these storages, in order to
simplify linking an output of one Actor to an input of another. The storages are accessible through an API and SDK also
externally, for example, to download results when the Actor finishes. Note that the Actors are free to access any other
external storage system through a third-party API, e.g. an SQL database or a vector database.

## Key-value store

The Key-value store is a simple data storage that is used for saving and reading files or data records. The records are
represented by a unique text key and the data associated with a MIME content type. Key-value stores are ideal for saving
things like screenshots, web pages, PDFs, or to persist the state of Actors e.g. as a JSON file.

Each Actor run is associated with a default empty Key-value store, which is created exclusively for the run, or
alternatively with an existing Key-value store if requested by the user on Actor start. The [Actor input](input) is
stored as JSON file into the default Key-value store under the key defined by the `ACTOR_INPUT_KEY` environment
variable (usually `INPUT`). The Actor can read this input object using the Get input function.

The Actor can read and write records to key-value stores using the API. For details,
see Key-value store access.

The Actor can define a schema for the Key-value store to ensure files stored in it conform to certain rules. For
details, see Storage schema files.

## Dataset

The Dataset is an append-only storage that allows you to store a series of data objects such as results from web
scraping, crawling, or data processing jobs. You or your users can then export the Dataset to formats such as JSON, CSV,
XML, RSS, Excel, or HTML.

The Dataset represents a store for structured data where each object stored has the same attributes, such as online
store products or real estate offers. You can imagine it as a table, where each object is a row and its attributes are
columns. Dataset is an append-only storage—you can only add new records to it, but you cannot modify or remove existing
records. Typically, it is used to store an array or collection of results, such as a lit of products or web pages.

The Actor can define a schema for the Dataset to ensure objects stored in it conform to certain rules. For details,
see Storage schema files.

## Integrations

**Actors are designed for interoperability.** Thanks to the input and output schemas, it easy to connect Actors with
external systems, be it directly via REST API, Node.js or Python clients, CLI, or no-code automations. From the schema
files, the system can automatically generate API documentation, OpenAPI specification, and validate inputs and outputs,
simplifying their integrations to any other systems.

Furthermore, Actors can interact with themselves, for example [start another Actors](#start-another-actor),
attach [Webhooks](#attach-webhook-to-an-actor-run) to process the results, or [Metamorph](#metamorph) into another Actor
to have it finish the work.

## What Actors are not

Actors are best suited for compute operations that take an input, perform an isolated job for a user, and potentially
produce some output.

For long-running jobs, Actor execution might be migrated from server to another server, making it unsuitable for running
dependable storage workloads such as SQL databases.

As Actors are based on Docker, it takes certain amount of time to spin up the container and launch its main process.
Doing this for every small HTTP transaction (e.g. API call) is not efficient, even for highly-optimized Docker images.
The [Standby mode](#standby-mode) enables running an Actor as a web server, to more effectively process small API
requests.
