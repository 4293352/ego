<template>
  <div class="layout">
    <Mymenu class="menu" :isCollapse='isCollapse'/>
    <Content class="content" :class="{isActive:isCollapse}" @changeCollapse='changeCollapse' :isCollapse='isCollapse'/>
  </div>
</template>

<script>
import Mymenu from './Mymenu.vue';
import Content from './Content.vue';

export default {
    components: { Mymenu, Content },
    data(){
      return {
        isCollapse:false,
      }
    },
    methods:{
      changeCollapse() {
        this.isCollapse = !this.isCollapse;
      }
    }
};
</script>

<style lang='less' scoped>
  .layout{
      .menu{
          //width: 200px;
          //min-height: 500px;
          background: #112f50;
          position: fixed;
          top:0;
          bottom:0;
      }
      .content{
          margin-left: 200px;
          transition: all 0.3s;
      }
      .isActive{
          margin-left: 64px;
      }
  }
  </style>