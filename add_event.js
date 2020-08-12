//이 자바 스크립트를 실행을 위해서 test.html파일을 여시오.
var el = document.querySelector(".outside");

//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_handler_properties
el.addEventListener("click", function(e) {
    var target = e.target;
    console.log("clicked");
    console.log(target.className, target.nodeName);
    console.log(target.innerText);
    //디버그 모드도 가능
    debugger;
})

