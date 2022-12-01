# portfolio-gohugo

Portfolio, this time using Hugo static site generator.

- The UI imitates the Julia Programming Languaje webpage https://julialang.org/ , took it as reference because it just looks clean and pretty sober.

- With Hugo it will hopefully render faster as a static site, also, it will be easier to deploy minor changes like adding a bit more content once in a while using github-actions.

- Works well even if the browser doesn't support javascript or blocks it :)

## About the CSS mess

I took the time to learn to optimize bootstrap files by using bootstraps npm package and webpack. This resulted in pretty small js and css files compared to the official bootstrap bundles, but, it might not be worth the time in most cases and it could be counterproductive if you want to add new features quick because your custom stylesheets have to be processed again.

Anyways, I followed [Bootstrap's Webpack guide](https://getbootstrap.com/docs/5.2/getting-started/webpack/). As a result we have to `npm run build`, this will take the files in `custom_bs5\src\` and generate the js and css with just the classes manually selected in `custom_bs5\src\js\main.js` and `custom_bs5\src\scss\styles.scss` the output files are generated in the places you choose in the `webpack.config.js`.

Now, the step above reduces the js file, because I am actually importing all css classes. But to purge the unused css classes and leave only the ones that are being used, we're going to have to use purgecss. To do that we have to set it up in `purgecss.config.js` and then run `npm run purge` (Note to self: Check `package.json` to remember what am I running.).
