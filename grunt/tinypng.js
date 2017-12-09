// Compress images
var path = require("path");

module.exports = {
  options: {
      apiKey: "kW7LJK0EICCxUtUoEfdQJQB-UGHqZl-Z",
      checkSigs: true,
      sigFile: 'file_sigs.json',
      summarize: true,
      showProgress: true,
      stopOnImageError: true
    },
    compress: {
        src: ['assets/img/**/*.jpg', '!*.min.jpg'],
        dest: 'assets/img/tiny',
        expand: true
    }
};