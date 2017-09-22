<template>
<div>
<!--echats -->
<div id="energy"></div>
<!--deta-->
<div class="deta-energy" v-show="detaileg">
<div class="deta-energy-wrapper">
<div class="deta-energy-main">
<egmain></egmain>
</div>
</div>
<!--deta close -->
<div class="deta-energy-close">
<a @click="detaEnergyClose">关闭</a>
</div>
</div>

</div>
</template>
<script>
import infor from '../../api/ajax'
import common from '../../api/common'
import egmain from './eyMain'
export default {
    components: {
    egmain
    },
    created(){
   
    },
    data () {
        return{
        name:'',
        detaileg:false
        }
    },
    methods:{
detaEnergyClose(){
 this.detaileg=false;
     },
createdPie() {
var vueThis=this;
var Container = common.getById(energy);
common.setContentSize(Container)
var myChart = echarts.init(Container);
window.onresize=myChart.resize;
var xData =[
'创新大楼',
'国际商务中心',
'科技绿州四期',
'科技绿州一二期',
'总部大楼',
'宝石园',
'创业园',
'凤凰园',
'光启园',
'桂果园',
'桂箐园',
'桂中园',
'虹漕园',
'虹钦园',
'华美达酒店',
'科技产业大楼',
'能通加油站',
'能源站',
'钦江园',
'田林园',
'现代服务业园区二期一',
'现代服务业园区二期三',
'新汇园',
'新思大楼',
'新业园',
'新银大楼',
'新园科技广场',
'研发二期',
'智汇园',
'桂平园'

];
var option = {
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    "grid": {
        "borderWidth": 0,
        "top": 110,
        "bottom": 95,
        textStyle: {
            color: "#fff"
        }
    },
    "legend": {
        x: '60%',
        top: '11%',
        textStyle: {
            color: '#90979c',
        },
         "data": ['实际功率', '额定功率']
    },
     

    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "data": xData,
    }],
    "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "splitArea": {
            "show": false
        },

    }],
    "dataZoom": [{
        "show": true,
        "height": 30,
        "xAxisIndex": [
            0
        ],
        bottom: 5,
        "start":0,
        "end": 15,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle:{
            color:"#d3dee5",
            
        },
           textStyle:{
            color:"#fff"},
           borderColor:"#90979c"
        
        
    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 35
    }],
    "series": [
        {
            "name": "实际功率",
            "type": "bar",
            "barMaxWidth":70,
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "#03FED2",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                37,
                76,
                50,
                30,
                80,
                42,
                24,
                10,
                101,
                91,
                38,
                20,
                37,
                50,
                57,
                120,
                80,
                42,
                24,
                10,
                101,
                91,
                31,
                20,
                24,
                10,
                101,
                91,
                31,
                20
                
            ]
        }, {
            "name": "额定功率",
            "type": "scatter",
            symbolSize:15,
            symbol:'circle',
            "itemStyle": {
                "normal": {
                    "color": "rgba(252,230,48,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                100,
                193,
                162,
                181,
                125,
                119,
                117,
                126,
                162,
                143,
                128,
                142,
                110,
                136,
                129,
                138,
                125,
                119,
                117,
                146,
                162,
                143,
                128,
                142,
                117,
                146,
                162,
                143,
                128,
                142
            ]
        },
    ]
}
myChart.setOption(option);
  //窗口或框架被调整大小时发生。
window.onresize = function () {
    //重置容器高宽
   common.setContentSize(Container);
    myChart.resize();
};  

myChart.on('click',function(params){
  
vueThis.detaileg=true;
  
});


}

 },
 mounted(){
  this.createdPie();
 }

}
</script>
<style scoped>
.deta-energy{position:fixed;z-index:3;width:100%;height:100%;overflow:auto;
background:rgba(7,17,27,.9);top:0;}
.deta-energy-wrapper::after{display:block;content:".";clear:both;height:0;
line-height:0;visibility:hidden;}
.deta-energy-wrapper{min-height:100%;}
.deta-energy-main{color:#fff;padding:5%;}
.deta-energy-close{position:relative;height:32px;margin:-64px 60px;float:right;
clear:both;font-size:24px;letter-spacing:8px;cursor:pointer;}
.deta-energy-close a{color:#f01400;}


</style>