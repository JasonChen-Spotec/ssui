const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const del = require('del');

gulp.task('clean', async () => {
  await del('lib/**');
  await del('es/**');
  await del('dist/**');
});

const codeSource = ['src/*.tsx'];

gulp.task('cjs', () => {
  const tsProject = ts.createProject('tsconfig.json', {
    module: 'CommonJS',
  });
  return gulp
    .src(codeSource)
    .pipe(tsProject())
    .pipe(
      babel({
        configFile: '../../.babelrc',
      }),
    )
    .pipe(gulp.dest('lib/'));
});

gulp.task('es', () => {
  const tsProject = ts.createProject('tsconfig.json', {
    module: 'ESNext',
  });
  return gulp
    .src(codeSource)
    .pipe(tsProject())
    .pipe(
      babel({
        configFile: '../../.babelrc',
      }),
    )
    .pipe(gulp.dest('es/'));
});

gulp.task('declaration', () => {
  const tsProject = ts.createProject('tsconfig.json', {
    declaration: true,
    emitDeclarationOnly: true,
  });
  return gulp
    .src(codeSource)
    .pipe(tsProject())
    .pipe(gulp.dest('es/'))
    .pipe(gulp.dest('lib/'));
});

exports.default = gulp.series('clean', 'cjs', 'es', 'declaration');
