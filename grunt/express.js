// Browser-based preview task
module.exports = {
  server: {
    options: {
      port: 4000,
      hostname: '127.0.0.1',
      bases: ['<%= paths.build %>', '<%= paths.src %>'],
      // server: './server.js',
      livereload: true
    }
  }
}
