define([
	
	'marionette'

], function (Marionette) {

	return Marionette.ItemView.extend({

		template: '#model-header',

        events: {
        	"click .controls .back" : "moveBack",
          	"click .controls .save" : "saveModel"
        },

        initialize: function(){
        	// why I need to do this manually ???
        	this.listenTo(this.model, 'all', this.render, this);
        },

        saveModel: function(){
        	this.model.save();
        },

        moveBack: function(){
        	window.history.back();
        }		   
	});

});