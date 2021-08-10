const gulp = require('gulp');
const path = require('path');
const through2 = require('through2');
const rimraf = require('rimraf');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const del = require('del');
const merge2 = require('merge2');
const transformLess = require('./buildConfig/transformLess');
function getProjectPath(...filePath) {
  return path.join(process.cwd(), ...filePath);
}

const libDir = getProjectPath('lib');
const esDir = getProjectPath('es');

gulp.task('clean', async function () {
  await del('lib/**');
  await del('es/**');
  await del('dist/**');
});

function compileLess(modules) {
  rimraf.sync(modules !== false ? libDir : esDir);

  const less = gulp
    .src(['src/**/*.less'])
    .pipe(
      through2.obj(function (file, encoding, next) {
        this.push(file.clone());
        if (
          file.path.match(/(\/|\\)style(\/|\\)index\.less$/) ||
          file.path.match(/(\/|\\)style(\/|\\)v2-compatible-reset\.less$/)
        ) {
          transformLess(file.path)
            .then((css) => {
              file.contents = Buffer.from(css);
              file.path = file.path.replace(/\.less$/, '.css');
              this.push(file);
              next();
            })
            .catch((e) => {
              console.error(e);
            });
        } else {
          next();
        }
      }),
    )
    .pipe(gulp.dest(modules === false ? esDir : libDir));

  const assets = gulp
    .src(['src/**/*.@(png|svg)'])
    .pipe(gulp.dest(modules === false ? esDir : libDir));

  return merge2([less, assets]);
}

gulp.task('compile:less', (done) => {
  console.log('Compile less...');
  compileLess(false).on('finish', done);
  compileLess(true).on('finish', done);
});

gulp.task('cjs', function () {
  const tsProject = ts.createProject('tsconfig.json', {
    module: 'CommonJS',
  });
  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(
      babel({
        configFile: '../../.babelrc',
      }),
    )
    .pipe(gulp.dest('lib/'));
});

gulp.task('es', function () {
  const tsProject = ts.createProject('tsconfig.json', {
    module: 'ESNext',
  });
  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(
      babel({
        configFile: '../../.babelrc',
      }),
    )
    .pipe(gulp.dest('es/'));
});

gulp.task('declaration', function () {
  const tsProject = ts.createProject('tsconfig.json', {
    declaration: true,
    emitDeclarationOnly: true,
  });
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest('es/')).pipe(gulp.dest('lib/'));
});

exports.default = gulp.series('clean', 'compile:less', 'cjs', 'es', 'declaration');
