import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'new',
  actions: {
    save(title, body) {
      this.sendAction('save', title, body);
      this.set('title', '');
      this.set('body', '');
    }
  }
});
