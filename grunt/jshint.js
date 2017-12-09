module.exports = {
    "config"  : ".jshintrc",
    "build"   : {
        "src" : [
            "<%= paths.src %>/js/**/*.js",
            "!<%= paths.src %>/js/lib/**/*.js"
        ]
    }
};