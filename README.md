## API 设计

```javascript

var T = new Website();

T.index = mixin(new Template, {
  
  wrapper: wrap(".index"),
  
  block: "my name is {{name}}",
  
  complielist: ['block'],
  
  process: function(data){
    
    return this.wrapper(this.block(data));
  }

});


T.run(webdata);


```
