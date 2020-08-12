function pringName1(fistname) {

    var result = inner();
    console.log(typeof inner);
    console.log("name is " + result);

    //함수가 실행되기 전에 자바스크립트 파서가 한번 훝음
    function inner() {
        return "inner value"
    }
    return
}

function pringName2(fistname) {


    console.log(typeof inner);
    console.log("name is " + result);

    var result = function inner() {
        return "inner value"
    }
    return
}

pringName1();
pringName2();

function a(){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
a(1, 2);