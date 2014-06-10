# grunt-init-browserify-qunit

> Create a browserify application with [grunt-init][], including QUnit unit tests for your UI.

[grunt-init]: http://gruntjs.com/project-scaffolding

## What it is
This is a scaffold project which will create a simple web application template for a site which is built using Browserify.

It has the following bundled extras:
  - Separate vendor and user bundles (for faster load times).
  - Uglify and Minification of bundles
  - Automatic bundling of static dependencies
  - Test Driven Development of UI components

Tests use:
  - QUnit

## Tests being run
![QUnit Tests](/screenshots/test.png?raw=true "QUnit")

## Installation
If you haven't already done so, install [grunt-init][].

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use git to clone this template into that directory, as follows:

```
git clone https://github.com/Stono/grunt-init-browserify-qunit ~/.grunt-init/browserify-qunit
```

_(Windows users, see [the documentation][grunt-init] for the correct destination directory path)_

## Usage

At the command-line, cd into an empty directory, run this command and follow the prompts.

```
grunt-init browserify-qunit
```

_Note that this template will generate files in the current directory, so be sure to change to a new directory first if you don't want to overwrite existing files._
