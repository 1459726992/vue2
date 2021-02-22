<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
    }
  },
  created () {
    console.log(new Date('2020-04-07 18:08:58').getTime())
    console.log(new Date().getTime())
  },
  methods: {
  }
}
</script>

<style lang="scss">
</style>
