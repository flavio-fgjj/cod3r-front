<template>
  <div class="home">
    <div class="stats">
      <Stat title="Vendas" :value="stat.totalSuccess"
        icon="fa fa-thumbs-o-up" color="#3282cd" />
      <Stat title="Aprovadas" :value="stat.totalApproved"
        icon="fa fa-check-square-o" color="#048c19" />
      <Stat title="Reprovadas" :value="stat.totalDisapproved"
        icon="fa fa-ban" color="#d54d50" />
      <Stat title="Vendedores" :value="stat.totalUsers"
        icon="fa fa-user" color="#32cda1" />
    </div>
  </div>
</template>

<script>
import Stat from '../Stat'
import axios from 'axios'
import { baseApiUrl, showError } from '@/global'

export default {
  name: 'Brastemp',
  components: { Stat },
  data: function () {
    return {
      stat: {},
      getStat: false
    }
  },
  methods: {
    getStats () {
      axios.get(`${baseApiUrl}/stats-brastemp`)
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
