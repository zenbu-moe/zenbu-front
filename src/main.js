import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueResizeObserver from "vue-resize-observer"
import svgIcon from './components/svgIcon.vue'
import likeButton from './components/likeButton.vue';
import buttonMore from './components/buttonMore.vue';
import buttonReply from './components/buttonReply.vue';

const clickOutside = {
    beforeMount: (el, binding) => {
      el.clickOutsideEvent = event => {
        // here I check that click was outside the el and his children
        if (!(el == event.target || el.contains(event.target))) {
          // and if it did, call method provided in attribute value
          binding.value();
        }
      };
      document.addEventListener("click", el.clickOutsideEvent);
    },
    unmounted: el => {
      document.removeEventListener("click", el.clickOutsideEvent);
    },
  };

createApp(App)
    .directive("click-outside", clickOutside)
    .component('svg-icon', svgIcon)
    .component('like-button', likeButton)
    .component('button-reply', buttonReply)
    .component('button-more', buttonMore)
    .use(router)
    .use(VueResizeObserver)
    .mount('#app')
