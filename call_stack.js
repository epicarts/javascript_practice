function printName(firstname) {
    var myname = "youngho";
    return myname + "," + firstname;
}

function run(firstname) {
    var firstname = firstname || "choi";
    var result = printName(firstname);
    console.log(result)
}

//연속적으로 호출하면 메모리 오버플로우가 날거임. 브라우저이는 지정된 횟수만큼만 스택을 쌓게 설정해둔 경우가 많다고함.
//Maximum call stack size exceeded
run();