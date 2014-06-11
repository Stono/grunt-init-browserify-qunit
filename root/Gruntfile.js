'use strict';

// Define modules you wish to be in the 'global' bundle here
var global_modules = [
  'jquery',
  'bootstrap',
  'bootstrapSelect',
  'util',
  'domready',
  'mustache', 
  'location-bar',
  'events'
];
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Will create our browserify package 
    browserify: {
      deps: {
        options: {
          // Specify the common modules to export out of here
          require: global_modules,
          external: ['*']
        },
    	files: {
          'generated/js/bundle-static.js': ['app.js']
        }
      },
      app: {
        options: {
          // Exclude the common modules found above
          external: global_modules,
          transform: ['brfs'],
        },
        files: {
          'generated/js/bundle-app.js': ['app.js']
        }
      },
      test: {
        options: {
          // Exclude the common modules found above
          external: global_modules,
          transform: ['brfs']
        },
        files: {
          'generated/js/bundle-test.js': ['test/*.test.js']
        }
      },
    },
    clean: {
      'public': {
        src: ['generated', 'public/js', 'public/css', 'public/fonts', 'public/images']
      }
    },
    copy: {
      nonmin: {
        expand: true,
        cwd: 'generated/js/',
        src: '**',
        dest: 'public/js/',
        flatten: true,
        filter: 'isFile'
      },
      fonts: {
        expand: true,
        cwd: 'static/fonts/',
        src: '**',
        dest: 'public/fonts/',
        flatten: true,
        filter: 'isFile'
      },
      images: {
        expand: true,
        cwd: 'static/images/',
        src: '**',
        dest: 'public/images/',
        flatten: true,
        filter: 'isFile'
      }
    },
    // Will minify the CSS in deps/css to the public folder
    cssmin: {
      'static': {
        files: {
          'public/css/bundle-static.min.css': ['static/css/*.css','!static/css/*.test.css']
        }
      },
      'test': {
        files: {
          'public/css/bundle-test.min.css': ['static/css/*.test.css']
        }
      },
    },
    // Will uglify the js in deps/js to the public folder
    uglify: {
      'static': {
        files: {
          'public/js/bundle-static.min.js': ['generated/js/bundle-static.js']
        }
      },
      app: {
        files: {
          'public/js/bundle-app.min.js': ['generated/js/bundle-app.js']
        }
      },
      test: {
        files: {
          'public/js/bundle-test.min.js': ['generated/js/bundle-test.js']
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      lib: {
        src: ['lib/**/*.js', 'app.js']
      },
      test: {
        src: ['test/**/*.js']
      }
    },
    watch: {
      core: {
        files: ['shim.js', 'Gruntfile.js', 'package.json'],
        tasks: ['browserify', 'uglify', 'cssmin']
      },
      app: {
        files: ['lib/**/*', 'app.js', 'api/**/*'],
        tasks: ['jshint:lib', 'browserify:app', 'uglify:app']
      },
      'static': {
        files: 'static/js/**/*.js',
        tasks: ['uglify:static']
      },
      test: {
        files: ['test/**/*'],
        tasks: ['jshint:test', 'browserify:test', 'uglify:test']
      },
      css: {
        files: 'static/css/**/*.css',
        tasks: ['cssmin']
      }
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task.
  grunt.registerTask('build', ['clean', 'browserify', 'cssmin', 'uglify', 'copy']);
  grunt.registerTask('default', ['jshint', 'build']);
};
