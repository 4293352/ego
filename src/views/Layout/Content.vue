<template>
  <div>
    <h2 class="header">
      <i v-if="!isCollapse" @click="changeMenu" class="iconfont icon-right-indent"></i>
      <i v-else @click="changeMenu" class="iconfont icon-left-indent"></i>
      右侧顶部区域</h2>

    <div class="conrent">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
export default {
  props:['isCollapse'],
  methods:{
    changeMenu(){
      this.$emit('changeCollapse')
    }
  }
}
</script>

<style lang='less' scoped>
  .header {
    height: 50px;
    line-height: 50px;
    color: #fff;
    background: #1e78bf;
    .iconfont {
      font-size: 24px;
    }
  }
  .header-right {
    float: right;
    padding-right: 20px;
    display: flex;
    .user {
      margin-left: 20px;
      span {
        position: relative;
        top: -4px;
        margin-right: 10px;
      }
    }
  }
  </style>