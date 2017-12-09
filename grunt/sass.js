// Takes your SCSS files and compiles them to CSS
module.exports = {
  dist: {
    options: {
      style: 'expanded'
    },
    files: {
      '<%= paths.build %>/css/test.css': '<%= paths.src %>/scss/test.scss'
    }
  }
};
