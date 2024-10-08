---
title: Output
description: This document outlines the structure and generation process for an Actor's output object in a standardized JSON format, facilitating easy display, consumption, and integration of Actor results.
---

While the input object provides a standardized way to invoke Actors, the Actors can also generate an **output object**,
which is a standardized way to display, consume, and integrate Actors' results.

The Actor results are typically fully available only after the Actor run finishes, but the consumers of the results
might want to access partial results during the run. Therefore, Actors don't generate the output object in their code,
but they define an Output schema file, which contains instruction how to generate such output object automatically.

You can define how the Actor output looks like using the Output schema file. The system uses this information to
automatically generate an immutable JSON file, which tells users where to find the results produced by the Actor. The
output object is stored by the system to the Actor run object under the `output` property, and returned via API
immediately when the Actor is started, without the need to wait for it to finish or generate the actual results. This is
useful to automatically generate UI previews of the results, API examples, and integrations.

The output object is similar to input object, as it contains properties and values. For example, for the
`bob/screenshot-taker` Actor, the output object can look like this:

```jsonc
{
  "screenshotUrl": "https://api.apify.com/v2/key-value-stores/skgGkFLQpax59AsFD/records/screenshot.jpg",
  "productImages": "https://api.apify.com/v2/key-value-stores/skgGkFLQpax59AsFD/records/product*.jpg",
  "productDetails": "https://api.apify.com/datasets/9dFknjkxxGkspwWd/records?fields=url,name",
  "productExplorer": "https://bob--screenshot.apify.actor/product-explorer",
  // or this with live view
  "productExplorer": "https://13413434.runs.apify.net/product-explorer"
}
```
