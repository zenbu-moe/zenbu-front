<template>
  <div class="container" id="app" :class="{'site-light-mode': !isDarkTheme, 'site-dark-mode': isDarkTheme}">
    <showcase />
    <pageContent @set-tab="setBrowseTab"/>
    <footerWrap :isDark="isDarkTheme"/>
  </div>
</template>

<script>
import showcase from './components/showcase';
import pageContent from './components/pageContent';
import footerWrap from '../../components/footer';

export default {
  name: 'app',
  props: ["isDarkTheme"],
  components: {
    showcase,
    pageContent,
    footerWrap
  },
  methods: {
    setBrowseTab(int) {
      this.$emit('set-tab', int)
    }
  }
}
</script>

<style>

</style>
