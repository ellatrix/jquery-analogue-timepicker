/* jshint node:true */

module.exports = function( grunt ) {
	require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),
		autoprefixer: {
			options: {
				browsers: [
					'Android >= 2.1',
					'Chrome >= 21',
					'Explorer >= 7',
					'Firefox >= 17',
					'Opera >= 12.1',
					'Safari >= 6.0'
				],
				cascade: false
			},
			all: {
				expand: true,
				src: [
					'*.css',
					'!node_modules'
				]
			}
		},
		jshint: {
			options: grunt.file.readJSON( '.jshintrc' ),
			files: [
				'*.js',
				'!node_modules'
			]
		}
	} );

	grunt.registerTask( 'default', [ 'jshint', 'autoprefixer' ] );
};
