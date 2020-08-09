<template>
  <form @submit.prevent="submit">
    <label for="name">Имя</label>
    <input type="text" id="name" v-model.trim="data.name">
    <br>
    <label for="type">Тип</label>
    <select id="type" v-model.trim="data.type">
      <option value="tape">Полоска</option>
    </select>
    <br>
    <input type="submit" value="Создать" />
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { Component } from 'vue-property-decorator'

@Component
export default class List extends Vue {
  items = []
  files  = []
  data = {
    name: null,
    audio: null,
    items: [],
    type: 'tape'
  }

  async created() {
    const [items, files] = await Promise.all([
      axios.get('/api/items'),
      axios.get('/api/files')
    ])
    this.items = items.data
    this.files = files.data
  }

  async submit() {

  }
}
</script>