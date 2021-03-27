<template>
  <div class="container" id="app" :class="{'site-light-mode': !isDarkTheme, 'site-dark-mode': isDarkTheme}">
    <pageContent :tab="browseTab"/>
    <footerWrap :isDark="isDarkTheme"/>
  </div>
</template>

<script>
import pageContent from './components/pageContent';
import footerWrap from '../../components/footer';

export default {
  name: 'app',
  props: ["isDarkTheme", "browseTab"],
  components: {
    pageContent,
    footerWrap
  },
}
</script>

<style>

</style>
