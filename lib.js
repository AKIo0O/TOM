
var T = {};

var each = function(array, handler){
	if(!Array.isArray(array)) return;
	for(var i = 0, l = array.length; i< l; i++){
		handler.call(array[i],i);
	}
};

var wrap = function(className, tagName){

	var tagName = tagName || "div",
		string  = ["<",tagName," class='", className, "'>"].join(""),
		subfix  = ["</",tagName,">"].join("");

	return function(content){
		return string + content + subfix;
	};
};

var checkMethod = function(type){
	if ( !T[type] ) {
		console.warn("请开发此模块:"+type);
		return false;
	}
	return true;
};

var Class = function(){
	this.compileList = [];
	this.events = {};
};

Class.prototype = {

	compile: function(){
		console.time("compile");
		var me = this;

		if(!me.compileList) console.error("无编译列表");

		each(me.compileList, function(){
			me[this] = Handlebars.compile(me[this]);
		});
		me.compiled = true;
		console.timeEnd("compile");
	},

	run: function(data){

		var html = "";

		if(!this.compiled) this.compile();

		if(!data) return "";

		// try{
			html = this.condition(data);
			html = html ? html : this.process(data);
		// }catch(e){
			// return "";
		// }
		html = this.trigger("beforeend", html);

		return html;
	},

	condition: function(data){

		for(var name in this.conditions){

			var c = this.conditions[name], b = true;

			for(var key in c){
				if(data[key] !== c[key]) b = false; 
			}
			if(b === true && checkMethod(name)){
				data.type = "passed";
				return T[name].run(data);
			}
		}
		
		return "";
	},

	conditions: {},

	trigger: function(name, context){
		var event = this.events[name];
		if(event) return event.call(this, context); 
		return context;
	},

	on: function(name, handler){
		this.events[name] = handler;
	}
};

var extend = function(sub, sup){
	var f = new Function();
	f.prototype = sup.prototype;
	sub.prototype = new f();
	sub.prototype.constructor = sub;
};

var mixin = function(target, options, more){
	if(more) mixin(target, more);
	for(var name in options){
		target[name] = options[name];
	}
	return target;
};

var Factory = function(){
	Class.call(this);
};
extend(Factory, Class);


















exports.T = T;
