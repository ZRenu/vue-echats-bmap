<template>
<div>
 <div id="allmap"></div>
   <div class="mapDiv">
    <a>已完成节能改造项目：<span>4</span> 个</a>
    <a>已完成节能改造面积：<span>230</span> 万平方米</a>
    <a>申报项目节能量合计：<span>10</span> 吨标准煤</a>
    <a>申报项目平均节能率：<span>5</span>%</a>
    </div>
    <div class="mapDiv1">
    <a style="font-weight:bolder;margin-bottom:5px">图例说明</a>
    <a style="line-height:24px;color:#E74C3C;font-weight:bolder;" class="img1"><span style="color:#fff;font-weight:bolder;margin-left:50px">改造开始</span></a>
    <a style="line-height:24px;color:#89E73C;font-weight:bolder;" class="img2"><span style="color:#fff;font-weight:bolder;margin-left:50px">改造完成</span></a>
    <a style="line-height:24px;color:#E7E33C;font-weight:bolder;" class="img3"><span style="color:#fff;font-weight:bolder;margin-left:50px">投入使用</span></a>
    <a style="line-height:24px;color:#3CDCE7;font-weight:bolder;" class="img4"><span style="color:#fff;font-weight:bolder;margin-left:50px">完成验收</span></a>
    </div>
</div>
</template>
<script>
import common from '../../api/common'
export default{
data(){
return{
    icon1:require('../../assets/1.png'),
    icon2:require('../../assets/2.png'),
    icon3:require('../../assets/3.png'),
    icon4:require('../../assets/4.png'),
    icon5:require('../../assets/5.jpg')
}
},
mounted(){
    var Thisvue=this;
   // 百度地图API功能
 var bmap=common.getById(allmap);
 bmap.style.height=((window.innerHeight)*0.9)+'px'; 
 var map = new BMap.Map("allmap");    // 创建Map实例
 map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
 map.centerAndZoom(new BMap.Point(121.409992,31.178243),15);  // 初始化地图,设置中心点坐标和地图级别
 map.setMapStyle({
  styleJson: [
                {
                  'featureType': 'water',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#031628'
                  }
                },
                {
                  'featureType': 'land',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#000102'
                  }
                },
                {
                  'featureType': 'highway',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                },
                {
                  'featureType': 'arterial',
                  'elementType': 'geometry.fill',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'arterial',
                  'elementType': 'geometry.stroke',
                  'stylers': {
                    'color': '#0b3d51'
                  }
                },
                {
                  'featureType': 'local',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'railway',
                  'elementType': 'geometry.fill',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'railway',
                  'elementType': 'geometry.stroke',
                  'stylers': {
                    'color': '#08304b'
                  }
                },
                {
                  'featureType': 'subway',
                  'elementType': 'geometry',
                  'stylers': {
                    'lightness': -70
                  }
                },
                {
                  'featureType': 'building',
                  'elementType': 'geometry.fill',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'all',
                  'elementType': 'labels.text.fill',
                  'stylers': {
                    'color': '#857f7f'
                  }
                },
                {
                  'featureType': 'all',
                  'elementType': 'labels.text.stroke',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'building',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#022338'
                  }
                },
                {
                  'featureType': 'green',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#062032'
                  }
                },
                {
                  'featureType': 'boundary',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#465b6c'
                  }
                },
                {
                  'featureType': 'manmade',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#022338'
                  }
                },
                {
                  'featureType': 'label',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": {
                              "color": "#022338",
                              "visibility": "off"
                    }
          }

              ]
});

   var points =[
       {'lng':121.388495,'lat':31.171609,'type':1},
       {'lng':121.459785,'lat':31.173834,'type':2},
       {'lng':121.423853,'lat':31.167036,'type':3},
       {'lng':121.426584,'lat':31.18335,'type':4},
       {'lng':121.409192,'lat':31.173339,'type':1},
       {'lng':121.436788,'lat':31.167901,'type':4},
       {'lng':121.404737,'lat':31.161969,'type':4},
       {'lng':121.389358,'lat':31.182855,'type':2}
   ];
   addMarker(points);
   function addMarker(points) {
        //循环建立标注点
        for(var i=0, pointsLen = points.length; i<pointsLen; i++) {
            var point = new BMap.Point(points[i].lng, points[i].lat); //将标注点转化成地图上的点
            var myIcon="";
            if(points[i].type==1){
             myIcon = new BMap.Icon(Thisvue.icon1, new BMap.Size(40,45));
            }
            if(points[i].type==2){
                myIcon=new BMap.Icon(Thisvue.icon2, new BMap.Size(40,45));
            }
            if(points[i].type==3){
                myIcon=new BMap.Icon(Thisvue.icon3, new BMap.Size(40,45));
            }
            if(points[i].type==4){
                myIcon=new BMap.Icon(Thisvue.icon4, new BMap.Size(40,45));
            }
            var marker = new BMap.Marker(point,{icon:myIcon}); //将点转化成标注点
            map.addOverlay(marker);  //将标注点添加到地图上
            //添加监听事件
            (function() {
                var thePoint = points[i];
                marker.addEventListener("onmouseover",
                    function() {
                    showInfo(this,thePoint);
                });
             })();  
        }
    };
    function showInfo(thisMarker,point) {
        //获取点的信息
   var sContent='<div style="width:691px;height:400px;font-size:12px;">'
            +'<div  style="width:691px;height:266px;display:flex;">'
            +'<div style="width:500px;height:266px;display:flex;">'
            +'<div style="height:400px;width:158px;padding-top:7px">'
            +'<h5 style="font-weight:bolder;color:#006400;margin-bottom:18px;font-size:17px;">工程基本信息</h5>'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#1f871f">工程名称</a>'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#1f871f">建筑名称</a>'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#1f871f">工程地址</a>'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#1f871f">建筑结构体系</a>'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#1f871f">开工日期</a>'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#1f871f">总投资</a>'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#1f871f">改造后年节能/吨标煤</a>'
            +'</div>'
            +'<div style="height:400px;width:158px;padding-top:42px">'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#777777">'+'能源改造'+'</a>'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#777777">'+'创新大楼'+'</a>'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#777777">'+'宜山路1008号'+'</a>'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#777777">'+'商业'+'</a>'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#777777">'+'2017-8-22'+'</a>'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#777777">'+'155'+'</a>'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#777777">'+'60'+'</a>'
            +'</div>'
            +'<div style="height:400px;width:158px;padding-top:42px">'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#1f871f">建筑功能</a>'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#1f871f">建筑总面积(㎡)</a>'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#1f871f">占地面积(㎡)</a>'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#1f871f">竣工日期</a>'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#1f871f">投入使用日期</a>'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#1f871f">是否采用合同能源</a>'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#1f871f">改造节能率%</a>'
            +'</div>'
            +'<div style="height:400px;width:158px;padding-top:42px">'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#777777">'+'商业'+'</a>'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#777777">'+'244'+'</a>'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#777777">'+'244'+'</a>'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#777777">'+'2017-9-22'+'</a>'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#777777">'+'2017-9-22'+'</a>'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#777777">'+'是'+'</a>'
            +'<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#777777">'+'10%'+'</a>'
            +'</div>'
            +'</div>'

            +'<div style="width:230px;height:224px;margin-top:42px;">'
            +'<img src="'+Thisvue.icon5 +'" style="width:100%;height:100%">'
            +'</div>'

            +'</div>'

            +'</div>'
        
            var infoWindow = new BMap.InfoWindow(sContent); //创建信息窗口对象
            thisMarker.openInfoWindow(infoWindow); //图片加载完后重绘infoWindow
  
    }
    
}
}
</script>
<style scoped>
#allmap {width: 100%;overflow: hidden;margin:0;font-family:"微软雅黑";}
.mapDiv{width:340px;height:200px;position:absolute;top:100px;display: flex;justify-content: center;align-items:flex-start;flex-direction:column;
padding-left:40px;background: rgba(0, 0, 0, .4);box-shadow: 4px 5px 10px rgba(159, 158, 156, .6)}
.mapDiv a{height:36px;line-height: 36px;font-size: 18px;color:#fff;font-weight:bolder;}
.mapDiv a span{color:#fffc11;font-size: 24px;}
.mapDiv1{width:200px;height:200px;position:absolute;display: flex;justify-content: center;align-items:flex-start;flex-direction:column;
padding-left:40px;bottom: 50px;right:50px;background: rgba(0, 0, 0, .5);box-shadow: 4px 5px 10px rgba(159, 158, 156, .6)}
.mapDiv1 a{height:36px;line-height: 36px;font-size: 18px;color:#fff}
.img1{background:url(../../assets/1.png) no-repeat;background-size:32px 30px}
.img2{background:url(../../assets/2.png) no-repeat;background-size:32px 30px}
.img3{background:url(../../assets/3.png) no-repeat;background-size:32px 30px}
.img4{background:url(../../assets/4.png) no-repeat;background-size:32px 30px}
</style>
