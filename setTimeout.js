
//비동기. asynchronous
function run() {
    console.log("run start");

    // 나중에 실행되는 함수.
    setTimeout(function() {
        var msg = "hello";
        console.log(msg);
        console.log("run setTime out function ing");
    }, 2000)
    
    console.log("run end")
}

//setTimeout 안의 함수(콜백함수)는 run 함수가 끝나고나서 실행됨.
run();
