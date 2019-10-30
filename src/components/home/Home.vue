<template>
  <div class="home">
    <PageTitle icon="fa fa-home" main="Dashboard" sub="Rocket Bit" />
    <net v-if="user.campanha == 'NET'"/>
    <claro v-if="user.campanha == 'CLARO'"/>
    <unicef v-if="user.campanha == 'UNICEF'"/>
    <brastemp v-if="user.campanha == 'BRASTEMP'"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import PageTitle from '../template/PageTitle'
import Unicef from './stats/Unicef'
import Net from './stats/Net'
import Claro from './stats/Claro'
import Brastemp from './stats/Brastemp'

export default {
  name: 'Home',
  computed: mapState(['user']),
  components: { PageTitle, Unicef, Net, Claro, Brastemp }
}
</script>

<style>
</style>
