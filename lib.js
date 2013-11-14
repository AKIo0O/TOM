

function Class(){

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
    },

    anyc: {},

    callbacks: {},

    wait: function(key, callback){

        if(!T.anyc[key]) T.anyc[key] = 0;
        T.anyc[key]++;
        return function(){
            callback();
            if( --T.anyc[key] == 0 ) T.callbacks[key]();
        };
    },

    done: function(key, callback){
        T.callbacks[key] = callback;
    }

};
exports.T = T;
