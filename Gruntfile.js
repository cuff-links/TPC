module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            index:{
                files : {
                    'public/stylesheets/index.css': 'public/stylesheets/index.scss'
                }
            },
            loginRegister:{
                files : {
                    'public/stylesheets/loginRegister.css': 'public/stylesheets/loginRegister.scss'
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
            },
            login:{
                files:{
                    'public/javascripts/deploy/loginBuilt.min.js':'public/javascripts/deploy/loginBuilt.js'
                }
            }
        },
        concat:{
            index:{
                src:[
                      'public/javascripts/vendor/bootstrap/dist/js/bootstrap.js'
                    , 'public/javascripts/vendor/isotope/jquery.isotope.js'
                    , 'public/javascripts/vendor/angular/angular.js'
                    , 'public/javascripts/vendor/angular-route/angular-route.js'
                    , 'public/javascripts/vendor/modernizr/modernizr.js'
                    , 'public/javascripts/vendor/royalslider/jquery.easing-1.3.js'
                    , 'public/javascripts/vendor/greensock-js/src/uncompressed/TweenMax.js'
                    , 'public/javascripts/vendor/greensock-js/src/uncompressed/TimelineLite.js'
                    , 'public/javascripts/vendor/superscrollorama/js/jquery.superscrollorama.js'
                    , 'public/javascripts/app.js'
                    , 'public/javascripts/common.js'
                    , 'public/javascripts/controllers.js'
                    , 'public/javascripts/services.js'
                    , 'public/javascripts/directives.js'
                    , 'public/javascripts/filters.js'
                    , 'public/javascripts/index.js'
                ],
                dest:'public/javascripts/deploy/indexBuilt.js'
            },
            login:{
                src:[
                    'public/javascripts/common.js'
                    ,'public/javascripts/login.js'
                ],
                dest:'public/javascripts/deploy/loginBuilt.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
    grunt.registerTask('build',['concat','sass','uglify']);
}