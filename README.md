# radium-plugin-prefix-all
```bash
npm install radium-plugin-prefix-all --save
```
Radium plugin that adds all vendor prefixes independent of which userAgent was passed. It works similar to [Autoprefixer](https://github.com/postcss/autoprefixer) which also adds every possible vendor prefix, but uses [inline-style-prefixer](https://github.com/rofrischmann/inline-style-prefixer): a prefixer especially for inline styles written in javascript.

## Warning
For now it does not resolve [special plugins](https://github.com/rofrischmann/inline-style-prefixer#special-plugins) such as legacy specifications of flexbox. Therefore be sure to also include Radium's default prefixer which is also based on [inline-style-prefixer](https://github.com/rofrischmann/inline-style-prefixer)  to resolve those.

#### Opera prefixes
It will not add Opera's `O`-prefix since Opera switched to `Webkit` since version 15.

## What you get
```javascript
// input
{
	flexDirection: 'row'
}

// output
{
	WebkitFlexDirection: 'row',
	MozFlexDirection: 'row',
	msFlexDirection: 'row',
	flexDirection: 'row'
}
```

## Usage
> NOTE: This usage guide was directly copied from one of [Ian Obermiller](https://github.com/ianobermiller) (Radium maintainer)'s Radium [Plugins](https://github.com/ianobermiller/radium-plugin-validity-pseudos).

`radium-plugin-prefix-all` should be added directly after Radium's build-in  `Radium.Plugins.prefix`. Radium plugins are setup by passing a config object to `@Radium`. Since you'll d probably want to use this plugin everywhere you use Radium, you can create your own module with a configured version of Radium:

`ConfiguredRadium.js`

```js
var Radium = require('radium');
var prefixAll = require('radium-plugin-prefix-all');

function ConfiguredRadium(component) {
  return Radium({
    plugins: [
      Radium.Plugins.mergeStyleArray,
      Radium.Plugins.checkProps,
      Radium.Plugins.resolveMediaQueries,
      Radium.Plugins.resolveInteractionStyles,
      Radium.Plugins.prefix,

			prefixAll,

      Radium.Plugins.checkProps
    ]
  })(component);
}

module.exports = ConfiguredRadium;

```

Then you just use `@ConfiguredRadium` instead of `@Radium`. Or `ConfiguredRadium(MyComponent)` instead of `Radium(MyComponent)`.

```js
@ConfiguredRadium
class MyComponent extends Component {
  // ...
}
```
