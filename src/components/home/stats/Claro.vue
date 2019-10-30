<template>
  <div class="home">
    <div class="stats">
      <Stat title="Vendas" :value="stat.totalSuccess"
        icon="fa fa-thumbs-o-up" color="#3282cd" />
      <Stat title="Contratos" :value="stat.totalContracts"
        icon="fa fa-check-square-o" color="#048c19" />
      <Stat title="Canceladas" :value="stat.totalCancels"
        icon="fa fa-thumbs-o-down" color="#d54d50" />
      <Stat title="Quebras" :value="stat.totalBrokes"
        icon="fa fa-calendar-times-o" color="#b5891b" />
    </div>
  </div>
</template>

<script>
import Stat from '../Stat'
import axios from 'axios'
import { baseApiUrl, showError } from '@/global'

export default {
  name: 'Claro',
  components: { Stat },
  data: function () {
    return {
      stat: {},
      getStat: false
    }
  },
  methods: {
    getStats () {
      axios.get(`${baseApiUrl}/stats-claro`)
        .then(res => {
          this.stat = res.data
        })
        .catch(showError)
    }
  },
  mounted () {
    this.getStats()
  }
}
</script>

<style>
  .stats {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
