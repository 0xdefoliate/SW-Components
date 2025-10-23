# README

This is a FOSS React UI library for the **SolidWeather** weather app, which is currently being worked on.  
You may use it under the terms of the **MIT Licence**.

## Development

### Prerequisites

To start developing, you need:

* `git` -- *any modern version*
* a computer running a modern **UNIX** OS, such as macOS or GNU/Linux (MS Windows might work but I can't say anything
  about it since I am personally
  Windows-free)
* `node >= 24` (other versions may work, but not tested)
* `npm >= 11`. Please note that this project won't use **yarn** or **pnpm**, among others for development. However
  inside Docker, we use **pnpm**.
* `Docker Desktop`: optional, but recommended since it increases security during development.
* A good code editor, like **vim** ~~(not Emacs)~~, **Emacs**, **WebStorm** (recommended), **VS Code**, etc.

### Cloning

To clone the repository, do the following:

```bash
$ git clone git@gitlab.com:solidweather/components.git
...
# Rename `components` to `solidweather-components` for reduced possibilities of filename collisions.
$ mv -f components solidweather-components
...
$ cd solidweather-components
```

Also, don't forget to perform an `npm install`!

### Starting the development server

You have **two options** when it comes to the dev server, which is the one provided by `vite`.

You may either run it:  
**A)** inside a **Docker container**. (recommended)  
**B)** directly on your machine (not recommended for security reasons)

#### Doing it the Docker way

To run the Docker container, you need Docker Desktop installed on your machine, as outlined in *Prerequisites*.  
Then, you may execute:

```bash
$ npm run docker:server
```

**NOTE:** It may take up to 20-50 seconds for the dev server to be setup, so grab a cup of coffee in the meanwhile.

After Docker's done its things, you can enter `localhost:5173` in a browser of choice and hope for the best!

#### Doing it directly on your machine

This option is faster and more straightforward than using Docker, but is more unsafe,  
since you're running potentially unvetted npm packages directly on your machine.

To do this, do the following:

```bash
$ npm run unsafe:server
...
```

Then go to `localhost:5173` in your browser.

<hr />

If you encounter errors, doing it either way, please read the logs and try to resolve it.  
If you're stuck, please open an issue in this project's GitLab repository.

### Merge requests (MRs)

Since we're using GitLab we work with Merge Requests (synonymous with Pull Requests).

If you got something you want to add, or fix, create a MR in GitLab and fetch the branch created to your local machine.

When you're happy, commit it and push it back.  
Then, I'll review it and determine if it gets merged.
If not, then I'll constructively (hopefully) tell you why it won't be merged.