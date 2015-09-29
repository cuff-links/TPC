module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            index:{
                files : {
                    'public/stylesheets/index.css': 'public/stylesheets/index.scss'
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
            options:{
                mangle: false
            },
            index : {
                files : {
                    'public/javascripts/deploy/indexBuilt.min.js':'public/javascripts/deploy/indexBuilt.js'
                }
            }
        },
        concat:{
            index:{
                src:[
                      'public/javascripts/app.js'
                    , 'public/javascripts/common.js'
                    , 'public/javascripts/controllers.js'
                    , 'public/javascripts/services.js'
                    , 'public/javascripts/directives.js'
                    , 'public/javascripts/filters.js'
                    , 'public/javascripts/index.js'
                ],
                dest:'public/javascripts/deploy/indexBuilt.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('build',['concat','sass','uglify']);
    grunt.registerTask('default',['build']);
};