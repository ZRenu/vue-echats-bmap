<template>
<div class="energy-energyMain">
<header>
<nav>
<a href="javascript:void(0)" :class="collectionActive" @click="collectionClick">园区楼宇用电汇总</a>
<a href="javascript:void(0)" :class="realActive" @click="realClick">园区楼宇实时用电</a>

</nav>
</header>
<section class="main-energyMain" id="main-energyMain">
<transition>
 <div id="powerCollection" v-show="powerCollection">
<eyPowerCollection></eyPowerCollection>
 </div>
</transition>
<transition>
 <div id="powerReal" v-show="powerReal">
<eyPowerReal></eyPowerReal>
 </div>
</transition>
</section>
</div>
</template>
<script>
import common from '../../api/common'
import eyPowerReal from './eyPowerReal'
import eyPowerCollection from './eyPowerCollection'
export default{
 components:{
eyPowerReal,eyPowerCollection
 },
  data () {
     return {
       powerCollection:true,
       powerReal:false,
       collectionActive:{
        'active-energyMain':true
      },
      realActive:{
       'active-energyMain':false
      }

     }
  },
 methods:{
  collectionClick(){
    this.powerCollection=true;
    this.powerReal=false;
    this.collectionActive['active-energyMain']=true;
    this.realActive['active-energyMain']=false;
  },
  realClick(){
  this.powerCollection=false;
  this.powerReal=true;
  this.collectionActive['active-energyMain']=false;
  this.realActive['active-energyMain']=true;
  }
 }
}
</script>
<style scoped>
.energy-energyMain{
 height:100%;
}
header{
    height:80px;
    display:flex;
    justify-content:center;
}
header nav a{
  color:#fff;
  font-size:20px;
  letter-spacing:2px;
  display:block;
  float:left;
  height:40px;
  margin-left:80px;
  position:relative;
}


header nav a:hover{
color:#f01400;
}
.active-energyMain{
color:#f01400;
}
.active-energyMain::after{
 content:'';
 display:block;
 width:100%;
 height:2px;
 position:absolute;
 background-color:#f01400;
 left:0;
 bottom:0;
}



</style>