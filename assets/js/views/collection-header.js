define([
	'marionette'
], function (Marionette) {

	return Marionette.ItemView.extend({

		template: '#collection-header',

		templateHelpers: function(){
			// strange way, but still ok
			return {
				total: this.collection.length
			}
		},  

        events: {
          	"click .controls .add-item" : "addItem"
        },

        initialize: function(){
        	// why I need to do this manually ???
        	this.listenTo(this.collection, 'all', this.render, this);
        },

        addItem: function(){

	        this.collection.create({
	            created_at: (new Date()).getTime()
	        }, {wait: true});

	        return false;
        }		   
	});

});