<template>
  <div class="my-header" :style="{backgroundColor,color}">{{title}}</div>
</template>

<script>
// 目标：让Header组件支持不同的项目 - 自定义
// 1.分析哪些可以自定义的属性（背景色，文字颜色，文字内容）
// 2.props:{}可以对props的变量的值进行声明和校验
// 3.内部使用props的值
// 4.外部使用时，遵守变量名作为属性名，遵守值的类型
export default {
  props:{
    backgroundColor:String, // 外部插入此变量的值，必须是字符串类型，否则报错
    color:{
      type:String, // 约束color值的类型
      default:"#fff" // color变量默认值（外部没赋值的时候使用默认值）
    },
    title:{
      type:String, 
      required: true // 必须传入此变量的值
    }
  }
}
</script>

<style lang="less" scoped>
.my-header {
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #1d7bff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>
