var RestAdapter = function (serviceEndpointBaseURL) {
 this.serviceEndpointBaseURL = serviceEndpointBaseURL || "https://antani-be.herokuapp.com";
};

RestAdapter.prototype.all = function (successCallback) {

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function (args) {

        if (this.readyState == this.DONE) {
            successCallback(null,JSON.parse(this.responseText));
        }
    };
    xhr.open("GET", this.serviceEndpointBaseURL+"/courses",true);
    xhr.send();
};
