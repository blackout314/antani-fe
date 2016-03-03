'use strict';

describe('Course List Use Case', function () {
    var fakeCourseRetrieverAdapter, use_case, successResponse, error=null;

    beforeEach(function () {
        fakeCourseRetrieverAdapter = {
            all: function (callback) {
                callback(error, successResponse);
            }
        };

        use_case = new CourseList(fakeCourseRetrieverAdapter);
    });

    it('empty course list', function (done) {
        successResponse=[];

        use_case.execute(function showRetrievedCourseList(err, data){
            expect(err).toBe(null);
            expect(data).toEqual([]);
            done();
        });
    });

    it('more than one course', function (done) {
        successResponse = [
            {code: 1234, title: "gestire gli scope", date: "12/12/12", price: 1000},
            {code: 2222, title: "angular ma chissene", date: "11/11/11", price: 2000}
        ];

        use_case.execute(function showRetrievedCourseList(err, data){

            expect(err).toBe(null);
            expect(data).toEqual(successResponse);
            done();
        });
    });

    it('error from adapter retrieval',function(done){
        error = new Error('Unable to reach remote http server');

        use_case.execute(function showRetrievedCourseList(err, data){

            expect(err).not.toBe(null);
            expect(err.message).toEqual('List not available');
            done();
        });
    });

});
