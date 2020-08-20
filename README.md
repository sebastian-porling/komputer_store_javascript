# Komputer Store Task

This solution is made by Sebastian Porling.

## Display

You can visit [porling.me/komputer_store_javascript/](http://porling.me/komputer_store_javascript/) to see the solution!

## Motivation

I use JSON files to simulate a fetch request using the fetch API. All fetches is made in the **fetch.js**.
The classes **account.js** and **work.js** represents the accounts and their actions avalible.
The **render.js** handles all rendering for the DOM, it also had to register one click event, as when we fetch we have to re-register the event. I would want to have it in the **main.js** class but couldn't get it to work.

In **main.js** we handle most of the actions. Because we register almost all events. So it works kind of like a controller. The **startup.js** initializes the global variables for handling computers, account and work data.
