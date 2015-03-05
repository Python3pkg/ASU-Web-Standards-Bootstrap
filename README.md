ASU Web Standards Bootstrap
===========================

[![Travis](http://img.shields.io/travis/gios-asu/ASU-Web-Standards-Bootstrap.svg?style=flat)](https://travis-ci.org/gios-asu/ASU-Web-Standards-Bootstrap)
[![Code Climate](http://img.shields.io/codeclimate/github/gios-asu/ASU-Web-Standards-Bootstrap.svg?style=flat)](https://codeclimate.com/github/gios-asu/ASU-Web-Standards-Bootstrap) 
[![Stories in Ready](https://badge.waffle.io/gios-asu/asu-web-standards-bootstrap.svg?label=issues-ready&title=Issues+Ready)](http://waffle.io/gios-asu/asu-web-standards-bootstrap)

[![Github release](https://img.shields.io/github/release/gios-asu/ASU-Web-Standards-Bootstrap.svg?style=flat)](https://github.com/gios-asu/ASU-Web-Standards-Bootstrap/releases)
[![Github issues](https://img.shields.io/github/issues/gios-asu/ASU-Web-Standards-Bootstrap.svg?style=flat)](https://github.com/gios-asu/ASU-Web-Standards-Bootstrap/issues)
[![License](http://img.shields.io/:license-mit-blue.svg?style=flat)](https://github.com/gios-asu/ASU-Web-Standards-Bootstrap/blob/master/LICENSE.md) [![Analytics](https://ga-beacon.appspot.com/UA-561868-49/gios-asu/ASU-Web-Standards-Bootsrap?flat)](https://github.com/igrigorik/ga-beacon)

This ASU Bootstrap Addon provides stylesheets and JavaScript that are consistent with the new [ASU Web Standards](http://hub.asu.edu) being rolled out to the school websites at ASU. The intent of this *Bootstrap Addon* is to provide a universal source for the ASU Web Standards that can be applied to any website, regardless of what technology is used to build a site. This project is based off of the work done by [29thDrive](http://asu-ws.29thdrive.com/) and is consistent with their initial work. This ASU Web Standards Bootstrap repository is maintained by the [Julie Ann Wrigley Global Institute of Sustainability](http://sustainability.asu.edu).

This project does not replace Bootstrap, but rather adds files that extend Bootstrap.  You still need to include the latest Bootstrap files in your website.

For our complete documentation, checkout our [GitHub pages](https://gios-asu.github.io/).

For Web Standards documentation, checkout [The Hub](http://hub.asu.edu).

# Table of Contents

- [Dependencies](#dependencies)
- [Quick start](#quick-start)
- [Details](#details)
- [Tools](#tools)
- [Workflow](#workflow)
- [Related Projects](#related-projects)
- [Other Implementations of the ASU Web Standards](#other-implementations-of-the-asu-web-standards)

# Dependencies

- [Twitter Bootstrap](http://getbootstrap.com/)
- [jQuery](http://jquery.com/)
- [Lightning Touch](https://github.com/ucsf-ckm/LightningTouch)
- [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
- [Moment JS](http://momentjs.com/) - Used for calendar ICS files.
- [ASU Header](https://drupal.asu.edu/build/asu-header-footer-version-40)
- [RespondJS](https://github.com/scottjehl/Respond) - to make media queries work on IE 6-8

# Quick Start

You can use one of the following ways to use this repo:

- [Download the latest release](https://github.com/gios-asu/ASU-Web-Standards-Bootstrap/releases).
- Clone the repo: `git clone https://github.com/gios-asu/ASU-Web-Standards-Bootstrap.git`.

The files that you should include in your website are the ones in `/build`.

Add the following to your head (after your stylesheets for bootstrap):

```html
<!-- ASU Bootstrap Standards -->
<link href="/css/bootstrap-asu.css" rel="stylesheet">
<link href="/css/bootstrap-asu-theme-base.css" rel="stylesheet">
```

Add the following to the end of your `<body>` before the closing `</body>` tag, but after your other script tags:

```html
<!-- ASU Bootstrap Standards -->
<script src="./js/bootstrap-asu.min.js"></script>
```

Please remember to include all of the [dependencies](#dependencies).  Include all 3rd party stylesheets and scripts BEFORE including the stylesheets and scripts provided in this repo.

For developers or when debugging, consider using the non-minified JavaScript files and adding the `*.map` files to where your `*.css` files are.

# Details

This theme uses Font Awesome.  Bootstrap natively provides Glyphicons, which means both can be used in tandiem.

This theme uses the Google Font Roboto.  If you do not include Roboto in your website using the instructions provided on [Google Font's website](http://www.google.com/fonts/specimen/Roboto), the font will default to 'Helvetica Neue', then Helvetica, then Arial, then the browser's default sans-serif font.

For more information concerning all of the new components and CSS styles that are introduced in this theme, check out [https://gios-asu.github.io/](https://gios-asu.github.io/).


# Tools

For developers, the following details what tools we use and how we use them.

## Grunt

This repository uses grunt to:

- Check common JavaScript problems using JS Hint.
- Check JavaScript Coding Standards.
- Run QUnit Unit Tests.
- Check common SCSS problems.
- Compile SCSS into CSS.
- Compile all JS files into one file.
- Uglify the JS.

The grunt file will create files in the `/build` folder.  These files will get overwritten when grunt is run and they should never be modified directly. 

Note: currently, `/build/fonts/*` is not generated by grunt.  These are the only static files that you can modify without worrying about grunt overwriting them.

### Setting up your grunt work environment

0. Install [Node.js](http://nodejs.org/)
1. Run NodeJS and navigate to the root of the project
2. Install grunt and our grunt dependencies:

  - npm install -g grunt-cli
  - gem install sass
  - gem update --system
  - gem install scss-lint
  - npm install

3. Run grunt:
  - grunt

Grunt will lint the scss and js files, it will check JavaScript coding standards, run tests, and compile and minify all source files.

It is normal practice to run grunt and commit the results as an individual commit called "Gruntfile" or "Grunt task."

## Travis-CI

We use Travis-CI to make sure that the SCSS files and JS files are written correctly and compile correctly.  Our Travis-CI configurations are in .travis.yml and package.json.  It will run the grunt tasks described above.

[Checkout our Travis CI Page](https://travis-ci.org/gios-asu/ASU-Bootstrap-Addon/builds)

## PhantomJS

Our tests are run on [PhantomJS](http://phantomjs.org/).  PhantomJS is a headless WebKit scriptable with a JavaScript API. It has fast and native support for various web standards: DOM handling, CSS selector, JSON, Canvas, and SVG.

Note that PhantomJS can timeout during the visual tests if one of the page dependencies (like [Placeholdit](http://placehold.it/)) times out.

## Qunit

Our tests are written using [Qunit](http://api.qunitjs.com/).  It is a powerful, easy-to-use JavaScrupt unit test suite.

## Blanket JS

If you want to check the code coverage of the project, boot up a server (any server since the files are just HTML, but it is recommended to use Apache) and deploy `/test/*` to it.

Go to `/test/qunit/index.html` in the browser, and click the checkbox next to `Enable coverageModule: ...`. This will show you a code coverage report in the browser.

## Koala

Koala is no longer the standard way to compile these files; please use Grunt instead.  It is still supported, but it will yield different results than grunt.

Point Koala at:

- js/bootstrap-asu.js => build/js/bootstrap-asu.js
- scss/bootstrap-asu.scss => build/css/bootstrap-asu.css
- scss/bootstrap-asu-theme-base.scss => build/css/bootstrap-asu-theme-base.css

# Workflow

1. Work and commit locally as normal.
2. Run `grunt test`.
3. Fix any problems that grunt displayed.
4. Commit locally, noting what fixes were made.
5. Run `grunt`.
6. Grunt should finish without any errors.
7. If grunt succeeded, make a commit with the message "grunt".
8. Push upstream

If you are releasing a new version, make sure to:

1. Upversion any JavaScript files you changed.
2. Upversion `js/bootstrap-asu.js`
3. Upversion `scss/bootstrap-asu.scss`
4. Upversion `scss/bootstrap-asu-theme-base.scss`
5. Run `grunt`.
6. If grunt succeeded, make a commit with the message "grunt, upversioned".
7. Push upstream
8. Make a new release in Github.


# Related Projects

This project is being heavily used by:

- [ASU-Wordpress-Web-Standards-Theme](https://github.com/gios-asu/ASU-Wordpress-Web-Standards-Theme)
- [gios-asu.github.io](https://github.com/gios-asu/gios-asu.github.io)


# Other Implementations of the ASU Web Standards

- [ASU Webspark](https://drupal.asu.edu/fserver/webspark) - Drupal 7 Distribution
- [ASU slimspark](https://drupal.asu.edu/fserver/asu_slimspark) - Drupal 7 Stand alone Theme

