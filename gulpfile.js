const gulp = require('gulp');
const path = require('path');
const through2 = require('through2');
const rimraf = require('rimraf');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const del = require('del');
const merge2 = require('merge2');
const less = require('less');
const { readFileSync } = require('fs');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const NpmImportPlugin = require('less-plugin-npm-import');

function getProjectPath(...filePath) {
  return path.join(process.cwd(), ...filePath);
}

const { dirname } = require('path');
const fs = require('fs');

function replacePath(path) {
  if (path.node.source && /\/lib\//.test(path.node.source.value)) {
    const esModule = path.node.source.value.replace('/lib/', '/es/');

    const esPath = dirname(getProjectPath('node_modules', esModule));
    if (fs.existsSync(esPath)) {
      path.node.source.value = esModule;
    }
  }
}

function replaceLib() {
  return {
    visitor: {
      ImportDeclaration: replacePath,
      ExportNamedDeclaration: replacePath,
    },
  };
}

function transformLess(lessFile, config = {}) {
  const { cwd = process.cwd() } = config;
  const resolvedLessFile = path.resolve(cwd, lessFile);

  let data = readFileSync(resolvedLessFile, 'utf-8');
  data = data.replace(/^\uFEFF/, '');

  // Do less compile
  const lessOpts = {
    paths: [path.dirname(resolvedLessFile)],
    filename: resolvedLessFile,
    plugins: [new NpmImportPlugin({ prefix: '~' })],
    javascriptEnabled: true,
  };
  return less
    .render(data, lessOpts)
    .then((result) => postcss([autoprefixer]).process(result.css, { from: undefined }))
    .then((r) => r.css);
}

const libDir = getProjectPath('lib');
const esDir = getProjectPath('es');

gulp.task('clean', async () => {
  await del('lib/**');
  await del('es/**');
  await del('dist/**');
});

function compileLess(modules) {
  rimraf.sync(modules !== false ? libDir : esDir);

  const lessS = gulp
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

  return merge2([lessS, assets]);
}

gulp.task('compile:less', (done) => {
  console.log('Compile less...');
  compileLess(false).on('finish', done);
  compileLess(true).on('finish', done);
});

gulp.task('cjs', () => {
  const tsProject = ts.createProject('tsconfig.json', {
    module: 'CommonJS',
  });

  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(
      babel({
        presets: [
          [
            '@babel/env',
            {
              loose: true,
              modules: false,
            },
          ],
          '@babel/react',
        ],
        include: '**/*.js',
        exclude: '**/*.ts',
        plugins: ['babel-plugin-transform-async-to-promises'],
      }),
    )
    .pipe(gulp.dest('lib/'));
});

gulp.task('es', () => {
  const tsProject = ts.createProject('tsconfig.json', {
    module: 'ESNext',
  });
  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(
      babel({
        presets: [
          [
            '@babel/env',
            {
              loose: true,
              modules: false,
            },
          ],
          '@babel/react',
        ],
        include: '**/*.js',
        exclude: '**/*.ts',
        plugins: ['babel-plugin-transform-async-to-promises', replaceLib],
      }),
    )
    .pipe(gulp.dest('es/'));
});

gulp.task('declaration', () => {
  const tsProject = ts.createProject('tsconfig.json', {
    declaration: true,
    emitDeclarationOnly: true,
  });
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest('es/')).pipe(gulp.dest('lib/'));
});

exports.default = gulp.series('clean', 'compile:less', 'cjs', 'es', 'declaration');
