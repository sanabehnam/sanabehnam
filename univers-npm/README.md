# Mashup Template

Mashup Template is a collection of Beautiful HTML5 templates based on pre-built Blocks to create a website in minutes. All Mashup Templates are responsive design , fully customisable and can be use for any commercial project as you wish.

Check out here: [mashup-template.com](http://mashup-template.com)

## Features

- ES6 with [Babeljs](https://babeljs.io/)
- Modern browser ready (Edge, Chrome, Mozilla, Opera)
- Handlebars compilation
- One click deployment (CLI deployment) with [Now de Zeit](https://zeit.co/)
- [Webpack](https://webpack.js.org) setup for [production](./config/webpack.prod.js) and [development](./config/webpack.dev.js) environments
- Live reload with [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

## Quick start

### Installing the dependencies

```sh
git clone --depth=1 <git url> project-name
cd project-name
npm install
```

> You have to have Node (version >= 6) installed on your machine. 

### Running in development mode

With live reload and all others features usefull for developpement

```sh
npm run dev
```

The app is available on [localhost:5000](http://localhost:5000)

### Running in production mode

Optimize for production

```sh
npm start
```

The app is available on [localhost:5000](http://localhost:5000)

### Add a new pages

Create a new file named `custom_page.hbs` inside the pages folder.

```html
{{!-- Add meta/html pages for constistency --}}
{{> metaHeader title='Title page' description="description"}}

{{!-- Add the menu for constistency --}}
{{> header }}

{{!-- Your new / custom content can go here --}}
<div class="section">
  <div class="row container">
  </div>
</div>

{{!-- Add the footer for constistency --}}
{{> footer }}

{{!-- Add the meta/html for constistency --}}
{{> metaFooter}}
```

Restart your server to see the new pages in `/custom_page.html` and you are good to go !

### Add a new Handlebars helpers

Create a new file named `uppercase.js` inside the templates/helpers folder.

```javascript
module.exports = function (str) {
    return str.toUpperCase()
}
```

You can then use it inside your .hbs file like this : `{{uppercase "aBcDeF"}}`
You can find other examples [here](https://github.com/helpers/handlebars-helpers/tree/master/lib)

### Add a new Handlebars partials

Create a new file name `custom_template.hbs` inside the templates/partials folder.

```html
<p>Custom template</p>
```

You can then use it inside an .hbs like this : `{{> custom_template }}`

### Add a new Javscript files

Create a new file named `custom_function.js` inside the scripts folder.

```javascript
// import from npm 
import jQuery from 'jQuery'

// Import from other file
import file from './file'


function customFunction () {
    console.log('custom function')
}


export { customFunction }
```

You can use it in an another file by importing it like this : `import { file} from './custom_function'`.
Or you can assigning it to the window object like `Object.assign(window, { customFunction})` and using it like this `customFunction()`.
More informations about [imports](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/import) and [export](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/export).

### Add a new SCSS files


Create a new file named `custom_function.scss` inside the styles folder.

```scss
h1 {
    color: blue;

    &:hover {
        color: red;
    }
}
```

You can use the styling by importing it inside the `main.scss` like this : `@import "custom_function";`
All templates are built on a light version of Bootstrap 3.3.7 and with SCSS.

## Architectures

```sh
.
├── config                  # Config for building the project with webpack
│   ├── webpack.dev.js      # Development settings
│   └── webpack.prod.js     # Production settings
├── dist                    # Project files after build
├── src                     # Source folder for the project
│   ├── assets              # Assets like img, svg and others goes here
│   ├── index.js            # Entry points of the application
│   ├── pages               # Where you write your pages
│   ├── scripts             # Where you write your custom javascript
│   │   ├── lib             # Lib used for the project
│   ├── styles              # Where you write your custom SCSS
│   │   ├── lib             # Lib used for the project
│   └── templates           # Folder used by Handlebars
│       ├── helpers         # Declare your helpers here
│       └── partials        # Declare your templates partials here
├── package.json            # The NPM dependencies of the projects
```

## Deployment

### Now

Orson + Now = <3

- Downloads the Now CLI with npm `npm install -g now` or [here](https://github.com/zeit/now-cli/releases)
- `now --login` for login into your now account or create a brand new one
- `npm run deploy:now` inside your project folder. It will build the project then push a static version of the dist folder

You can look at more info about the project [at their website](https://zeit.co/now) and help at `now --help`

### Others free deployment resources

- [Heroku](https://www.heroku.com/) provide a free pricing to deploy a lot of different apps.
- [Google app Engine](https://cloud.google.com/appengine/) provide a free pricing to deploy static site.


## Project References and resources

- [Webpack](https://webpack.js.org/) / [webpack.academy](https://webpack.academy/)
- [ES6 features](http://es6-features.org/)
- [Handlebars](http://handlebarsjs.com/)
- [SCSS](http://sass-lang.com/)

## About Orson.io

Our mission is to help everyone to simply create beautiful and professional websites. Orson.io is an all-included website builder focused on SEO. If you don’t want to code and handle all server settings, [try Orson.io for free](http://en.orson.io)
        

## License

MIT License

Copyright (c) 2017 Orson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE