<template>
  <div class="hello">
    <div
      id="first"
      class="box1"
      @drop="drop"
      @dragover="allowDrop"
    >
      <div
        v-for="item in list1"
        :id="item.id"
        :key="item.id"
        draggable="true"
        @dragstart="drag"
      >
        {{ item.value }}
      </div>
    </div>
    <div
      id="second"
      class="box2"
      @drop="drop"
      @dragover="allowDrop"
    >
      <div
        v-for="item in list2"
        :id="item.id"
        :key="item.id"
        draggable="true"
        @dragstart="drag"
      >
        {{ item.value }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list1: [
        {
          id: 0,
          value: 0
        },
        {
          id: 1,
          value: 1
        }
      ],
      list2: [
        {
          id: 2,
          value: 2
        }
      ]
    }
  },
  methods: {
    allowDrop (ev) {
      ev.preventDefault()
    },
    drag (ev) {
      ev.dataTransfer.setData('Text', ev.target.id)
    },
    drop (ev) {
      const list = ['first', 'second']
      if (list.includes(ev.target.id)) {
        ev.preventDefault()
        const data = ev.dataTransfer.getData('Text')
        ev.target.appendChild(document.getElementById(data))
      }
    }
  }
}
</script>
<style scoped lang="scss">
// .hello > div {
//   width: 1200px;
//   height: 800px;

//   margin: 0 auto;
//   background-size: cover;
//   background-attachment: fixed;
//   clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);

//   display: inb;
// }
.div1 {
  background: url("../assets/70624207_p0.jpg");
  // width: 300px;
  // height: 150px;
  // clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  // transition: 1s clip-path;
}
.div2 {
  background: url("../assets/73165062_p0.jpg");
}
.div3 {
  background: url("../assets/74503110_p0.jpg");
}
// .div1:hover {
//   // clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
//   animation: div11 2s ease 0s infinite alternate backwards;
// }
// @keyframes div11 {
//   0% {
//     clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
//   }
//   100% {
//     clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
//   }
// }

.jartto1,
.jartto3,
.jartto2 {
  float: left;
  width: 150px;
  height: 140px;
  margin: 10px;
  border-radius: 3px;
  border: 1px solid #aaaaaa;
}

.hello {
  width: 60vw;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 0 auto;
}
.box1 {
  width: 200px;
  background: pink;
  div {
    margin: 60px 20px;
    background: orange;
  }
}
.box2 {
  width: 200px;
  background: orange;

  div {
    margin: 60px 20px;
    background: pink;
  }
}
</style>
