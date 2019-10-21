<template>
  <div class="home">
    <PageTitle icon="fa fa-home" main="Dashboard" sub="Rocket Bit" />
    <div class="stats">
      <Stat title="Doações" :value="stat.categories"
        icon="fa fa-thumbs-o-up" color="#3282cd" />
      <Stat title="Recusas" :value="stat.articles"
        icon="fa fa-thumbs-o-down" color="#d54d50" />
      <Stat title="Ligações" :value="stat.users"
        icon="fa fa-phone" color="#6b6382" />
      <Stat title="Usuários" :value="stat.users"
        icon="fa fa-user" color="#32cda1" />
    </div>
  </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import Stat from './Stat'
import axios from 'axios'
import { baseApiUrl } from '@/global'

export default {
  name: 'Home',
  components: { PageTitle, Stat },
  data: function () {
    return {
      stat: {}
    }
  },
  methods: {
    getStats () {
      axios.get(`${baseApiUrl}/stats`).then(res => {
        this.stat = res.data
      })
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
