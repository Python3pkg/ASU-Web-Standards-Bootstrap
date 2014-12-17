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
        // JS Hint
        // =======
        jshint: {
            options: {
                jshintrc: 'js/.jshintrc'
            },
            core: {
                src: 'js/*.js'
            }
        },
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
                'test/qunit/index.html',
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
                    'build/css/bootstrap-asu.css' : 'scss/bootstrap-asu.scss',
                    'build/css/bootstrap-asu-theme-base.css' : 'scss/bootstrap-asu-theme-base.scss'
                }
            },
            fortesting: {
                files: {
                    'test/vendor/css/bootstrap-asu.css' : 'scss/bootstrap-asu.scss',
                    'test/vendor/css/bootstrap-asu-theme-base.css' : 'scss/bootstrap-asu-theme-base.scss'
                }

            }
        },
        // JS Compile
        // ==========
        concat: {
            bootstrapAsu: {
                src: [
                    'js/_modernizr.js',
                    'js/_smoothscroll.js',
                    'js/_debounce.js',
                    'js/_calendar.js',
                    'js/_sidebar.js',
                    'js/_collapse-footer.js'
                ],
                 dest: 'build/js/bootstrap-asu.js'
            }
        },
        // JS Uglify
        // =========
        uglify: {
          options: {
            preserveComments: 'some'
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

    // Default task
    grunt.registerTask('test',  [
        'jshint', 
        'jscs',
        'scsslint',
        'sass:fortesting',
        'qunit',
        ]);

    grunt.registerTask('default', [
        'jshint', 
        'jscs',
        'scsslint',
        'sass:fortesting',
        'qunit',
        'sass:dist',
        'concat',
        'uglify']);
};

