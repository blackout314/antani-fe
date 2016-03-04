'use strict';

var CoursesView = Backbone.View.extend({

    initialize: function(options) {
        this.courseRepository = options.courseRepository;
    },

    render: function(executedCallback) {
        var that = this;
        this.courseRepository.execute(function(error, courses) {
            var html = "<ul>";
            _.each(courses, function(c) {
                html += "<li class='course'></li>";
            });
            html += "</ul>";
            that.$el.html(html);
        });
        return this;
    }

});