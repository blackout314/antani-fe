'use strict';

describe("Course REST adapter", function () {

    var callback;
    var adapter;

    beforeEach(function () {
        jasmine.Ajax.install();
        callback = jasmine.createSpy("success");
        adapter = new RestAdapter();
    });

    afterEach(function () {
        jasmine.Ajax.uninstall();
    });

    describe('all courses scenario', function () {

        it('should invoke default /courses GET ', function () {
            adapter.all(callback);
            expect(jasmine.Ajax.requests.mostRecent().method).toBe('GET');
            expect(jasmine.Ajax.requests.mostRecent().url).toBe('https://antani-be.herokuapp.com/courses');
        });


        it('should invoke /courses GET ', function () {
            adapter = new RestAdapter("https://any");
            adapter.all(callback);
            expect(jasmine.Ajax.requests.mostRecent().method).toBe('GET');
            expect(jasmine.Ajax.requests.mostRecent().url).toBe('https://any/courses');
        });


        it('should successfully get not empty course list', function () {

            adapter.all(callback);
            expect(callback).not.toHaveBeenCalled();

            var mockedRequest = jasmine.Ajax.requests.mostRecent();

            var courseList = '[{ "code": 1234, "title": "gestire gli scope", "date": "12/12/12", "price": 1000},' +
                '{"code": 2222, "title": "angular ma chissene", "date": "11/11/11", "price": 2000}]';
            var mockedResponse =
            {
                success: {
                    "status": 200,
                    "contentType": 'text/plain',
                    "responseText": courseList
                }
            };
            mockedRequest.respondWith(mockedResponse.success);
            expect(callback).toHaveBeenCalledWith(null, JSON.parse(courseList));
        });

    });

    describe('new course subscription scenario', function () {

        it('should invoke /courses/[id]/participants POST', function () {
            adapter.subscribeParticipant('123ABC', callback);
            expect(jasmine.Ajax.requests.mostRecent().method).toBe('POST');
            expect(jasmine.Ajax.requests.mostRecent().requestHeaders['Content-Type']).toBe("application/json;Charset=UTF-8");
            expect(jasmine.Ajax.requests.mostRecent().params).toBe("{}");
            expect(jasmine.Ajax.requests.mostRecent().url).toBe('https://antani-be.herokuapp.com/courses/123ABC/participants');
        });

        it('should successfully add a participant ', function () {
            adapter.subscribeParticipant('123ABC', callback);

            expect(callback).not.toHaveBeenCalled();

            var mockedRequest = jasmine.Ajax.requests.mostRecent();
            var mockedResponse =
            {
                success: {
                    "status": 200,
                }
            };
            mockedRequest.respondWith(mockedResponse.success);

            expect(callback).toHaveBeenCalledWith(null,"OK");
            expect(jasmine.Ajax.requests.mostRecent().status).toBe(200);
        });

    });


});
