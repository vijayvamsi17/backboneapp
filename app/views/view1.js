define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'models/model1',
    'text!../templates/template1.hbs'
], function ($, _, Backbone, Handlebars, Model1, templateHTML) {
    var view1 = Backbone.View.extend({

        template: Handlebars.compile(templateHTML),

        id: '#container',

        initialize: function () {
            this.render();
        },

        events: {
            'click #form-submit': 'submitFn'
        },

        render: function () {
            this.model = new Model1();
            this.model.fetch();
            console.log(this.model.toJSON());
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        submitFn: function (e) {
            e.preventDefault();
            this.model.set({
                firstName: $('#firstname').val(),
                lastName: $('#lastname').val()
            })
            // console.log(this.$input);
            this.model.save();
        }
    });
    return view1;
});