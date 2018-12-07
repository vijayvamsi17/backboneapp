define([
    'jquery',
    'underscore',
    'backbone',
    'router.test'
  ], function($, _, Backbone, Router){
    var initialize = function(){
        Router.initialize();
      }
    return {
        initialize: initialize
    };
    
  });


// (function($) {
//     var view1 = Backbone.View.extend({
        
//         initialize: function() {
//             this.render();
//         },
//         tagName: 'h1',
//         render: function() {
//             this.$el.html('Hello from backbone view 1'); 
//             return this;
//         }
//     });

//     var view2 = Backbone.View.extend({
        
//         initialize: function() {
//             this.render();
//         },
//         tagName: 'h1',
//         render: function() {
//             this.$el.html('Hello from backbone view 2'); 
//             return this;
//         }
//     });

//     var myRouter = Backbone.Router.extend({
//         routes: {
//             "": "showview1",
//             "view2":"showview2"
//         },
//         showview1: function() {
//             console.log("View 1");
//             var view1Obj = new view1({
//                 el: "#container"
//             });
//         },
//         showview2: function() {
//             var view2Obj = new view2({
//                 el: "#container"
//             });
//         }
//     });

//     var myRouterObj = new myRouter();

//     Backbone.history.start();
// })(jQuery);