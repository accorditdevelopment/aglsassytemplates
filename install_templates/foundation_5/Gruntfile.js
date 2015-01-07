module.exports = function(grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),

		sass : {
			options : {
				includePaths : ['bower_components/foundation/scss']
			},
			dist : {
				options : {
					outputStyle : 'compressed'
				},
				files : {
					'css/app.css' : 'scss/app.scss'
				}
			}
		},
		uglify : {
			options : {
				mangle : true,
				preserveline : true

			},
			my_target : {
				files : {
					'js/app.js' : ['js/src/*.js', 'js/src/**/*.js']
				},
				options : {
					sourceMap : true,
					sourceMapName : 'js/sourcemap.map',
					beautify : {
						beautify : true
						
					}
				},
			}
		},

		watch : {
			grunt : {
				files : ['Gruntfile.js']
			},

			sass : {
				files : 'scss/**/*.scss',
				tasks : ['sass']
			},
			uglify : {
				files : ['js/src/*.js', 'js/src/**/*.js'],
				tasks : ['uglify']
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('build', ['sass']);
	grunt.registerTask('default', ['build', 'watch']);

}