var RestAdapter = function () {

};

RestAdapter.prototype.all = function (successCallback) {

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function (args) {

        if (this.readyState == this.DONE) {
            successCallback(null,JSON.parse(this.responseText));
        }
    };
    xhr.open("GET", "/courses",true);
    xhr.send();
};