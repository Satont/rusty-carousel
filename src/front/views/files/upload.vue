<template>
  <form action="/api/files/upload" method="post" enctype="multipart/form-data" @submit.prevent="submit">
    <input type="file" id="files" ref="files" multiple v-on:change="handleFileUploads" />
    <input type="submit" value="Send" v-bind:disabled="!this.loading" />
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { Component } from 'vue-property-decorator'

@Component
export default class Index extends Vue {
  files = []
  loading = false

  handleFileUploads(e) {
    this.loading = true
    const files = e.target.files || e.dataTransfer.files
    if (!files.length) return
    const readers = {}

    let i = 0
    for (i = 0; i < files.length; i++) {
      readers[i] = new FileReader()
      const index = i
      readers[i].onload = f => {
        const dataURI = f.target.result
        this.files.push({ name: files[index].name, data: dataURI, type: files[index].type })
        i - 1 === files.length ? this.loading = false : this.loading = true
      }

      readers[i].readAsDataURL(e.target.files[i])
    }
  }

  async submit() {
    await axios.post('/api/files/upload', this.files)
      .finally(() => this.loading = false)
  }
}
</script>