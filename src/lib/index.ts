import type { Handle } from '@sveltejs/kit';
import { minify, type Options } from 'html-minifier';

const defaultMinifierOptions: Options = {
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

interface HtmlMinifierHandle {
	(input: {
		minifierOptions?: Options;
		prerendering?: boolean;
	} & Parameters<Handle>[0]): ReturnType<Handle>
}

export const htmlMinifierHook: HtmlMinifierHandle = async ({ event, resolve, minifierOptions = {}, prerendering = true }) => {
	const options = Object.assign(defaultMinifierOptions, minifierOptions)

	const response = await resolve(
		event,
		prerendering
			? {
				transformPageChunk: ({ html }) => minify(html, options)
			}
			: {}
	);

	return response;
};
