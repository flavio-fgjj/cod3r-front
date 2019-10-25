<template>
  <header class="header">
    <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
      <i class="fa fa-lg" :class="icon"></i>
    </a>

      <b-img class="image" src="./static/img/logo.png" alt="Logo"></b-img>
      <!-- <router-link to="/">{{ title }}</router-link> -->
      <h1 class="font-weight-bold">
        <router-link to="/"><label class="rocket-2">ROCKET</label></router-link>
        <router-link to="/"><label class="rocket-3">BIT</label></router-link>
      </h1>

    <user-dropdown v-if="!hideUserDropdown" />
  </header>
</template>

<script>
import UserDropdown from './UserDropdown'

export default {
  name: 'Header',
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

  .title {
    font-size: 1.2rem;
    color: #fff;
    font-weight: 100;
    flex-grow: 1;
    text-align: center;
  }

  .image {
    height: 40px;
    width: 50px;
    padding-right: 10px;
  }

  .title a {
    color: #fff;
    text-decoration: none;
  }

  .title a:hover {
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
    margin-top: 15px;
  }

  .rocket-3 {
    color: #f7941d;
    margin-top: 15px;
  }
</style>
