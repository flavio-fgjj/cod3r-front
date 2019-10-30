<template>
  <b-dropdown split
    split-variant="outline-secondary"
    variant="secondary"
    :text="item.campanha ? item.campnha : 'teste'"
    class="m-2"
    v-model="idCamp"
  >
    <b-dropdown-item
      v-for="(item, index) in camps"
      :key="index"
      :value="item.id"
      @click="changeCampaign"
    >{{ item.campanha }}
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import axios from 'axios'
import { baseApiUrl, showError } from '@/global'

export default {
  name: 'Projects',
  data () {
    return {
      camps: [],
      idCamp: this.$store.state.user.idCampanha
    }
  },
  methods: {
    getCampaign () {
      axios.get(`${baseApiUrl}/campanhas/${this.$store.state.user.id}`)
        .then(res => {
          this.camps = res.data
        })
        .catch(showError)
    },
    changeCampaign () {
      let userChange = this.$store.state.user
      userChange.idCampanha = this.idCamp
      this.$store.commit('setUser', userChange)
      console.log(userChange)
      console.log(this.idCamp)
    }
  },
  mounted () {
    this.getCampaign()
  }
}
</script>

<style>
</style>
