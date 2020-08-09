<template>
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <b-navbar-brand>Carousel</b-navbar-brand>

    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="'/'">Главная</b-nav-item>
        <b-nav-item :to="'/carousel/list'">Карусель</b-nav-item>
        <b-nav-item :to="'/files/list'">Файлы</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { Component } from 'vue-property-decorator'

@Component
export default class Index extends Vue {
 
}
</script>
