module.exports = function (grunt) {
  'use strict';
  // Project configuration
  grunt.initConfig({
    // Metadata
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= props.license %> */\n',
    // =======
    // JS Hint
    // =======
    jshint: {
      options: {
        jshintrc: 'js/.jshintrc'
      },
      core: {
        src: [
          'js/*.js',
          '!js/_vendor.js'
        ]
      }
    },
    // ===============
    // JS Coding Style
    // ===============
    jscs: {
      options: {
        config: 'js/.jscsrc'
      },
      core: {
        src: '<%= jshint.core.src %>'
      }
    },
    // QUnit
    // =====
    qunit: {
      options: {
        inject: 'test/qunit/phantom.js',
        // size the viewport for mobile
        page : {
          viewportSize : {
            width : 766
          }
        }
      },
      files: [
        'test/qunit/mobile-index.html',
        'test/qunit/visual-index.html'
      ]
    },
    // SCSS Lint
    // =========
    scsslint: {
      allFiles: [
        'scss/*.scss',
        'scss/mixins/*.scss',
        'scss/theme/*.scss'
        // Not font_awesome
      ],
      options: {
        config: 'scss/.scss-lint.yml'
      }
    },
    // SASS Compile
    // ============
    sass: {
      options: {
        style: 'expanded',
        sourcemap: 'auto'
      },
      dist: {
        files: {
          'build/css/bootstrap-asu.css' : 'scss/bootstrap-asu.scss'
       }
      },
      fortesting: {
        files: {
          'test/vendor/css/bootstrap-asu.css' : 'scss/bootstrap-asu.scss',
        }
      }
    },
    // JS Compile
    // ==========
    concat: {
      bootstrapAsu: {
        src: [
          'js/_license.js',
          'js/_vendor.js',
          'js/_modernizr.js',
          'js/_iframe-overlay.js',
          'js/_smoothscroll.js',
          'js/_smartresize.js',
          'js/_calendar.js',
          'js/_sidebar.js',
          'js/_collapse-footer.js',
          'js/_wait-for.js',
          'js/_mobile-menu.js',
          'js/_sticky-nav.js'
        ],
        dest: 'build/js/bootstrap-asu.js'
      }
    },
    // JS Uglify
    // =========
    uglify: {
      options: {
        preserveComments: 'some',
        sourceMap: true
      },
      core: {
        src: 'build/js/bootstrap-asu.js',
        dest: 'build/js/bootstrap-asu.min.js'
      }
    },
    // Watch
    // =====
    watch: {
      core: {
        files: '<%= jshint.core.src %>',
        tasks: ['jshint:core', 'qunit']
      }
    },
    // CSS Minify
    // ==========
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'build/css',
          src: ['*.css', '!*.min.css'],
          dest: 'build/css',
          ext: '.min.css'
        }]
      }
    }
  });

  // These plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-scss-lint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task
  grunt.registerTask('test',  [
    'jshint',
    'jscs',
    'scsslint',
    'sass:fortesting',
    'qunit'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'jscs',
    'scsslint',
    'sass:fortesting',
    'qunit',
    'sass:dist',
    'concat',
    'uglify',
    'cssmin'
  ]);
};
