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
    <user-dropdown v-if="!hideUserDropdown" />
  </header>
</template>

<script>

import UserDropdown from './UserDropdown'

export default {
  name: 'Header',
  data () {
    return {
    }
  },
  components: { UserDropdown },
  props: {
    title: String,
    hideToggle: Boolean,
    hideUserDropdown: Boolean
  },
  computed: {
    icon () {
      return this.$store.state.isMenuVisible ? 'fa-angle-left' : 'fa-angle-down'
    }
  },
  methods: {
    toggleMenu () {
      this.$store.commit('toggleMenu')
    }
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
