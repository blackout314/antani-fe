'use strict';

var CoursesView = Backbone.View.extend({

    initialize: function (options) {
        this.courseRepository = options.courseRepository;
        this.$el = options.el;
    },

    events: {
        "click .btn": "subscribe"
    },

    subscribe: function (event) {
        console.log('subscribe');
        console.log((event));

    },

    render: function () {
        var that = this;
        this.courseRepository.execute(function (error, courses) {

            var html = '<table class="table"><thead><tr><th>Code</th><th>Title</th><th>Price</th><th>Date</th><th>Actions</th></tr></thead><tbody>';
            _.each(courses, function (c) {
                html +=
                    '<tr class="course">' +
                    '<td>' + c.code + '</td><td>' + c.title + '</td><td>' + c.price + '</td><td>' + c.dateTime + '</td><td>' + '<button type="button" class="btn btn-default">Subscribe</button>' + '</td>'
                "</tr>";
            });
            html += '</tbody></table>';

            that.$el.html(html);
        });
        return this;
    }

});