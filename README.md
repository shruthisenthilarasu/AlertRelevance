# AlertRelevance

A small prototype exploring how competitor alerts become more useful when they include historical context and adapt to what a user actually cares about.

Most alerts tell you what changed. This prototype explores making them tell you why it matters.

## What it shows

- an alert with the old value and new value
- how long the previous value stayed stable
- a simple history timeline for that field
- a relevance label based on user interest

## Core idea

Alerts lose value in two ways:

1. they lack context over time  
2. they stop matching what the user actually cares about

This prototype explores both by combining:
- a timeline of field changes
- lightweight relevance scoring from user engagement

## Current scope

This is intentionally small and mocked.

It does not include:
- live crawling
- backend storage
- Slack delivery
- production scoring logic

## Tech stack

- React
- TypeScript
- Vite

## Next step in a real system

In a production version, snapshots would be collected on a schedule, stored in a database, compared against prior values, and then enriched with relevance scoring before being surfaced to the user.

## Demo (45s)
[gorec-2026-03-18-23-54-53.webm](https://github.com/user-attachments/assets/0b5fe131-5650-4b84-8d46-c706b4cfeb30)

