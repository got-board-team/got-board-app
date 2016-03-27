import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    invalidateSession() {
      this.get("session").invalidate();
    },

    error(error) {
      alert(`Error: ${error}\nCheck your console for details.`);
    },
  }
});
