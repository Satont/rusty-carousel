<template>
  <div>
    list
    <div v-for="carousel in carousels" v-bind:key="carousel.id">
      {{ carousel }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { Component } from 'vue-property-decorator'

@Component
export default class List extends Vue {
  carousels = []
  
  async created() {
    const { data } = await axios.get('/api/carousels')

    this.carousels = data
  }
}
</script>