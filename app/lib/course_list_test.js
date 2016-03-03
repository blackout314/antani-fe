'use strict';

describe('Course List Use Case', function () {
    var mockedHttpAdapter, use_case;

    beforeEach(function () {
        mockedHttpAdapter = {
            all: null
        };

        use_case = new CourseList(mockedHttpAdapter);
    });

    it('empty course list', function (done) {

        spyOn(mockedHttpAdapter, 'all').and.returnValue([]);

        use_case.execute(function showRetrievedCourseList(err, data){
            expect(mockedHttpAdapter.all).toHaveBeenCalled();

            expect(err).toBe(null);
            expect(data).toEqual([]);
            done();
        });
    });

    it('more than one course', function (done) {
        var courseList = [
            {code: 1234, title: "gestire gli scope", date: "12/12/12", price: 1000},
            {code: 2222, title: "angular ma chissene", date: "11/11/11", price: 2000}
        ];
        spyOn(mockedHttpAdapter, 'all').and.returnValue(courseList);

        use_case.execute(function showRetrievedCourseList(err, data){
            expect(mockedHttpAdapter.all).toHaveBeenCalled();

            expect(err).toBe(null);
            expect(data).toEqual(courseList);
            done();
        });
    });

    it('error from adapter retrieval',function(done){
      spyOn(mockedHttpAdapter, 'all').and.returnValue(new Error('Unable to reach remote http server'));

        use_case.execute(function showRetrievedCourseList(err, data){
            expect(mockedHttpAdapter.all).toHaveBeenCalled();

            expect(err).not.toBe(null);
            expect(err.message).toEqual('List not available');
            expect(data).toBe(null);
            done();
        });
    });

});
