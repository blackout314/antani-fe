'use strict';

describe('Course List Use Case', function () {
    var mockedHttpAdapter, use_case;

    beforeEach(function () {
        mockedHttpAdapter = {
            all: null
        };

        use_case = new CourseList(mockedHttpAdapter);
    });

    xit('empty course list', function () {

        spyOn(mockedHttpAdapter, 'all').and.returnValue([]);

        var successData = jasmine.createSpy('successSpy');
        var successFunction = {
          success: successData
        }
        use_case.execute(successFunction);

        expect(mockedHttpAdapter.all).toHaveBeenCalled();

        expect(successData.calls.first().object).toBe(successFunction);
        expect(successData.calls.mostRecent().object).toEquals([]);
    });

    xit('more than one course', function () {
        var courseList = [
            {code: 1234, title: "gestire gli scope", date: "12/12/12", price: 1000},
            {code: 2222, title: "angular ma chissene", date: "11/11/11", price: 2000}
        ];
        spyOn(mockedHttpAdapter, 'all').and.returnValue(courseList);

        expect(use_case.execute()).toEqual(courseList);

        expect(mockedHttpAdapter.all).toHaveBeenCalled();
    });

    xit('error from adapter retrival',function(){
      spyOn(mockedHttpAdapter, 'all').and.throwError();

      expect(use_case.execute()).toThrow();
      expect(mockedHttpAdapter.all).toHaveBeenCalled();
    });

});
