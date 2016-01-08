import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitComment(author, body) {
      const post = this.get('post');
      this.sendAction('store', author, body, post);
      this.setProperties({ body: '' });
    }
  }
});
