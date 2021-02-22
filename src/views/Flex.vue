<template>
  <div class="flex">
    <div class="box">
      <div
        v-for="(item) in list"
        :key="item.key"
        class="item"
      >
        <div class="image" />
        <div class="textarea">
          <div>{{ item.title }}</div>
          <div>{{ item.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      list: [
        {
          id: 0,
          image: '123',
          text: '123123',
          title: '345'
        },
        {
          id: 1,
          image: '123',
          text: '123123',
          title: '345'
        },
        {
          id: 2,
          image: '123',
          text: '123123',
          title: '345'
        },
        {
          id: 3,
          image: '123',
          text: '12312312312312312312312313241234123123123',
          title: '345'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created () {

  },
  mounted () {

  },
  beforeCreate () {},
  beforeMount () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  activated () {},
  methods: {

  }
}
</script>
<style lang='scss' scoped>
.box {
  width: calc(100%-20px);
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  background: pink;

  justify-content: center;

  .item {
    width: calc(50%-15px);
    background: orange;
  }
}
</style>
