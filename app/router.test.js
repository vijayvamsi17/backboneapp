define([
    'jquery',
    'underscore',
    'backbone',
    'views/view1',
    'views/view2'
], function ($, _, Backbone, view1, view2) {

    var myRouter = Backbone.Router.extend({
        routes: {
            "": "showview1",
            "view2": "showview2"
        }
        // showview1: function() {
        //     console.log("View 1");
        // },
        // showview2: function() {
        //     console.log("View 2");
        // }
    });

    var initialize = function() {
        var myRouterObj = new myRouter();
        
        myRouterObj.on('route:showview1', function() {
            console.log("View 1");
            var view1Obj = new view1({
                el: "#container"
            });
        });

        myRouterObj.on('route:showview2', function() {
            console.log("View 2");
            var view1Obj = new view2({
                el: "#container"
            });
        });

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };

});