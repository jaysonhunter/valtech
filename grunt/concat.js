var _ = require('underscore');

var LIBRARIES = [

];


var APP_CODE = [
    "src/js/test.js"
];



var ALL_JS = [
    LIBRARIES,
    APP_CODE
];

var gruntTask = {};

gruntTask['build'] = {
    dest  : "<%= paths.build %>/js/main.js",
    src: [
        _.flatten(ALL_JS)
    ]
};


module.exports = gruntTask;