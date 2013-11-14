
var T = require('../lib.js').T;
var Test = require('./test.js');


//------------------------------------------------------


Test.assert(T.type([]), "Array", "Test T.type");

//------------------------------------------------------


//------------------------------------------------------

var Animal = function(){};
Animal.prototype.type = "animal";

var Person = function(){};
T.extend(Person, Animal);

Test.assert(new Person().type, "animal", "Test T.extend");

//------------------------------------------------------

//------------------------------------------------------
var a = {};
var b = {name:"aki"};
var c = {age:2};

Test.assert(T.mixin(a, b).name, b.name, "Test T.mixin 2 args");
Test.assert(T.mixin(a, b, c).age, c.age, "Test T.mixin 3 args");

//------------------------------------------------------


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












