
var gulp = require('gulp');
var watch = require('gulp-watch');
var sftp = require('gulp-sftp');

gulp.task('watchAndUpload', function(){

  return watch('../output/**', {ignoreInitial: false, base: '../output'})
    .pipe(sftp({
      host: '139.196.40.161',
      port: '22',
      user: 'root',
      pass: 'Bboy3766664',
      remotePath: '/root/smartfrontend'
    }));
});

gulp.task('upload', function(){
  return gulp.src( '../output/**')
    .pipe(sftp({
      host: '139.196.40.161',
      port: '22',
      user: 'root',
      pass: 'Bboy3766664',
      remotePath: '/root/smartfrontend'
    }));
});