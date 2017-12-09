// Replace compiled template images sources from ../src/html to ../dist/html
module.exports = {
  src_images: {
    options: {
      usePrefix: false,
      patterns: [
        {
          match: /(<img[^>]+[\"'])(\.\.\/src\/img\/)/gi,  // Matches <img * src="../src/img or <img * src='../src/img'
          replacement: '$1../<%= paths.build_img %>/'
        },
        {
          match: /(url\(*[^)])(\.\.\/src\/img\/)/gi,  // Matches url('../src/img') or url(../src/img) and even url("../src/img")
          replacement: '$1../<%= paths.build_img %>/'
        }
      ]
    },

    files: [{
      expand: true,
      flatten: true,
      src: ['<%= paths.build %>/*.html'],
      dest: '<%= paths.build %>'
    }]
  }
};
