Package.describe({
	name: "advers:blaze-helpers",
	summary: "Blaze helpers, the anchestor of raix:handlebar-helpers",
	version: "0.3.0"
});

Package.onUse(function (api) {
	//api.versionsFrom('2.8.0');
	api.versionsFrom('3.0.2');

	api.use([
		'typescript',
		"blaze-html-templates"
	]);
	api.mainModule('src/helpers.operators.ts', 'client');
});
