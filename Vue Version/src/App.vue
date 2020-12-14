<template>
  <div class="container" id="app">
    <navigation />
    <showcase />
    <pageContent />
  </div>
</template>

<script>
import navigation from './components/navigation';
import showcase from './components/showcase';
import pageContent from './components/pageContent';

export default {
  name: 'app',
  components: {
    navigation,
    showcase,
    pageContent,
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
    color: rgba(49,53,90,1.00);
  }

  body, #app {
    margin: 0;
    font-family: "Roboto";
    background-color: rgba(228,231,236,1.00);
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
    background-color: rgba(228,231,236,1.00);
    position: relative;
  }
</style>
