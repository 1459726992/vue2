<template>
  <div class="box">
    <img
      v-for="item in list"
      :key="item"
      :src="require('./img/' + item)"
      @click="demo1"
    >
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      list: ['69845158_p0.jpg', '70624207_p0.jpg', '73165062_p0.jpg', '74503110_p0.jpg']
    }
  },
  created () {

  },
  methods: {
    demo1: _.debounce(() => {
      console.log(1)
    }, 3000)
  }
}
</script>

<style lang="scss">
.box {
  height: 100vh;
  overflow: auto;
  scroll-behavior: auto;
  scroll-snap-type: x mandatory;
  display: flex;
  flex-wrap: nowrap;
  img {
    width: 100vw;
    scroll-snap-align: center;
    // clip-path: polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%);
  }
}
</style>
