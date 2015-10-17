import Ember from 'ember';
import Droppable from '../mixins/droppable';

export default Ember.Component.extend(Droppable, {
  tagName: "article",
  classNames: ["toggable-panel"],
  isExpanded: true,

  player: Ember.computed("player", function () {
    return this.player;
  }),

  actions: {
    expand: function() {
      this.set('isExpanded', true);
    },

    contract: function() {
      this.set('isExpanded', false);
    },

  },

  drop: function () {
    var self = this;
    var obj = window.draggedObject;
    var $elm = $(window.draggedElement);

    obj.setProperties({ territory: null, x: 0, y: 0 });

    obj.save().then(function (unit) {
      console.log(unit.get("type") + ' was dropped into the player dock' +
                  ' at x: ' + unit.get("x") + ' , y: ' + unit.get("y"));
    });

  },

});
