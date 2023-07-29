export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["banner-main.JPG","banner-sandning.JPG","butik-main.JPG","favicon.png","IMG_E4615.JPG","IMG_E4619.JPG","IMG_E4620.JPG","sandning-main.JPG","snorojning-main.JPG","sopning-main.png","specialtransport.JPG","test.JPG","transport.JPG"]),
	mimeTypes: {".JPG":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.fc77312b.js","app":"_app/immutable/entry/app.0e7af499.js","imports":["_app/immutable/entry/start.fc77312b.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.d50dde57.js","_app/immutable/entry/app.0e7af499.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.d39bed27.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
