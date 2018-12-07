define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!../templates/template2.hbs'
  ], function($, _, Backbone, Handlebars, templateHTML){
    var view2 = Backbone.View.extend({

        template: Handlebars.compile(templateHTML),

        id: '#container',
        
        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html(this.template());
            return this;
        }
    });
    return view2;
  });