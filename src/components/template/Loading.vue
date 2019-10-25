<template>
  <div class="loading">
    <b-img src="./static/img/loading.gif" alt="Loading"></b-img>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style>
  .loading {
    grid-area: content;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
