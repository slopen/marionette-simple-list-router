define([

	// routes entries registry list:
	// add new rotes below as a dependencies, 
	// will populate router routes hash

	'routes/not-found',
	'routes/items',

], function (){

	var entries = Array.prototype.slice.call(arguments, 0),
		length = entries.length,
		registry = [];

	for (var i=0; i<length; i++) {

		for (var route in entries [i]){
			registry.push([
				route,
				entries [i] [route].eventName,
				entries [i] [route].getLayout
			]);
		}

	}

	return registry;
});