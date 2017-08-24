### How to use this starterpack

To create this pack I used code of [FARCER (Anatoliy Salamtin)](https://github.com/FARCER)'s  [gulp4start](https://github.com/FARCER/gulp4start) and [agragregra (Alexey Klimanov)](https://github.com/agragregra)'s [optimizedhtml-start-template](https://github.com/agragregra/optimizedhtml-start-template). Used packages: gulp4, pug, sass, browser-sync, imagemin, bootstrap-sass, font-awesome.

You must have gulpjs/gulp-cli installed globally

1. `git clone https://github.com/buriato/starterpack`
2. Default setup use **bootstrap grid** only, and **bootstrap javascript** disabled. If you want to use full bootstrap stack, do this:
  - change **bootstrap-grid** to **bootstrap** in dev/static/styles/libs.sass
  - uncomment javascript files in dev/gulp/tasks/scripts.js
3. `npm i`
4. `gulp`
5. To build your project use:
    `gulp build`


