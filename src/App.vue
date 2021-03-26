<template>
  <div class="container" id="app" :class="{'site-light-mode': !isDarkTheme, 'site-dark-mode': isDarkTheme}">
    <svg-sprite />
    <navigation v-if="currentRoute != 'Login'" @change-theme="changeTheme()" :isDark="isDarkTheme" @open-search="openSearch()" @on-type="onType"/>
    <div class="search-popup" v-if="isSearchToggled" @click.self="isSearchToggled = false, formValue = ''" @keydown.esc="isSearchToggled = false, formValue = ''">
      <div class="search-bar">
        <form>
          <input type="text" ref="search" v-model="formValue" style="color: rgb(var(--color-text-markdown))" placeholder="Start typing to search...">
        </form>
        <svg-icon icon="light/search"></svg-icon>
      </div>
    </div>
    <router-view @set-tab="setBrowseTab" :isDarkTheme="isDarkTheme" :browseTab="currentBrowseTab"/>
  </div>
</template>

<script>
import navigation from './components/navigation';
import svgSprite from './components/svgSprite';

export default {
  name: 'app',
  components: {
    navigation,
    svgSprite
  },
  data() {
    return {
      isDarkTheme: false,
      isSearchToggled: false,
      formValue: '',
      currentBrowseTab: 0,
    }
  },
  methods: {
    changeTheme() {
      this.isDarkTheme = !this.isDarkTheme
    },
    onType(str) {
      this.isSearchToggled = true;
      this.formValue = str
      this.$nextTick(() =>  this.$refs.search.focus());
    },
    openSearch() {
      this.isSearchToggled = true;
      this.$nextTick(() =>  this.$refs.search.focus());
    },
    setBrowseTab(int) {
      this.currentBrowseTab = int;
    }
  },
  computed: {
      currentRoute() {
          return this.$route.name;
      }
  }
}
</script>

<style>  
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
    --color-activity-progress-background: 198,198,198;
    --color-dropped: 173, 163, 181;
    --color-completed: 148, 121, 171;
    --color-watching: 192, 169, 212;
    --color-planning: 185, 184, 186;
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

  .search-popup {
    position: absolute;
    z-index: 1000;
    width: 100%;
    top: 0;
    bottom: 0;
    background-color: rgba(var(--color-background), 0.8);
    backdrop-filter: blur(5px);
    animation: fadeIn 0.3s;
  }

  .search-bar {
    background-color: rgba(var(--color-foreground), 1);
    padding: 15px;
    color: rgba(var(--color-text));
    width: 1000px;
    margin: 150px auto 0px auto;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(var(--color-background), 1);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  form {
    width: 100%;
  }

  input[type=text] {
    width: 100%;
  }

</style>
