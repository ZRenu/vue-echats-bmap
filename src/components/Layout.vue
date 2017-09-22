<template>
<div>
<div id="map" :style="style"></div>
<div class="chats">
<div class="btns">
  <div class="tab">
 <div class="tab-item" v-for="item in products">
<a>
<router-link :to="{path:item.path}" active-class="active">{{item.name}}</router-link>
</a>
 </div>
</div>
</div>
<keep-alive>
<router-view style="background:none!important"></router-view>
</keep-alive>
</div>
</div>
</template>
<script>
  export default{
    data(){
      return{
          products: [
        {
          name: '实时交通',
          path: 'tranmap',
          active: false
         
        },   
         {
          name: '能源热点',
          path: 'hostmap',
          active: false
        
        },
        {
          name: '空气质量',
          path: 'aqi',
          active: false
        
        },
        {
          name: '园区能耗',
          path: 'energy',
          active: false
         
        },
         {
          name: '项目分部',
          path: 'map',
          active: false
         
        }

        ],
        style:{
          width:'100%',
          height:'100%',
          position:'absolute',
          
        },
        startPoint:{
            x: 121.409992,
            y: 31.178243
        },
        zoom:16,
        styleJson:{
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
       }
      }
    },
  mounted(){
   // 百度地图API功能
	var map = new BMap.Map("map");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(this.startPoint.x,this.startPoint.y), this.zoom);  // 初始化地图,设置中心点坐标和地图级别
	map.setCurrentCity("上海");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    map.setMapStyle(this.styleJson)  //地图样式
    }
  }
</script>
<style scoped>
.chats{
    position:fixed;
    z-index:99;
    top:0;
    left:0;
    width:100%;
    height:100%;
    overflow:auto;
    background:rgba(7,17,27,0.5);
  
 }
 .map{
   position:fixed;
    z-index:100;
    top:0;
    left:0;
    width:100%;
    height:100%;
    overflow:auto;
   background:rgba(255,255,255,0.8);
    color:white
 }
 .btns{
   height:10%;
 background:rgba(255,255,255,0.1);
 }

.tab{
  display:flex;
  width:100%;
  line-height:40px; 
  padding-top:20px;
}
.tab-item{
  flex:1;
  text-align:center;
}
.tab-item a{
  display:block;
  font-size:16px;
  color:white;
  text-decoration: none;
}
.active{
  background: #4fc08d;
  color: #fff;
}
</style>