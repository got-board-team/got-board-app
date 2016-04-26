import Ember from 'ember';

const { computed }  = Ember;

export default Ember.Component.extend({
  attributeBindings: ["match"],

  session: Ember.inject.service(),

  board: computed(function () {
    return this.get("match.board");
  }),

  currentPlayer: computed("match.players.@each.userId", function () {
    console.log("currentPlayer");
    let players = this.get("match.players");
    let userId = this.get("session.userId");
    let player = players.filterBy("userId", userId).toArray()[0];
    return player;
  }),

  isPlayer: computed("currentPlayer", function() {
    return this.get("currentPlayer") != null;
  }),

});
