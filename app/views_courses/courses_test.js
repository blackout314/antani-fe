'use strict';

describe('course list view', function () {

    var courseListStub;
    var courseView;

    beforeEach(
        function () {

            courseListStub = {
                execute: function (callback) {
                    callback(null,
                        [{
                            "code": "01",
                            "title": "Lingua Kinglon per principianti",
                            "price": 90,
                            "dateTime": "2016-03-02T18:36:14"
                        },
                            {"code": "02", "title": "Clean Code", "price": 200, "dateTime": "2016-04-02T18:36:14"},

                            {
                                "code": "03",
                                "title": "Android basics for Felice",
                                "price": 10,
                                "dateTime": "2016-04-02T18:36:14"
                            }]
                    );
                }
            };

            $('body').html('<div id="main-container"></div>');
            courseView = new CoursesView(
                {
                    courseRepository: courseListStub,
                    el: $('#main-container')
                });
            courseView.render();
        });

    it("shows two courses", function () {
        expect(courseView.$el.find('.course').length).toBe(3);
    });

    xit("subscribe to course", function () {

        spyOn(courseView,"subscribe");
        $(".btn")[0].click();
        expect(courseView.subscribe).toHaveBeenCalled();

    });

});