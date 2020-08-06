<template>
  <form action="/api/files/upload" method="post" enctype="multipart/form-data" @submit.prevent="submit">
    <input type="file" id="files" ref="files" v-on:change="handleFileUploads" />
    <input type="submit" value="Send" />
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { Component } from 'vue-property-decorator'

@Component
export default class Index extends Vue {
  file = null

  handleFileUploads(e) {
    const files = e.target.files || e.dataTransfer.files
    if (!files.length) return

    const reader = new FileReader()
    reader.onload = f => {
      const dataURI = f.target.result
      this.file = { name: e.target.files[0].name, data: dataURI, type: e.target.files[0].type }
    }

    reader.readAsDataURL(e.target.files[0])
  }

  async submit() {
    await axios.post('/api/files/upload', this.file)
  }
}
</script>