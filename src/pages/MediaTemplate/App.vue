<template>
  <div class="container" id="app" :class="{'site-light-mode': !isDarkTheme, 'site-dark-mode': isDarkTheme}">
    <pageContent />
    <footerWrap :isDark="isDarkTheme"/>
  </div>
</template>

<script>
import pageContent from './components/pageContent';
import footerWrap from '../../components/footer';

export default {
  name: 'app',
  props: ["isDarkTheme"],
  components: {
    pageContent,
    footerWrap
  },
}
</script>

<style>

</style>
