<template>
  <h1>Hello world</h1>  
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Index extends Vue {
  title = 'world'
}
</script>