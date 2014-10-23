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
        // QUnit
        // =====
        qunit: {
            options: {
                inject: 'test/qunit/phantom.js'
            },
            files: ['test/qunit/**/*.html']
        },
        // SCSS Lint
        // =========
        scsslint: {
            allFiles: [
                'scss/*.scss',
            ],
        },
        // SASS Compile
        // ============
        sass: {
            options: {
                style: 'expanded'
            },
            dist: {
                files: {
                    'build/css/bootstrap-asu.css' : 'bootstrap-asu.scss',
                    'build/css/bootstrap-asu-theme-base.css' : 'bootstrap-asu-theme-base.scss'
                }
            }
        },
        // JS Compile
        // ==========
        
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
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Default task
    grunt.registerTask('default', [
        'jshint', 
        'scsslint',
        'qunit',
        'sass']);
};

