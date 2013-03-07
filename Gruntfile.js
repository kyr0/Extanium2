module.exports = function (grunt) {

    var dirs = {
        base: '',
        src: 'src/',
        test: 'test/',
        doc: 'doc'
    }, baseDir = function (path) {
        return dirs.base + path;
    }, srcDir = function (path) {
        return dirs.src + path;
    };
    
    
    var uglifyFiles = {};
    uglifyFiles[baseDir('extanium.js')] = ['<banner:meta.banner>', baseDir('extanium-debug.js')];

	var concatFiles = [
        '<banner:meta.banner>',
		srcDir('copyright.js'),
		srcDir('_begin.js'),
        srcDir('Ext.js'),
        srcDir('is.js'),
        srcDir('Log.js'),
        srcDir('iter/Iterable.js'),
        srcDir('lang/Object.js'),
        srcDir('lang/Number.js'),
        srcDir('lang/Date.js'),
        srcDir('lang/String.js'),
        srcDir('lang/Array.js'),
        srcDir('util/JSON.js'),
        srcDir('util/URL.js'),
        srcDir('Loader.js'),
        srcDir('oop/Interface.js'),
        srcDir('oop/ClassManager.js'),
        srcDir('lang/Function.js'),
        srcDir('util/Serializable.js'),
        srcDir('oop/ClassObservable.js'),
        srcDir('oop/Class.js'),
        srcDir('oop/Module.js'),
        srcDir('lang/Error.js'),
        srcDir('util/Comparator.js'),
        srcDir('util/Sorter.js'),
        srcDir('util/Filter.js'),
        srcDir('iter/Sortable.js'),
        srcDir('iter/Summable.js'),
        srcDir('iter/Sliceable.js'),
        srcDir('iter/Filterable.js'),
        srcDir('Template.js'),
        srcDir('util/TaskRunner.js'),
        srcDir('util/Task.js'),
        srcDir('Registry.js'),
        srcDir('iter/Interface.js'),
        srcDir('struct/Collection.js'),
        srcDir('struct/Map.js'),
        srcDir('_end.js'),
    ];
    
    var docFiles = concatFiles.slice(0);
    
   	// Remove _end.js
    docFiles.pop();
    
    // Remove comments and _begin.js
    docFiles.shift();
    docFiles.shift();
    docFiles.shift();
    
    var jshintFiles = [
        srcDir('Ext.js'),
        srcDir('is.js'),
        srcDir('Log.js'),
        srcDir('iter/Iterable.js'),
        srcDir('lang/Object.js'),
        srcDir('lang/Number.js'),
        srcDir('lang/Date.js'),
        srcDir('lang/String.js'),
        srcDir('lang/Array.js'),
        srcDir('util/JSON.js'),
        srcDir('util/URL.js'),
        srcDir('Loader.js'),
        srcDir('oop/Interface.js'),
        srcDir('oop/ClassManager.js'),
        srcDir('lang/Function.js'),
        srcDir('util/Serializable.js'),
        srcDir('oop/ClassObservable.js'),
        srcDir('oop/Class.js'),
        srcDir('lang/Error.js'),
        srcDir('util/Comparator.js'),
        srcDir('util/Sorter.js'),
        srcDir('util/Filter.js'),
        srcDir('iter/Sortable.js'),
        srcDir('iter/Summable.js'),
        srcDir('iter/Sliceable.js'),
        srcDir('iter/Filterable.js'),
        srcDir('Template.js'),
        srcDir('util/TaskRunner.js'),
        srcDir('util/Task.js'),
        srcDir('Registry.js'),
        srcDir('iter/Interface.js'),
        srcDir('struct/Collection.js'),
        srcDir('struct/Map.js'),
    ];

    // Build configuration
    grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),
        meta: {
            version: '2.0.0a'
        },
        concat: {
            options: {
		        separator: ';'
		    },
            dist: {
                src: concatFiles,
                dest: baseDir('extanium-debug.js')
            }
        },
        watch: {
            files: '<config:lint.files>',
            tasks: 'lint'
        },
        jshint: {
        	beforeconcat: jshintFiles,
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                browser: true,
                eqnull: true,
                devel: true,
                evil: true,
                lastsemic: true,
                asi: true
            },
            globals: {
                Ada: true,
                require: true,
                GLOBAL: true,
                exports: true,
                global: true,
                Enumerable: true
            }
        },
        uglify: {
            options: {
		    },
		    dist: {
                files: uglifyFiles
            }
        },
        exec: {
            doc: {
                command: 'jsduck --output ' + dirs.doc + ' --builtin-classes --warnings=-all ' + docFiles.join(' '),
                stdout: true
            }
        }
    });

    // Load exec task
    grunt.loadNpmTasks('grunt-exec');
    
    // Load uglify task
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    // Load concat task
    grunt.loadNpmTasks('grunt-contrib-concat');
    
    // Load watch task
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // Load jshint task
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Define tasks
    grunt.registerTask('buildjs', ['concat', 'uglify']);
    grunt.registerTask('test',    ['buildjs', 'jshint']);
    grunt.registerTask('doc',     'exec:doc');
    grunt.registerTask('default', 'buildjs');
};