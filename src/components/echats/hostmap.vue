<template>
<div>
<div id="hostmap" :style="style"></div>
</div>
</template>
<script> 
export default{
    data(){
      return{
        style:{
          width:'100%',
          height:'100%',
          position:'absolute',   
        }
       }
     
    },
  mounted(){
// 全局钩子
 var vueThis=this;
 var hostmap=document.getElementById('hostmap');
 hostmap.style.width=window.innerWidth+'px';
 hostmap.style.height=((window.innerHeight)*0.9)+'px';
var myChart = echarts.init(hostmap);
var geoCoordMap ={
 '新研大楼':[121.411147,31.178764],
 '总部大楼':[121.409992,31.178243],
 '虹钦园':[121.413475,31.184491],
 '虹漕园':[121.414904,31.182674],
 '国际商务中心':[121.410404,31.16982],
 '科技绿洲一二期':[121.397616,31.170258],
 '科技绿洲三期':[121.392763,31.170833],
 '新园科技广场':[	121.411539,31.170511],
 '现代服务业园区':[121.404426,31.170689],	
 '现代服务业园区二期三期':[121.405324,31.172052],
 '新银大厦':[121.409445,31.177932],
 '科产楼':[121.408121,31.17802],
 '新思大楼':[121.404895,31.177335],
 '创新大楼':[121.407503,31.176499],
 '光启园':[121.415518,31.185707],
 '新汇园':[121.409942,31.184367],	
 '凤凰园':[121.402823,31.16888],
 '宝石园':[121.401039,31.170811],
 '新业园':[121.404866,31.174181],	
 '钦江园':[121.406347,31.180214],
 '桂箐园':[121.411445,31.180385],
 '田林园':[121.410629,31.173165],
 '桂果园':[121.41026,31.172969],	
 '桂中园':[121.409064,31.174439],
 '桂平园':[121.409271,31.176429],	
 '创业园':[121.409315,31.179581],
 '智汇园':[121.406648,31.182804],
 '华美达酒店':[121.412265,31.169405],
 '能通加油站':[121.408324,31.171377],

};
var Data =[
    [{name:'创新大楼'},{name:'新研大楼',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'总部大楼',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'虹钦园',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'虹漕园',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'国际商务中心',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'科技绿洲一二期',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'科技绿洲三期',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'新园科技广场',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'现代服务业园区',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'现代服务业园区二期三期',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'新银大厦',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'科产楼',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'新思大楼',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'光启园',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'新汇园',value:35,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'凤凰园',value:94,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'宝石园',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'新业园',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'钦江园',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'桂箐园',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'田林园',value:63,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'桂果园',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'桂中园',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'桂平园',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'创业园',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'智汇园',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'华美达酒店',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'能通加油站',value:94,color:'#03FED2'}],

   



]
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[1].name];
        var toCoord = geoCoordMap[dataItem[0].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};

var series = [];
[['创新大楼', Data]].forEach(function (item,i) {
    var color='';
    item[1].map(function (dataItem) {
      // console.log(dataItem[1].color);
    })
    series.push({
            name: item[0],
            type: 'lines',
            coordinateSystem: 'bmap',
            zlevel: 1,
            // 动线样式
            effect: {
                show: true,
                period:7,
                trailLength:0.8,
                color:'#03FED2',
                symbolSize:2,
            },
            // 实线样式
            lineStyle: {
                normal: {
                    color:'#03FED2',
                    width: 0,
                    curveness:0.2
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'lines',
            coordinateSystem: 'bmap',
            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
            
            },
            lineStyle: {
                normal: {
                    color:'#03FED2',
                    width:1,
                    opacity: 0.4,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        },
        {
            name:'详细信息',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function (val) {
                return val[2] / 5;
            },
             data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                     itemStyle: {
                normal:{
                color:dataItem[1].color
                }
            },
                };
            })
        });
});

var option = {
    tooltip : {
        trigger: 'item'
    },
    bmap: {
      
        roam: true,
        silent:true,
        mapStyle:{
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
                              "color": "#03FED2",
                              "visibility": "off"
                    }
          }

              ]
        }
    },
    series: series
};
 
myChart.setOption(option);
var map = myChart.getModel().getComponent('bmap').getBMap();
    map.disableDoubleClickZoom();
    map.centerAndZoom(new BMap.Point(121.39908,31.177505), 17);  // 初始化地图
window.onresize = myChart.resize;//图表自适应


  }
  
  }
</script>
<style scoped>


</style>
