<template>
  <div class="page-title">
    <h1><i v-if="icon" :class="icon"></i> {{ main }} - {{ user.campanha }} </h1>
    <h2>{{ sub }}</h2>
    <hr>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PageTitle',
  props: ['icon', 'main', 'sub'],
  computed: mapState(['user'])
}
</script>

<style>
  .page-title h1 {
    margin: 0px;
  }

  .page-title h2 {
    color: #777;
    margin-top: 5px;
    font-size: 1.3rem;
  }
</style>
