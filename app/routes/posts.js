import Ember from 'ember';
import slug from '../utils/slug';
import getOrCreateUser from '../utils/get-or-create-user.js';

export default Ember.Route.extend({
  model(param) {
    return this.store.query('post', { orderBy: 'titleURL', equalTo: param.titleURL }); // TODO: simplify
  },

  actions: {
    delete(post) {
      post.destroyRecord();
      this.transitionTo('index');
    },

    save(post) {
      post
        .set('titleURL', slug(post.get('title')))
        .save();
      this.transitionTo('index');
    },

    createComment(author, body, post) {
      const comment = this.store.createRecord('comment', { body });
      const uid = author.get('uid');
      const user = getOrCreateUser(
        uid,
        this.get('session.currentUser.username'),
        this.get('session.currentUser.profileImageURL'),
        this.store
      ).then((userData) => {
        userData.get('comments').addObject(comment);
        post.get('comments').addObject(comment);

        return comment.save().then(() => {
          console.log('comment saved');
          return post.save(/// continue);
        }).catch((error) => {
          console.log(`comment: ${error}`);
          comment.rollbackAttributes();
        });
      });
    }
  }
});
