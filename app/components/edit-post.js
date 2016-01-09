import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,
  classNames: 'edit',

  // TODO: simplify model from the route
  isAllowed: Ember.computed('model.firstObject.user.username', 'session.currentUser.username', function() {
    return this.get('model.firstObject.user.username') === this.get('session.currentUser.username');
  }),

  actions: {
    save(post) {
      const sessionName = this.get('session.currentUser.username');

      if (sessionName === post.get('user.username')) {
        this.set('isEditing', false);
        this.sendAction('save', post);
      } else {
        alert('You are not authorized');
      }
    },

    edit() {
      this.set('isEditing', true);
    },

    delete(post) {
      this.sendAction('delete', post);
      this.set('isEditing', false);
    },

    createComment(author, body, post) { // TODO: try to get rid of this
      this.sendAction('createComment', author, body, post);
    }
  }
});
