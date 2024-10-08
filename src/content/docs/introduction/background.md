---
title: Background
description: This document introduces the philosophy of Actors by Apify, detailing its evolution and application in web scraping and automation, and aims to establish the Actor programming model as an open standard.
---

The Actors were first introduced by [Apify](https://apify.com/) in late 2017, as a way to easily build, package, and
ship web scraping and web automation tools to customers. Over the years, Apify keeps developing the concept and has
applied it successfully to thousands of real-world use cases in many business areas, well beyond the domain of web
scraping.

Building on this experience, we're releasing this whitepaper to introduce the philosophy of Actors to the public and
receive your feedback on it. Our hope is to make the Actor programming model an open standard, which will help community
to more effectively build and ship reusable software automation tools, as well as encourage new implementations of the
model in other programming languages.

The goal of this whitepaper is to be the north star showing what the Actor programming model is and what its
implementations should support. Currently, the most complete implementation of Actor model is provided by the Apify
platform, with SDKs for [Node.js](https://sdk.apify.com/) and [Python](https://pypi.org/project/apify/), and
a [command-line interface (CLI)](https://docs.apify.com/cli). Beware that the frameworks might not yet implement all the
features of Actor programming model described in this whitepaper. This is work in progress. 
