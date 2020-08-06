<template>
  <flicking
    :options="options"
    :tag="'div'"
    :viewportTag="'div'"
    :cameraTag="'div'"
    class="flicking"
    ref="flicking"
  >
    <div v-for="item of items" v-bind:key="item.value">
      <div class="item" v-bind:style="item.css">
        {{ item.value }}
      </div>
    </div>
  </flicking>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Flicking } from '@egjs/vue-flicking'

@Component({
  components: {
    Flicking,
  }
})
export default class Index extends Vue {
  options = { 
    gap: 5, 
    moveType: 'snap', 
    collectStatistics: false,
    infinite: true,
    circular: true,
    adaptive: true,
    autoResize: true,
  }
  items = [...Array(16)].map(() => ({
    value: Math.random().toString(36).substring(7),
    css: {
      'background-color': `#${Math.floor(Math.random()*16777215).toString(16)}`
    }
  }))
  flicking: Flicking = null

  created() {
    this.$nextTick(() => this.createFlicking())
  }

  createFlicking() {
    this.flicking = this.$refs.flicking as Flicking
    //this.flicking.moveTo(Math.floor(0 + Math.random() * (16 + 1 - 0)), 5000)
  }
}
</script>

<style scoped>
.item {
  width: auto;
  height: 50px;
  text-align: center;
  color: #fff;
}
.flicking {
  width:100%;
  display: flex;
}
.flicking:after {
  content: '';
  position: absolute;
  z-index: 9999;
  top: 0;
  bottom: 90%;
  left: 50%;
  border-left: 2px solid #ff0000;
  transform: translate(-50%);
}
</style>