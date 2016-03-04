'use strict';

var RestAdapter = function (serviceEndpointBaseURL) {
    this.serviceEndpointBaseURL = serviceEndpointBaseURL || "https://antani-be.herokuapp.com";
    this.sendRequest = function (verb, path, onReadyCallback) {
        var xhr = new XMLHttpRequest();

        xhr.setRequestHeader("Content-Type", "application/json;Charset=UTF-8");
        xhr.onreadystatechange = onReadyCallback;
        xhr.open(verb, this.serviceEndpointBaseURL + path, true);

        return xhr;
    };
};

RestAdapter.prototype.all = function (successCallback) {
    var xhr =this.sendRequest("GET", "/courses", function () {

        if (this.readyState == this.DONE) {
            successCallback(null, JSON.parse(this.responseText));
        }
    });
    xhr.send();
};

RestAdapter.prototype.subscribeParticipant = function (courseCode, callback) {
    var xhr = this.sendRequest("POST", "/courses/" + courseCode + "/participants", function () {

        if (this.readyState == this.DONE) {
            callback(null, "OK");
        }
    });
    xhr.send(JSON.stringify({}));

};
