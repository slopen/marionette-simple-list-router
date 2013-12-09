define ([

    'underscore',
    'marionette'

], function (_, Marionette) {

    // view for item in list
    var itemView = Marionette.ItemView.extend ({

        template: '#tpl-list-item',

        tagName: 'li',

        events: {
          "click .action-delete" : 'delete'
        },

        delete: function(){
          this.model.destroy();
          this.remove();

          return false;
        }
    });

    return itemView;

}); 