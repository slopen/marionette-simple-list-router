define ([

    'marionette',

    // data
    'models/item',
    'collections/items-list',

    // layouts
    'layouts/item',
    'layouts/items-list',

    // localStorage adapter
    'localstorage'

], function (

    Marionette,

    // data
    itemModel,
    itemsList,

    // layouts
    itemLayout,
    itemsListLayout,

    localStorage
  ) {

  // ------------------------------------------------------------

  // NOTE: essential backbone.localStorage module issue
  // must be created one time for model/collection to keep persistency
  var localStorage = new localStorage ('items-list');

  // prepare for backbone.localStorage support
  var itemModel = itemModel.extend({localStorage: localStorage}),
      itemsList = itemsList.extend({localStorage: localStorage});

  // ------------------------------------------------------------


  // common routes code

  var routes = {};

  // collection route 
  routes [''] = {

    eventName: 'show-list',

    getLayout: function () {
      return itemsListLayout.extend({
        collection: new itemsList()
      });
    }
  };

  // single model route
  routes ['item/:id'] = {

    eventName: 'show-item',

    getLayout: function (id) {

      return itemLayout.extend({
        model: new itemModel ({id: id})
      });

    }     
  };

  return routes;

}); 