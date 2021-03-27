<template>
  <div class="container" id="app" :class="{'site-light-mode': !isDarkTheme, 'site-dark-mode': isDarkTheme}">
    <navigation @change-theme="changeTheme()" :isDark="isDarkTheme"/>
    <showcase />
    <pageContent />
  </div>
</template>

<script>
import navigation from '../../components/navigation';
import showcase from './components/showcase';
import pageContent from './components/pageContent';

export default {
  name: 'app',
  components: {
    navigation,
    showcase,
    pageContent,
  },
  data() {
    return {
      isDarkTheme: false
    }
  },
  methods: {
    changeTheme() {
      this.isDarkTheme = !this.isDarkTheme
    }
  }
}
</script>

<style>

</style>
