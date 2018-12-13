define([
    'jquery',
    'underscore',
    'backbone'
], function(
    $, _, Backbone
) {
    var model1 =  Backbone.Model.extend({
        url: '/todos',
        defaults: {
            firstName: '',
            lastName: ''
        },
        initialize: function() {
            this.on('click:submit', function() {
                console.log("Data submitted");
            });
        }
    });
    return model1;
});
