'use strict';

describe('course list view', function () {

    var courseListStub;

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
        });

    it("shows two courses", function () {

        var attachTemplateTo = $('<div id="#main-container"></div>');
        var view = new CoursesView(
            {
                courseRepository: courseListStub,
                el: attachTemplateTo
            });
        view.render();
        expect(view.$el.find('.course').length).toBe(3);
    });


    it("select o", function () {
    });

    });