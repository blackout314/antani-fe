'use strict';

describe('course list view', function() {
  it("shows courses", function() {
    var courseRepository = {
      execute: function(callback) {
        callback(null, [{},{}]);
      }
    };

    var view = new CoursesView({courseRepository: courseRepository});
    view.render();
    expect(view.$el.find('.course').length).toBe(2);
  });

});