<template>
  <div class="container" id="app" :class="{'site-light-mode': !isDarkTheme, 'site-dark-mode': isDarkTheme}" @click="clickHandler">
    <pageContent />
  </div>
</template>

<script>
import pageContent from './components/pageContent';

export default {
  name: 'app',
  props: ["isDarkTheme"],
  components: {
    pageContent,
  },
}
</script>

<style>

</style>
