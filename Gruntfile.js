module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    transform: [
                        ["babelify", {
                            "presets": [
                                "es2015"
                            ]
                        }]
                    ]
                },
                files: {
                    "app/src/main.js": ["app/js/index.js"],
                    "app/src/content-block.js": ["app/js/content-block.js"]
                }
            }
        },
        eslint: {
            options: {
                configFile: '.eslintrc'
            },
            target: 'app/js/*.js'
        },
        watch: {
            scripts: {
                files: ["app/js/*.js"],
                tasks: ["browserify"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('dev', ['browserify', 'watch']);
    grunt.registerTask('build', ['browserify', 'eslint', 'watch']);
    grunt.registerTask("default", ["browserify"]);
};