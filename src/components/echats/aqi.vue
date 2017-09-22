<template>
<div>
<div id="aqi"></div>
</div>
</template>
<script>
import infor from '../../api/ajax'
import common from '../../api/common'
export default {
    mounted (){
 var worldMapContainer =common.getById(aqi);
//ecahts高度
  worldMapContainer.style.width=window.innerWidth+'px';
  worldMapContainer.style.height=((window.innerHeight)*0.9)+'px';
  var myChart = echarts.init(worldMapContainer);
  var lineStyle = {
    normal: {
        width: 1.5,
        opacity: 0.5
    }
};
  var option = {
    tooltip: {},
    legend: {
        data: ['漕河泾'],
        bottom:5,
        textStyle:{
            color:'#fff',
            fontSize:18
        },
    },
    radar: {
        shape: 'circle',
        indicator: [
           { name: 'AQI', max: 50},
           { name: 'PM2.5', max: 60},
           { name: 'PM10', max: 70},
           { name: 'CO', max: 1},
           { name: 'NO2', max: 50},
           { name: 'SO2', max: 30}
        ],
        splitNumber: 5,
        name: {
            textStyle: {
                color:'#fff'
            }
        },
        splitLine: {
            lineStyle: {
                color: [
                    'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                    'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                    'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                ].reverse()
            }
        },
      splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(238, 197, 102, 0.5)'
            }
        }
    },
    series: [{
        name: '漕河涇',
        type: 'radar',
        lineStyle:lineStyle,
        areaStyle: {
                normal: {
                    opacity: 0.1
                }
            },
        data : [
            {
                value : [23, 34, 44, 0.6, 34, 23],
                name : '漕河泾',
                lineStyle: lineStyle,
                symbol: 'none',
                itemStyle: {
                normal: {
                    color:'#fff'
                }
            },
            }
        ]
    }]
};
  myChart.setOption(option);
//窗口或框架被调整大小时发生。
window.onresize = function () {
    //重置容器高宽
    myChart.resize();
};    
    
    }
   
}
</script>
<style scoped>


</style>