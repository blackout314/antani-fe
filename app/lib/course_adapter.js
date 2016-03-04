'use strict'

var RestAdapter = function (serviceEndpointBaseURL) {
    this.serviceEndpointBaseURL = serviceEndpointBaseURL || "https://antani-be.herokuapp.com";
    this.sendRequest = function (verb, path, onReadyCallback) {
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = onReadyCallback;
        xhr.open(verb, this.serviceEndpointBaseURL + path, true);
        xhr.send();
    };
};

RestAdapter.prototype.all = function (successCallback) {
    this.sendRequest("GET", "/courses", function () {

        if (this.readyState == this.DONE) {
            successCallback(null, JSON.parse(this.responseText));
        }
    });
};

RestAdapter.prototype.subscribeParticipant = function (courseCode, callback) {
    this.sendRequest("POST", "/courses/" + courseCode + "/participants", function () {

        if (this.readyState == this.DONE) {
            callback(null, "OK");
        }
    });
};