import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.get('session').fetch().catch(function() {});
  },

  model() {
    return this.store.findAll('post');
  },

  actions: {
    login() {
      this.get('session')
        .open('firebase', { provider: 'twitter' })
        .then(function(data) {
          console.log(data);
        });
    },

    logout() {
      this.get('session').close();
    }
  }
});
