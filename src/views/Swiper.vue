<template>
  <div class="Swiper">
    <div
      :style="{left: left+'vw'}"
      @click="swiper"
    >
      <img
        src="../assets/70624207_p0.jpg"
        alt=""
      >
      <img
        src="../assets/73165062_p0.jpg"
        alt=""
      >
      <img
        src="../assets/74503110_p0.jpg"
        alt=""
      >
      <img
        src="../assets/70624207_p0.jpg"
        alt=""
      >
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      left: 0
    }
  },
  computed: {},
  watch: {},
  created () {

  },
  mounted () {
    // setInterval(() => {
    //   if (this.left >= -300) {
    //     this.left -= 1
    //   } else {
    //     this.left = 0
    //   }
    // }, 1)
  },
  beforeCreate () {},
  beforeMount () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  activated () {},
  methods: {
    swiper () {
      console.log(this.left)
      if (this.left >= -100) {
        this.left -= 100
      } else {
        this.left = 0
      }
      // this.left >= -100 ? this.left -= 100 : this.left = 0
    }
  }
}
</script>
<style lang='scss' scoped>
.Swiper {
  width: 100vh;

  div {
    display: flex;
    flex-wrap: nowrap;

    position: relative;
    img {
      width: 100vw;
      opacity: 1;
    }

    img.active {
      opacity: 0;
    }
  }
}
</style>
