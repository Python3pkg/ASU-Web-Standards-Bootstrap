# ASU Bootstrap Addon

[![Build Status](https://travis-ci.org/gios-asu/ASU-Bootstrap-Addon.svg)](https://travis-ci.org/gios-asu/ASU-Bootstrap-Addon) [![Code Climate](https://codeclimate.com/github/gios-asu/ASU-Bootstrap-Addon/badges/gpa.svg)](https://codeclimate.com/github/gios-asu/ASU-Bootstrap-Addon) [![Test Coverage](https://codeclimate.com/github/gios-asu/ASU-Bootstrap-Addon/badges/coverage.svg)](https://codeclimate.com/github/gios-asu/ASU-Bootstrap-Addon)

This ASU Bootstrap Addon provides stylesheets to be consistent with the new ASU Web Standards that are being rolled out to the schools at ASU.  The theme is based off of the work done by 29thDrive and is consistent with their initial work.

For additional documentation, checkout our [GitHub pages](https://gios-asu.github.io/).

# Dependencies

- [jQuery](http://jquery.com/)
- [Lightning Touch](https://github.com/ucsf-ckm/LightningTouch)
- [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
- [Twitter Bootstrap](http://getbootstrap.com/)
- [ASU Header](https://drupal.asu.edu/build/asu-header-footer-version-40)

# About

This theme uses Font Awesome.  Bootstrap natively provides Glyphicons, which means both can be used in tandiem.

This theme uses the Google Font Roboto.  If you do not include Roboto in your website using the instructions provided on [Google Font's website](http://www.google.com/fonts/specimen/Roboto), font will default to 'Helvetica Neue', then Helvetica, and then Arial.

For more information concerning all of the new components and CSS styles that are introduced in this theme, check out [https://gios-asu.github.io/](https://gios-asu.github.io/).


# Tools

## Grunt

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

## Koala

Koala is no longer the standard way to compile these files.  It is still supported, but it will yield different results than grunt.

Point Koala at:

- js/bootstrap-asu.js => build/js/bootstrap-asu.js
- scss/bootstrap-asu.scss => build/css/bootstrap-asu.css
- scss/bootstrap-asu-theme-base.scss => build/css/bootstrap-asu-theme-base.css


# Other Projects

This project is being heavily used by:

- [ASU-Wordpress-Web-Standards-Theme](https://github.com/gios-asu/ASU-Wordpress-Web-Standards-Theme)
- [gios-asu.github.io](https://github.com/gios-asu/gios-asu.github.io)