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
  @import url('../../fonts/bootstrap-icons/bootstrap-icons.css');
  @import url('../../fonts/fontawesome-pro-5.13.0-web/css/all.css');
  
  * {
    box-sizing: border-box;
  }

  h3 {
    font-family: "Raleway";
    color: black;
  }

  a {
    text-decoration: none;
    color: rgba(var(--color-link));
  }

  .site-light-mode {
    --color-background: 228,231,236;
    --color-foreground: 255,255,255;
    --color-foreground-dark: 224,224,224;
    --color-background-dark: 240,242,245;
    --color-navigation: 50,44,55;
    --color-gray: 245,245,245;
    --color-gray-dark: 218,218,218;
    --color-gray-darker: 31,31,31;
    --color-text: 0,0,0;
    --color-link: 49,53,90;
    --color-button: 129, 129, 129;
    --color-text-markdown: 0,0,0;
    --color-activity-progress-background: 198,198,198
  }

  .site-dark-mode {
    --color-background: 14, 9, 18;
    --color-foreground: 32, 29, 36;
    --color-foreground-dark: 75, 69, 82;
    --color-background-dark: 22, 18, 26;
    --color-navigation: 32, 29, 36;
    --color-gray: 57, 50, 64;
    --color-gray-dark: 218,218,218;
    --color-gray-darker: 147, 145, 148;
    --color-text: 157, 148, 166;
    --color-link: 209, 203, 214;
    --color-button: 133, 124, 138;
    --color-text-markdown: 209, 205, 212;
    --color-activity-progress-background: 75, 69, 82;
  }

  body, #app {
    margin: 0;
    font-family: "Roboto";
    background-color: rgba(var(--color-background));
    overflow: overlay;
    font-size: 1rem;
    animation: fadeIn 0.5s;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  input[type=text] {
    background: rgba(0,0,0,0.0);
    font-size: 17px;
    border: none;
    color: black;
  }

  .container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    background-color: rgba(var(--color-background));
    position: relative;
    transition: 1s;
  }

  .section-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .button-more {
    cursor: pointer;
    font-size: 17px;
    border-radius: 50%;
    text-align: center;
    transition: 0.3s;
    width: 20px;
    height: 20px;
    margin-left: 5px;
  }

  .button-more:hover {
    background: rgba(188,195,208,1.00);
    transition: 0.1s;
  }
  
  .browse {
    border-radius: 10px;
    display: flex;
    align-items: center;
  }

  .more {
    width: 63px;
  }

  .less {
    width: 58px;
  }

  .open-browse {
    width: 115px;
  }

  .browse p {
    font-family: "Raleway";
    font-weight: bold;
    margin: 0px 5px;
    font-size: 12px;
    color: rgb(var(--color-gray-darker))
  }

  body::-webkit-scrollbar       {background-color: transparent; width: 6px;}
  body::-webkit-scrollbar-track {background-color: transparent;}
  body::-webkit-scrollbar-thumb {background-color: rgba(50,44,55,0.50);; border-radius:15px; width: 4px}

</style>
