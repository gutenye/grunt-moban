module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ['dist'],

    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    concat: {
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    watch: {
      files: ['src/**/*.js'],
      tasks: ['build']
    }
  })

  grunt.registerTask('build', [
    'clean',
    'jshint',
    'concat'
  ])

  grunt.registerTask('default', ['watch'])

  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-watch')
  //grunt.loadNpmTasks('grunt-contrib-uglify')
  //grunt.loadNpmTasks('grunt-contrib-qunit')
}
