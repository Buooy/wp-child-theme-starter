/**
 * https://css-tricks.com/gulp-for-wordpress-creating-the-tasks/
 */
import { src, dest, watch, series, parallel } from 'gulp';
import yargs from 'yargs';
import sass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import gulpif from 'gulp-if';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import imagemin from 'gulp-imagemin';
import del from 'del';
import webpack from 'webpack-stream';
import named from 'vinyl-named';
import browserSync from "browser-sync";
import wpPot from "gulp-wp-pot";
import editJsonFile from "edit-json-file";
import semver from 'semver';

const PRODUCTION = yargs.argv.prod;

const server = browserSync.create();
export const serve = done => {
	let packageJson = editJsonFile(`${__dirname}/package.json`);
	server.init({
	  proxy: packageJson.get("devUrl")
	});
	done();
};

export const reload = done => {
	server.reload();
	done();
};

export const styles = () => {
  return src([
	'assets/src/scss/bundle.scss',
  ])
	.pipe(gulpif(!PRODUCTION, sourcemaps.init()))
	.pipe(sass().on('error', sass.logError))
	.pipe(gulpif(PRODUCTION, postcss([ autoprefixer ])))
	.pipe(gulpif(PRODUCTION, cleanCss({compatibility:'*'})))
	.pipe(gulpif(!PRODUCTION, sourcemaps.write()))
	.pipe(dest('assets/build/css'))
  .pipe(server.stream());
}

export const scripts = () => {
	return src([
		'assets/src/js/bundle.js'
	])
	.pipe(named())
	.pipe(webpack({
	  module: {
		rules: [
		  {
			test: /\.js$/,
			use: {
			  loader: 'babel-loader',
			  options: {
				presets: ['@babel/preset-env']
			  }
			}
		  }
		]
	  },
	  mode: PRODUCTION ? 'production' : 'development',
	  devtool: !PRODUCTION ? 'inline-source-map' : false,
	  output: {
		filename: '[name].js'
	  },
	  externals: {
		jquery: 'jQuery'
	  },
	}))
	.pipe(dest('assets/build/js'));
}

export const images = () => {
	return src('assets/src/images/**/*.{jpg,jpeg,png,svg,gif}')
	  .pipe(gulpif(PRODUCTION, imagemin()))
	  .pipe(dest('assets/build/images'));
}

export const updateAssetsVersion = (done) => {

	let packageJson = editJsonFile(`${__dirname}/package.json`);

	//	Gets the current semver
	let currentSemVer = packageJson.get("version");

	packageJson.set("version", semver.inc(currentSemVer, 'patch'));
	packageJson.save();
	done();

}

//	Generates a POT file for the theme
export const pot = () => {
	return src("**/*.php")
	.pipe(
		wpPot({
		  domain: "wharrf",
		  package: info.name
		})
	  )
	.pipe(dest(`languages/${info.name}.pot`));
};

export const watchForChanges = () => {
	watch('assets/src/scss/**/*.scss', series(styles, updateAssetsVersion));
	watch('assets/src/images/**/*.{jpg,jpeg,png,svg,gif}', series(images, reload));
	watch(['assets/src/**/*','!assets/src/{images,js,scss}','!assets/src/{images,js,scss}/**/*'], series(reload));
	watch('assets/src/js/**/*.js', series(scripts, updateAssetsVersion, reload));
	watch("**/*.php", reload);
}

export const clean = () => del(['assets/build']);


export const dev = series(clean, parallel(styles, images, scripts), serve, watchForChanges)
export const build = series(clean, parallel(styles, images, scripts), pot)
export default dev;