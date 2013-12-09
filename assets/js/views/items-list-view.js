define ([

    'marionette',

    // single item view
    'views/item-list-view'
    
], function (Marionette, itemListView) {


    var collectionView = Marionette.CollectionView.extend({

        tagName: 'ul',

        className: 'items-list list-unstyled',
      
        itemView: itemListView,

        initialize: function(){
          // TODO: review the fetch placement
          this.collection.fetch({reset: true });
        }

    });

    return collectionView;

}); 