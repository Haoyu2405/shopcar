<template>
  <div>
    <MyHeader backgroundColor="red" title="购物车案例"></MyHeader>
    <div class="main">
      <MyGoods></MyGoods>
    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyGoods from './components/MyGoods.vue'
import MyFooter from './components/MyFooter.vue'
export default {
  data() {
    return {}
  },
  methods: {},
  components: {
    MyHeader,
    MyGoods,
    MyFooter,
  },
}
</script>
<style scoped>
.main {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
