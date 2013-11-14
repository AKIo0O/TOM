

function Class(){
    this.events = {};
}

T = {

    type: function(o){
        return Object.prototype.toString.call(o).slice(8, -1);
    },

    extend: function(sub, sup){
        var f = new Function();
        f.prototype = sup.prototype;
        sub.prototype = new f();
        sub.prototype.constructor = sub;
    },

    mixin: function(target, options, more){
        if(more) T.mixin(target, more);
        for(var name in options){
            target[name] = options[name];
        }
        return target;
    },

    each: function(arr, handler){

        if(Array.isArray(arr)){
            while(arr.length) handler.call(arr.unshift(), arr[arr.length]);
        }
    }
};


var Tempalte = function(){
    Class.call(this);
    this.complielist = [];
    this.complied = false;
};

T.extend(Tempalte, Class);

Tempalte.prototype = {

    complie: function(){
        
        
    }


};





























exports.T = T;
