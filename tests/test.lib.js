
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














