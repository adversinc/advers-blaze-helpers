Template.registerHelper('getLength', function (a) {
	return a && a.length;
});

Template.registerHelper('isSelected', function (a, b) {
	return (a === b) ? { selected: 'selected' } : null;
});

Template.registerHelper('isChecked', function (a, b) {
	return (a === b) ? { checked: 'checked' } : null;
});

Template.registerHelper('cutString', function (str, len) {
	return (str.length > len)?str.substr(0, Math.max(len-3, 0))+'...':str;
});

Template.registerHelper('$eq', function (a, b) {
	return (a === b); //Only text, numbers, boolean - not array & objects
});

Template.registerHelper('$neq', function (a, b) {
	return (a !== b); //Only text, numbers, boolean - not array & objects
});

Template.registerHelper('$in', function (a, b, c, d) {
	return ( a === b || a === c || a === d);
});

Template.registerHelper('$nin', function (a, b, c, d) {
	return ( a !== b && a !== c && a !== d);
});

Template.registerHelper('$exists', function (a) {
	return ( a !== undefined);
});

Template.registerHelper('$lt', function (a, b) {
	return (a < b);
});

Template.registerHelper('$gt', function (a, b) {
	return (a > b);
});

Template.registerHelper('$lte', function (a, b) {
	return (a <= b);
});

Template.registerHelper('$gte', function (a, b) {
	return (a >= b);
});


Template.registerHelper('$and', function (a, b) {
	return (a && b);
});

Template.registerHelper('$or', function (a, b) {
	return (a || b);
});

Template.registerHelper('$not', function (a) {
	return (!a);
});

Template.registerHelper('nl2br', function (text) {
	var nl2br = (text + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br>' + '$2');
	return new Template.SafeString(nl2br);
});

Template.registerHelper("$mapped", function(arr) {
	if(!Array.isArray(arr)){
		try {
			arr = arr.fetch()
		}
		catch (e){
			console.log("Error in $mapped: perhaps you aren't sending in a collection or array.")
			return [];
		}
	}

	var $length = arr.length;

	var mappedArray = arr.map(function(item,index) {
		item.$length = $length;
		item.$index = index;
		item.$first = index === 0;
		item.$last  = index === $length-1;
		return item;
	});

	return mappedArray || [];
});

// Template.registerHelper('userRole', function ( /* arguments */) {
//   var role = Session.get('currentRole');
//   return _.any(arguments, function(value) { return (value == role); });
// });

/*
		Then $uper helper - Credit goes to @belisarius222 aka Ted Blackman for sparking an idear for a solution
*/
/*
Disabled because the value is questionable
 
Helpers.superScope = {};

Helpers.addScope = function(name, obj) {
	// TODO: Get rid of underscore
	Helpers.superScope[name] = _.bind(function() { return this; }, obj);
};

Helpers.removeScope = function(name) {
	delete Template._globalHelpers[name];
	delete Helpers.superScope[name];
};

Helpers.addScope('Session', Session);
Helpers.addScope('Meteor', Meteor);

Template.registerHelper('$', function() {
	return Helpers.superScope;
});
*/