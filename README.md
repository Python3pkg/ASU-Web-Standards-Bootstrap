# ASU Bootstrap Addon

[![Build Status](https://travis-ci.org/gios-asu/ASU-Bootstrap-Addon.svg)](https://travis-ci.org/gios-asu/ASU-Bootstrap-Addon)

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

## Travis-CI

We use Travis-CI to make sure that the SCSS files compile correctly.  If they do no compile, the build does not pass.

We hope to do more with Travis in the future, such as compile the JavaScript files, run tests on both the CSS and JS, and create minified versions of files automatically.

[Checkout our Travis CI Page](https://travis-ci.org/gios-asu/ASU-Bootstrap-Addon/builds)

## Koala

We currently use [Koala](http://koala-app.com/) for quickly building the SaSS and JavaScript files.  Point Koala to the following input files and output paths:

- bootstrap-asu.js -> build\js\bootstrap-asu.js
- bootstrap-asu-theme-base.scss -> build\css\bootstrap-asu-theme-base.css
- bootstrap-asu.scss -> build\css\bootstrap-asu.css

Please compile the bootstrap-asu.js file with the "Compress" flag on.

Please compile the SaSS files with the Output Style set to "expanded."

If you are compiling a minified CSS version without using any additional tools, set the Output Style to "compressed."

# Other Projects

This project is being heavily used by:

- [ASU-Wordpress-Web-Standards-Theme](https://github.com/gios-asu/ASU-Wordpress-Web-Standards-Theme)
- [gios-asu.github.io](https://github.com/gios-asu/gios-asu.github.io)