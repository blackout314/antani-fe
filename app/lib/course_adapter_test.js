'use strict';

describe("In-memory Course adapter", function () {

    var onSuccess;
    var adapter;

    beforeEach(function () {
        jasmine.Ajax.install();
        onSuccess = jasmine.createSpy("success");
        adapter = new RestAdapter();
    });

    afterEach(function () {
        jasmine.Ajax.uninstall();
    });


    it('should invoke /course GET ', function () {
        adapter.all(onSuccess);
        expect(jasmine.Ajax.requests.mostRecent().url).toBe('/courses');
    });


    it('should succesfully get not empty course list', function () {

        adapter.all(onSuccess);
        expect(onSuccess).not.toHaveBeenCalled();

        var mockedRequest = jasmine.Ajax.requests.mostRecent();

        var courseList ='[{ "code": 1234, "title": "gestire gli scope", "date": "12/12/12", "price": 1000},' +
            '{"code": 2222, "title": "angular ma chissene", "date": "11/11/11", "price": 2000}]';
        var mockedResponse =
        {
            success: {
                "status": 200,
                "contentType": 'text/plain',
                "responseText": courseList
            }
        }
        mockedRequest.respondWith(mockedResponse.success);
        expect(onSuccess).toHaveBeenCalledWith(null,JSON.parse(courseList));
    });

});
