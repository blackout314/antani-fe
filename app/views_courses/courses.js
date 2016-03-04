'use strict';

var CoursesView = Backbone.View.extend({

    initialize: function(options) {
        this.courseRepository = options.courseRepository;
        this.$el  = options.el;
    },

    render: function() {
        var that = this;
        this.courseRepository.execute(function(error, courses) {
            var html = "<ul>";
            _.each(courses, function(c) {
                html +=
                    "<li class='course'>"+
                        c.code+" - "+ c.title +" - "+ c.price +" - "+ c.dateTime+
                    "</li>";
            });
            html += "</ul>";
            that.$el.html(html);
        });
        return this;
    }

});