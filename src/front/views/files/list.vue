<template>
  <div>
    <Upload class="mb-3" />
    <b-card-group columns>
      <div v-for="file of files" v-bind:key="file.id">
        <b-card
          
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
          v-if="file.type.startsWith('image')"
          :header="file.name"
          no-body
        >
          <b-card-img v-bind:src="file.data" alt="Image" bottom />
          <template v-slot:footer>
            <b-button href="#" block size="sm" variant="danger" @click="del(file)">Удалить</b-button>
          </template>
        </b-card>

        <b-card
          style="max-width: 20rem;"
          class="mb-2"
          v-if="file.type.startsWith('audio')"
          :header="file.name"
        >
          <b-card-body>
            <audio controls v-if="file.type.startsWith('audio')">
              <source v-bind:src="file.data" :type="file.type"/>
            </audio>
          </b-card-body>
          <template v-slot:footer>
            <b-button href="#" block size="sm" variant="danger" @click="del(file)">Удалить</b-button>
          </template>
        </b-card>
      </div>
    </b-card-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { Component } from 'vue-property-decorator'
import Upload from './upload.vue'

@Component({
  components: {
    Upload
  }
})
export default class Index extends Vue {
  files = []

  async created() {
    const { data } = await axios.get('/api/files')
    this.files = data
  }
}
</script>

<style scoped>
.card-img-top {
  height: 250px;
  border: 0px !important;
}
.card-body {
  padding: 5px;
}
</style>