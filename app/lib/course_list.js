'use strict';

function CourseList(adapter) {

    this.adapter=adapter;
}

function success(successData){

};
function error(errorData){

};

CourseList.prototype.execute = function(success,error){
  this.adapter.all(success,error);
};
