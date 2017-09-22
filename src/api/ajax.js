const ip='http://192.168.1.101/Info/';

/**
 * 公共方法封装(跨域)
 * @param {请求地址} url 
 * @param {参数} data 
 */
var ajax=function(url,reqParams){
  return new Promise(function(resolve,reject){
     $.ajax({
        type: "get",
        contentType:"application/json; charset=utf-8",
        async: false,
        dataType:"jsonp",
        jsonp: 'callback',
        url:ip+url,
        data:{data:JSON.stringify(reqParams)},
        success: function (data) {
         resolve(data);
        },
        error:function(err){
            reject.call(err);
        }
       });     
    })
    
   }
   export default{
       ajax
   }