module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: 'tpc_flask/static/css',
              src: ['*.css', '!*.min.css'],
              dest: 'tpc_flask/static/css',
              ext: '.min.css'
            }]
          }
        },
        sass: {
            index:{
                files : {
                    'tpc_flask/static/css/index.css': 'tpc_flask/static/css/index.scss'
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
                mangle: false,
                compress: true
            },
            index : {
                files: {
                    'tpc_flask/static/js/deploy/indexBuilt.min.js': 'tpc_flask/static/js/deploy/indexBuilt.js'
                }
            }
        },
        concat:{
            index:{
                src:[
                      'tpc_flask/static/js/app.js'
                    , 'tpc_flask/static/js/common.js'
                    , 'tpc_flask/static/js/controllers.js'
                    , 'tpc_flask/static/js/services.js'
                    , 'tpc_flask/static/js/directives.js'
                ],
                dest:'tpc_flask/static/js/deploy/indexBuilt.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('build',['concat', 'uglify', 'sass', 'cssmin']);
    grunt.registerTask('default',['build']);
};
