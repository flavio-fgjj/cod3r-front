<template>
  <footer class="footer">
    <span><strong>Rocket Bit</strong> © 2017-{{ new Date().getFullYear() }}</span>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  }
}
</script>

<style>
  .footer {
    grid-area: footer;
    background-color: #DDD;
    color: #333;

    display: flex;
    align-items: center;
    padding-right: 10px;
    justify-content: flex-end;
  }

</style>
