<template>
  <div>
    <div v-for="file of files" v-bind:key="file.id">
      <img v-bind:src="file.data" v-if="file.type.startsWith('image')" style="width:300px" />
      <audio controls v-if="file.type.startsWith('audio')">
        <source v-bind:src="file.data" :type="file.type"/>
      </audio>
      <br>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { Component } from 'vue-property-decorator'

@Component
export default class Index extends Vue {
  files = []

  async created() {
    const { data } = await axios.get('/api/files')
    this.files = data
  }
}
</script>