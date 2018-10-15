# Project Overview

This project is a web-based application that reads RSS feeds. The major objective of this project is to write asynchronous and synchronous tests in Jasmine that tests various functionalities of the app.

## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!

## Overview of Tests -:

1. A test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.

2. A test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

3. A test that ensures the menu element is hidden by default.

4. A test that ensures the menu changes visibility when the menu icon is clicked. This test have two expectations: does the menu display itself when clicked, and does it hide when clicked again?

5. A test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

6. A test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

## Running the Project-:

The project is simple to run. You just need to clone the repo and then open the index.html file with a browser. All the tests are performed by Jasmine and are done automatic.
