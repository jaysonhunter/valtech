module.exports = {
    "src"     : [
        "<%= paths.src %>/**/*.js"
    ],
    "options" : {
        "preset"         : "jquery",
        "maxErrors"      : 500,
        "reporter"       : "checkstyle",
        "reporterOutput" : "<%= paths.assets %>/checkstyle/jscs/jscs.xml",
        "excludeFiles"   : [
            "<%= paths.build %>/js/lib/**/*.js"
        ]
    }
};