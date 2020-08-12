//브라우져에서 실행.
var oReq = new XMLHttpRequest();

oReq.addEventListener("load", function() {
    console.log(this.responseText)
});

oReq.open("GET", "https://reqres.in/api/users?page=2");
oReq.send();