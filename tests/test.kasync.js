
var T = require("kasync");
var Test = require('./test.js');
//------------------------------------------------------

var res = "";

setTimeout(T.wait("timeout", function(){
    res += "3000ms";
}),3000);

setTimeout(T.wait("timeout", function(){
    res += "3000ms";
}),3000);

T.done("timeout", function(){
    res += "done";
    Test.assert(res, "3000ms3000msdone", "Test T.wait && T.done 3000ms vs 3000ms");
});

//------------------------------------------------------

//------------------------------------------------------

var res1 = "";

setTimeout(T.wait("timeout1", function(){
    res1 += "2000ms";
}),2000);

setTimeout(T.wait("timeout1", function(){
    res1 += "3000ms";
}),3000);

T.done("timeout1", function(){
    res1 += "done";
    Test.assert(res1, "2000ms3000msdone", "Test T.wait && T.done 2000ms vs 3000ms");
});

//------------------------------------------------------

//------------------------------------------------------

var res2 = "";

setTimeout(T.wait("timeout2", function(){
    res2 += "4000ms";
}),4000);

setTimeout(T.wait("timeout2", function(){
    res2 += "3000ms";
}),3000);

T.done("timeout2", function(){
    res2 += "done";
    Test.assert(res2, "3000ms4000msdone", "Test T.wait && T.done 3000ms vs 4000ms");
});

//------------------------------------------------------
