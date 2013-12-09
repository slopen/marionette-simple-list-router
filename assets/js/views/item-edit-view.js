define ([

    'jquery',
    'underscore',
    'marionette'

], function ($, _, Marionette) {

    var itemEditView = Marionette.ItemView.extend({

        events: {
          'change' : 'update'
        },

        // template for one item
        template: '#tpl-item-edit',

        initialize: function(){
          // TODO: review the fetch placement
          this.model.fetch();
        },

        update: function (event) {
          var model = this.model,
              $field = $ (event.target),
              name = $field.attr('name'),
              data = {};

          data [name] = $field.val();
          model.set(data, {silent: true});
        }
    });    

    return itemEditView;

}); 