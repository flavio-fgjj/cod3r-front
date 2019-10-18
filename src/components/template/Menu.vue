<template>
  <aside class="menu" v-show="isMenuVisible"></aside>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Menu',
  computed: mapState(['isMenuVisible'])
}
</script>

<style>
  .menu {
    grid-area: menu;
    /* background: linear-gradient(to right, #232526, #414345); */
    background: linear-gradient(to right, #41484b, #809abb);

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
</style>
