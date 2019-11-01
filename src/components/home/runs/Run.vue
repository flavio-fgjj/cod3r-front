<template>
  <div class="text-center">
    <v-slider
      v-for="(item, index) in runs"
      :key="index"
      :value="item.totalVendas"
      v-model="length"
      color="red darken-4"
      :min="item.totalVendas"
      :label="item.vendedor + ' (' + item.totalVendas + ')'"
      disabled
      light
    ></v-slider>
  </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl, showError } from '@/global'
import { mapState } from 'vuex'

export default {
  name: 'Run',
  computed: mapState(['user']),
  data () {
    return {
      runs: [],
      length: 0
    }
  },
  methods: {
    getRuns () {
      axios.get(`${baseApiUrl}/run-net`)
        .then(res => {
          this.runs = res.data
        })
        .catch(showError)
    }
  },
  mounted () {
    this.getRuns()
  }
}
</script>

<style>

</style>
