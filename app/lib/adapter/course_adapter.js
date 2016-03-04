'use strict';

var RestAdapter = function (serviceEndpointBaseURL) {
    this.serviceEndpointBaseURL = serviceEndpointBaseURL || "https://antani-be.herokuapp.com";
    this.xhr=undefined;
    this.initRequest = function (verb, path, onReadyCallback) {
        this.xhr = new XMLHttpRequest();

        this.xhr.onreadystatechange = onReadyCallback;
        this.xhr.open(verb, this.serviceEndpointBaseURL + path, true);
    };
};

RestAdapter.prototype.all = function (successCallback) {
    this.initRequest("GET", "/courses", function () {

        if (this.readyState === this.DONE) {
            successCallback(null, JSON.parse(this.responseText));
        }
    });
    this.xhr.send();
};

RestAdapter.prototype.subscribeParticipant = function (courseCode, callback) {
    this.initRequest("POST", "/courses/" + courseCode + "/participants", function () {

        if (this.readyState === this.DONE) {
            callback(null, "OK");
        }
    });
    this.xhr.setRequestHeader("Content-Type", "application/json;Charset=UTF-8");
    this.xhr.send(JSON.stringify({}));

};
