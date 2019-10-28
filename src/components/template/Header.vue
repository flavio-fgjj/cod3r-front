<template>
  <header class="header">
    <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
      <i class="fa fa-lg" :class="icon"></i>
    </a>
    <div class="logo-header">
      <svg>
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="static/img/icones-rckt.svg#rocket"></use>
      </svg>
      <router-link to="/">
        <span class="font-weight-bold rocket-2">ROCKET</span>
        <span class="font-weight-bold rocket-3">BIT</span>
      </router-link>
    </div>
    <b-dropdown v-if="!hideUserDropdown"
      split
      split-variant="outline-secondary"
      variant="secondary"
      text="Projeto"
      class="m-2"
      @click.prevent="changeCampaign"
      v-model="idCampanha"
    >
      <b-dropdown-item href="#" v-for="item in camps" :key="item.id">{{ item.campanha }}</b-dropdown-item>
    </b-dropdown>
    <user-dropdown v-if="!hideUserDropdown" />
  </header>
</template>

<script>

import { baseApiUrl, showError } from '@/global'
import UserDropdown from './UserDropdown'
import axios from 'axios'

export default {
  name: 'Header',
  components: { UserDropdown },
  props: {
    title: String,
    hideToggle: Boolean,
    hideUserDropdown: Boolean
  },
  data () {
    return {
      camps: [],
      idCampanha: this.$store.user.idCampanha
    }
  },
  computed: {
    icon () {
      return this.$store.state.isMenuVisible ? 'fa-angle-left' : 'fa-angle-down'
    }
  },
  methods: {
    toggleMenu () {
      this.$store.commit('toggleMenu')
    },
    getCampaign () {
      axios.get(`${baseApiUrl}/campanhas/${this.$store.state.user.id}`)
        .then(res => {
          this.camps = res.data
        })
        .catch(showError)
    },
    changeCampaign () {
      this.$store.state.user.idCampanha = this.idCampanha
      console.log(this.$store.state.user)
    }
  },
  mounted () {
    this.getCampaign()
  }
}
</script>

<style>
  .header {
    grid-area: header;
    background: linear-gradient(to right, #3F51B5, #C0C0FC);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo-header {
    flex-grow: 1;
    text-align: left;
  }

  .logo-header > svg {
    fill: #262261 !important;
    height: 40px;
    width: 45px;
  }

  .logo-header a {
    color: #fff;
    text-decoration: none;
  }

  .logo-header a:hover {
    color: #fff;
    text-decoration: none;
  }

  header.header > a.toggle {
    width: 60px;
    height: 100%;
    color: #fff;
    justify-self: flex-start;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  header.header > a.toggle:hover {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .rocket-2 {
    color: #add136;
    padding-left: 10px;
  }

  .rocket-3 {
    color: #f7941d;
  }
</style>
