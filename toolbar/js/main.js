requirejs.config({
    paths:{
        jquery:'jquery-1.8.3.min'
    }
});
// function($,validate)是回调函数
requirejs(['jquery','validate'],function($,validate){
    console.log(validate.isEqual(1,2));
});