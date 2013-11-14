
require("colors");


exports.assert = function assert(expression, value, str){
    var b =  expression === value,
        color = b ? "green" : "red";

    str += b ? " is passed." : " is failed.";
    console.log(str[color]);
};




