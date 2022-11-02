![svackage logo](https://raw.githubusercontent.com/svackages/persistent-store/main/logo.png)

![npm version](https://img.shields.io/npm/v/@svackages/sveltkit-hook-html-minifier)
![license](https://img.shields.io/github/license/svackages/sveltkit-hook-html-minifier)
# sveltkit-hook-html-minifier
⚠ This might change a bit with SvelteKit 1.0 ⚠

A sveltkit hook that wrapps [html-minifier](https://www.npmjs.com/package/html-minifier)

## How to use
### Single hook
```javascript
import { htmlMinifierHook } from "@svackages/sveltkit-hook-html-minifier";

/** @type {import('@sveltejs/kit').Handle} */
export const handle = htmlMinifierHook;
```
```typescript
import { htmlMinifierHook } from "@svackages/sveltkit-hook-html-minifier";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = htmlMinifierHook;
```
### Single hook with options
```javascript
import { htmlMinifierHook } from "@svackages/sveltkit-hook-html-minifier";
import { prerendering } from '$app/environment';

const minifierOptions = {
    removeAttributeQuotes: true,
};

/** @type {import('@sveltejs/kit').Handle} */
export const handle = ({ event, resolve }) => htmlMinifierHook({ event, resolve, minifierOptions, prerendering});
```
```typescript
import { htmlMinifierHook } from "@svackages/sveltkit-hook-html-minifier";
import { prerendering } from '$app/environment';
import type { Handle } from "@sveltejs/kit";

const minifierOptions = {
    removeAttributeQuotes: true,
};

export const handle: Handle = ({ event, resolve }) => htmlMinifierHook({ event, resolve, minifierOptions, prerendering});
```
### Sequence
```javascript
import { sequence } from '@sveltejs/kit/hooks';
import { htmlMinifierHook } from "@svackages/sveltkit-hook-html-minifier";

// Add htmlMinifierHook at the end
/** @type {import('@sveltejs/kit').Handle} */
export const handle: Handle = sequence(someOtherHook, htmlMinifierHook);
```
```typescript
import { sequence } from '@sveltejs/kit/hooks';
import { htmlMinifierHook } from "@svackages/sveltkit-hook-html-minifier";
import type { Handle } from "@sveltejs/kit";

// Add htmlMinifierHook at the end
export const handle: Handle = sequence(someOtherHook, htmlMinifierHook);
```

## Default Options
```javascript
const defaultMinifierOptions = {
	collapseBooleanAttributes: true,
	collapseWhitespace: true,
	conservativeCollapse: true,
	decodeEntities: true,
	html5: true,
	ignoreCustomComments: [/^#/],
	minifyCSS: true,
	minifyJS: false,
	removeAttributeQuotes: true,
	removeComments: true,
	removeOptionalTags: true,
	removeRedundantAttributes: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true,
	sortAttributes: true,
	sortClassName: true,
};
```

To see all options take a look at [the html-minifier docs](https://www.npmjs.com/package/html-minifier#options-quick-reference)
