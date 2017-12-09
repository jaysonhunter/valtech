// Assembles your content with HTML layout
module.exports = {
  options: {
    layoutdir: '<%= paths.templates %>/layouts',
    partials: ['<%= paths.templates %>/partials/**/*.hbs'],
    helpers: ['<%= paths.src %>/helpers/**/*.js'],
    data: ['<%= paths.src %>/data/*.{json,yml}'],
    flatten: true
  },
  pages: {
    src: ['<%= paths.templates %>/pages/*.hbs'],
    dest: '<%= paths.build %>/'
  }
};