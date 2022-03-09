# Languages
-----------

[shresht7.github.io/Languages](https://shresht7.github.io/Languages/)

![language-pie-chart](./screenshot.png)

Aggregated stats of all the languages that I use across all my repositories.

## 🗺 Project Details
---------------------

The project is a **svelte** single-page-application that uses **vite** to get built as a static-site to be deployed on **gh-pages**.

The project makes use of **GitHub Actions** to automatically _fetch the language data_, _rebuild the site_ and _deploy to gh-pages_ on a cron-schedule.

> While the site can fetch language data for any GitHub user client-side, it is a slow and inefficient process, as an API request goes out for every repository that a user has. Also, language data doesn't really change that often and so up-to-date information isn't very meaningful. This is why I opt to generate languages stats at build-time. The site is built monthly using GitHub Actions.