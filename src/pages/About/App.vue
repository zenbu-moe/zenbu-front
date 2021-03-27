<template>
  <div class="container" id="app" :class="{'site-light-mode': !isDarkTheme, 'site-dark-mode': isDarkTheme}">
    <pageContent ref="content" @mousemove="setHeight()" @click="setHeight()" @toggle-edit="toggleEdit()" :edit="editOn"/>
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
  data() {
    return {
      editOn: false
    }
  },
  methods: {
    setHeight() {
      if (!this.editOn) {
        this.$refs.content.$refs.oww.$refs.ow.$refs.fw.setHeight()
      } 
    },
    toggleEdit() {
      this.editOn = !this.editOn
    }
  }
}
</script>

<style>
  @import url('../../../node_modules/gridstack/dist/gridstack.min.css');
  
  .grid-stack > .grid-stack-item > .grid-stack-item-content {
      overflow-x: hidden;
      overflow-y: hidden;
    }

  *::-webkit-scrollbar       {background-color: transparent; width: 6px;}
  *::-webkit-scrollbar-track {background-color: transparent;}
  *::-webkit-scrollbar-thumb {background-color: rgba(var(--color-text), 0.3); border-radius:15px; width: 4px}

</style>
