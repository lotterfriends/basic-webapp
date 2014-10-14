'use strict';

define(

    'app/components/test',

    [
      'jquery',
      'component'
    ],

    function($, defineComponent) {

      return defineComponent(test);

      function test() {

        this.defaultAttrs({});

        this.after('initialize', function() {
          alert('hallo');
          console.log($(window));
        });

      }
    }
);
