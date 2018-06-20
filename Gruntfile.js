module.exports = function(grunt) {
    require('jit-grunt')(grunt);
  
    grunt.initConfig({
      less: {
        development: {
          files: {
            "css/estilos.css": "css/estilos.less", // Caminho dos arquivos
            "css/media-queries.css": "css/media-queries.less"
          }
        }
      },
  
      watch: {
        styles: {
          files: ['**/*.less'], // Quais arquivos o grunt ficará de olho
          tasks: ['less']
        }
      }
    });
  
    grunt.registerTask('default', ['less', 'watch']);
  };