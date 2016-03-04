'use strict';

function CourseList(courseRetrieverAdapter) {
    this.courseRetrieverAdapter = courseRetrieverAdapter;
}


CourseList.prototype.execute = function (callback) {

    this.courseRetrieverAdapter.all(

        function (err, retrievedCourseList)
        {
            if (err) {
                callback(new Error('List not available'), null);
            }

            callback(null, retrievedCourseList);
        });
};
