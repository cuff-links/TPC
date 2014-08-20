module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist:{
                files : {
                    'public/stylesheets/style.css': 'public/stylesheets/style.scss'
                }
            }
        },
        watch:{
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        },
        uglify: {
            js : {
                files : {

                }
            }
        },
        concat:{
            dist:{
                src:['public/javascripts/vendors/**/*.js', 'public/javascripts/*.js'],
                dest:['public/javascripts/vendors/built.js']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
}