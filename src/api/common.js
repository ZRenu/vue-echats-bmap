/**MY BASIC FUNCTION BY ZRY */

// 获取元素
var getElem=function(selector){
    return document.querySelector(selector)
}
var getAllElem=function(selector){
    return document.querySelectorAll(selector)
}
// 获取元素样式
var getCls=function(element){
    return element.getAttribute('class');
}
// 设置元素样式
var setCls=function(element,cls){
    return element.setAttribute('class',cls)
}
// 为元素添加样式
var addCls=function(element,cls){
    var baseCls=getCls(element);
    if(baseCls.indexOf(cls)===-1){
        setCls(element,baseCls+' '+cls)
    }
}
// 为元素删除样式
var delCls=function(element,cls){
    var baseCls=getCls(element);
    if(baseCls.indexOf(cls)!=-1){
    setCls( element,baseCls.split(cls).join(' ').replace(/\s+/g,' ') );
    }
}
//为元素替换样式(动画特定)
var replaceCls=function(elements,cls,newcls){
    var baseCls=getCls(elements);
    if(baseCls.indexOf(cls)!=-1){
  setCls(elements,baseCls.replace(cls,newcls))
    }
}
// 根据ID获取元素
var getById=function(id){
    return typeof(id)==="string"?document.getElementById(id):id;
}
// 自定义元素标识
var setSign=function(element,sign,value){
    return element.setAttribute(sign,value)
}
var setAllSign=function(element,i,sign,value){
    return element[i].setAttribute(sign,value)
}
// 获取自定义标识
var getSign=function(element,sign){
    return element.getAttribute(sign);
}
var getAllSign=function(element,i,sign){
    return element[i].getAttribute(sign)
}
//设置容器的高度和宽度
var setContentSize=function(id){
    getById(id).style.width=window.innerWidth+'px';
    getById(id).style.height=(window.innerHeight-((window.innerHeight)*0.1))+'px';
}
//获取容器的高度和宽度
var getContentSize=function(){
   var sizeNum=[];
   sizeNum.push(window.innerWidth);
   sizeNum.push(window.innerHeight);
   return sizeNum;
}

export default{
    getElem,
    getAllElem,
    getCls,
    setCls,
    addCls,
    delCls,
    replaceCls,
    getById,
    setSign,
    setAllSign,
    getSign,
    getAllSign,
    setContentSize,
    getContentSize

}