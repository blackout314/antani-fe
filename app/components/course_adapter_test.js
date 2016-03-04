
var RestAdapter = function(newXhr) {
    var xhr = newXhr;
};
RestAdapter.prototype.retrieveAllCourses = function(callback){

    //xhr.open("GET", "/courses");
    //xhr.send();

};

describe("In-memory Course adapter", function () {

    beforeEach(function () {
        jasmine.Ajax.install();
    });
    afterEach(function () {
        jasmine.Ajax.uninstall();
    });

    it('should call remote rest client', function (done) {

        var doneFn = jasmine.createSpy("success");

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function (args) {
            if (this.readyState == this.DONE) {
                doneFn(this.responseText);
            }
        };


        xhr.open("GET", "/courses");
        xhr.send();



        var adapter = new RestAdapter(xhr);
        console.log(jasmine.Ajax.requests.mostRecent());

        expect(jasmine.Ajax.requests.mostRecent().url).toBe('/courses');
        expect(doneFn).not.toHaveBeenCalled();

        jasmine.Ajax.requests.mostRecent().response({
            "status": 200,
            "contentType": 'application/json',
            "responseJSON": []
        });

        expect(doneFn).toHaveBeenCalledWith('awesome response');


        expect(adapter.retrieveAllCourses(function(){ done();   }))
    });

    xit('should get an empty list from remote service', function () {

    })
});
