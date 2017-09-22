

function map(result){
	   
	 require.config({
        paths: {
            echarts: '../../../doc/example/www/js'
        },
        packages: [
            {
                name: 'BMap',
                location: '../src',
                main: 'main'
            }
        ]
    });

    require(
    [
        'echarts',
        'BMap',
        'echarts/chart/map'
    ],
   
    function (echarts, BMapExtension) {
        $('#main').css({
            height:$('body').height(),
            width: $('body').width()
        });

        // 初始化地图
        var BMapExt = new BMapExtension($('#main')[0], BMap, echarts,{
            enableMapClick: false
        });
        var map = BMapExt.getMap();
        var container = BMapExt.getEchartsContainer();


        var startPoint = {
            x: 121.409992,
            y: 31.178243
        };

        var point = new BMap.Point(startPoint.x, startPoint.y);
        map.centerAndZoom(point, 17);
        map.enableScrollWheelZoom(true);
        // 地图自定义样式
        map.setMapStyle({
           'styleJson': [
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
        
    

      
      var a=result;


        option = {
        	
          color: ['red','aqua','lime'],
         
            tooltip : {
                trigger: 'item',
                formatter: function (v) {
                    return v[1].replace(':', ' > ');
                }
            },
    
            series : [
                {
                    name:'总部大楼',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    geoCoord:a,

                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: 'red',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'总部大楼'}, {name:'新研大楼',value:95}],
                            [{name:'总部大楼'}, {name:'虹钦园',value:94}],
                            [{name:'总部大楼'}, {name:'虹漕园',value:23}],
                            [{name:'总部大楼'}, {name:'新漕河泾国际商务中心',value:56}],
                            [{name:'总部大楼'}, {name:'科技绿洲一二期',value:56}],
                            [{name:'总部大楼'}, {name:'科技绿洲三期园区',value:77}],
                            [{name:'总部大楼'}, {name:'新园科技广场',value:77}],
                            [{name:'总部大楼'}, {name:'现代服务业园区',value:88}],
                            [{name:'总部大楼'}, {name:'现代服务业园区二期三期',value:88}],
                            [{name:'总部大楼'}, {name:'新银大厦',value:88}],
                            [{name:'总部大楼'}, {name:'科产楼',value:88}],
                            [{name:'总部大楼'}, {name:'新思大楼',value:28}],
                            [{name:'总部大楼'}, {name:'创新大楼',value:18}],
                            [{name:'总部大楼'}, {name:'虹梅大楼',value:98}],
                            [{name:'总部大楼'}, {name:'光启园',value:98}],
                            [{name:'总部大楼'}, {name:'新汇园',value:120}],
                            [{name:'总部大楼'}, {name:'钦汇园',value:130}],
                            [{name:'总部大楼'}, {name:'凤凰园',value:75}],
                            [{name:'总部大楼'}, {name:'宝石园',value:68}],
                            [{name:'总部大楼'}, {name:'新业园',value:8}],
                            [{name:'总部大楼'}, {name:'钦江园',value:33}],
                            [{name:'总部大楼'}, {name:'桂箐园',value:65}],
                            [{name:'总部大楼'}, {name:'田林园',value:65}],
                            [{name:'总部大楼'}, {name:'桂果园',value:65}],
                            [{name:'总部大楼'}, {name:'桂中园',value:65}],
                            [{name:'总部大楼'}, {name:'桂平园',value:65}],
                            [{name:'总部大楼'}, {name:'创业园',value:65}],
                            [{name:'总部大楼'}, {name:'智慧园',value:65}],
                            [{name:'总部大楼'}, {name:'新园华美达酒店',value:65}],
                            [{name:'总部大楼'}, {name:'能通加油站',value:65}],
                                
                            
                            
                           
                            
                            
                           
                           
                            
                          
                        ]
                    },
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 8
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0,
                            color:'red'
                           
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            }
                        },
                        data : [
                        
                            {name:'新研大楼',value:95},
                            {name:'虹钦园',value:94},
                            {name:'虹漕园',value:23},
                            {name:'新漕河泾国际商务中心',value:56},
                            {name:'科技绿洲一二期',value:56},
                            {name:'科技绿洲三期园区',value:77},
                            {name:'新园科技广场',value:77},
                            {name:'现代服务业园区',value:88},
                            {name:'现代服务业园区二期三期',value:88},
                            {name:'新银大厦',value:88},
                            {name:'科产楼',value:88},
                            {name:'新思大楼',value:28},
                            {name:'创新大楼',value:18},
                            {name:'创新大楼',value:98},
                            {name:'光启园',value:98},
                            {name:'新汇园',value:120},
                            {name:'钦汇园',value:130},
                            {name:'凤凰园',value:75},
                            {name:'宝石园',value:75},
                            {name:'新业园',value:8},
                            {name:'钦江园',value:33},
                            {name:'桂箐园',value:65},
                            {name:'田林园',value:65},
                            {name:'桂果园',value:65},
                            {name:'桂中园',value:65},
                            {name:'桂平园',value:65},
                            {name:'创业园',value:65},
                            {name:'智慧园',value:65},
                            {name:'新园华美达酒店',value:65},
                            {name:'能通加油站',value:65},
                            
                          
                        ]
                    }

                }
               
          
            ]
        };

        var myChart = BMapExt.initECharts(container);
        window.onresize = myChart.onresize;
        BMapExt.setOption(option);
    }
);
}
