<template>
    <h1>Advanced Demo</h1>
  <div class="row">
    <div class="col-md-2 d-none d-md-block">
      <div id="trash" style="padding: 5px; margin-bottom: 15px;" class="text-center">
        <div>
          <ion-icon name="trash" style="font-size: 300%"></ion-icon>
        </div>
        <div>
          <span>Drop here to remove!</span>
        </div>
      </div>
      <div class="newWidget grid-stack-item">
        <div class="grid-stack-item-content" style="padding: 5px;">
          <div>
            <ion-icon name="add-circle" style="font-size: 300%"></ion-icon>
          </div>
          <div>
            <span>Drag me in the dashboard!</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="grid-stack"></div>
      <div class="grid-stack"></div>
    </div>
  </div>
</template>

<script>
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.css';
import 'gridstack/dist/h5/gridstack-dd-native';
import 'gridstack/dist/gridstack-extra.css';

export default {
   name: 'pageContent', 
   components: {
 
   },
   data() {
        return {
            
        }
    },

    methods: {

    },
    mounted() {
         let grids = GridStack.initAll({
      alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ),
      resizable: {
        handles: 'e, se, s, sw, w'
      },
      acceptWidgets: true,
      removable: false, // drag-out delete class
      removeTimeout: 100,
    });

    let items = [
      {x: 0, y: 0, w: 4, h: 2, content: '1'},
      {x: 4, y: 0, w: 4, h: 4, noMove: true, noResize: true, locked: true, content: 'I can\'t be moved or dragged!<br><ion-icon name="ios-lock" style="font-size:300%"></ion-icon>'},
      {x: 8, y: 0, w: 2, h: 2, minW: 2, noResize: true, content: '<p class="card-text text-center" style="margin-bottom: 0">Drag me!<p class="card-text text-center"style="margin-bottom: 0"><ion-icon name="hand" style="font-size: 300%"></ion-icon><p class="card-text text-center" style="margin-bottom: 0">...but don\'t resize me!'},
      {x: 10, y: 0, w: 2, h: 2, content: '4'},
      {x: 0, y: 2, w: 2, h: 2, content: '5'},
      {x: 2, y: 2, w: 2, h: 4, content: '6'},
      {x: 8, y: 2, w: 4, h: 2, content: '7'},
      {x: 0, y: 4, w: 2, h: 2, content: '8'},
      {x: 4, y: 4, w: 4, h: 2, content: '9'},
      {x: 8, y: 4, w: 2, h: 2, content: '10'},
      {x: 10, y: 4, w: 2, h: 2, content: '11'},
    ];

    grids.forEach(function (grid) {
      grid.load(items);
    });
    
    /* grid.on('added removed change', function(e, items) {
      let str = '';
      items.forEach(function(item) { str += ' (x,y)=' + item.x + ',' + item.y; });
      console.log(e.type + ' ' + items.length + ' items:' + str );
    }); */
    }
}
</script>

<style scoped>
    .col {
        display: grid;
        grid-template-columns: auto auto;
    }
</style>