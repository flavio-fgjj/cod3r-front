<template>
  <b-dropdown
    split
    variant="outline-dark"
    :text="user.campanha ? user.campanha : 'Projetos'"
    class="m-2"
  >
    <b-dropdown-item
      v-for="(item, index) in camps"
      :key="index"
      v-model="idCamp"
      @click="user.campanha = item.campanha, user.idCampanha = item.id, changeCampaign()"
    >{{ item.campanha }}
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import axios from 'axios'
import { baseApiUrl, showError } from '@/global'
import { mapState } from 'vuex'

export default {
  name: 'Projects',
  data () {
    return {
      camps: [],
      idCamp: 0
    }
  },
  computed: mapState(['user']),
  methods: {
    getCampaign () {
      axios.get(`${baseApiUrl}/campanhas/${this.user.id}`)
        .then(res => {
          this.camps = res.data
        })
        .catch(showError)
    },
    changeCampaign () {
      let userChange = this.user
      userChange.idCampanha = this.idCamp
      this.$store.commit('setUser', userChange)
    }
  },
  beforeMount () {
    this.getCampaign()
  }
}
</script>

<style>
</style>
