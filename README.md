# sleepy-chandrasekhar

Implement a form to allow uploading a CSV file. The form should have:

- A file input for the CSV file 
- A submit button

When the form is submitted, parse the CSV data and filter the rows to only include those where the "type" column equals "ai_update".

Display the filtered data in a simple HTML table. Include these columns for now:
- id
- commit_sha 
- created_at
- tags

Don't worry about styling yet, just basic HTML elements. I'll add more functionality and styling in future requests.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with REPLACE_WITH_TECH_STACK_SUMMARY.

REPLACE_WITH_TECH_STACK_POINTS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App-Dev/sleepy-chandrasekhar.git
cd sleepy-chandrasekhar
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
