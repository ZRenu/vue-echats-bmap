<template>
<div>
<div id="tranmap"></div>
</div>
</template>
<script>
  export default{
    data(){
      return{
        startPoint:{
            x: 121.409992,
            y: 31.178243
        },
        zoom:15,
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
	var map = new BMap.Map("tranmap");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(this.startPoint.x,this.startPoint.y), this.zoom);  // 初始化地图,设置中心点坐标和地图级别
	map.setCurrentCity("上海");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  map.setMapStyle(this.styleJson)  //地图样式
  var ctrl = new BMapLib.TrafficControl({
        showPanel: true //是否显示路况提示面板
    });
   map.addControl(ctrl);
  ctrl.setAnchor(BMAP_ANCHOR_TOP_LEFT);//位置
  ctrl.showTraffic();//默认开启路况
    }
  }
</script>
<style scoped>

#tranmap{
    width:100%;
    height:90%;
    position:absolute;
    z-index:100;
}
</style>