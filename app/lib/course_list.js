'use strict';

function CourseList(adapter) {
    this.adapter=adapter;
}


CourseList.prototype.execute = function(callback){

    var courseList = this.adapter.all();

    if(courseList instanceof Error)
        callback(new Error('List not available'), null);

    else
        callback(null, courseList);
};
