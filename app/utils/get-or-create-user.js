import Ember from 'ember';

const { RSVP: {Promise} } = Ember;

export default function getOrCreateUser(uid, username, avatar, store) {
  return new Promise((resolve) => {
    store
      .query('user', { equalTo: uid }) // TODO: simplify it
      .then((records) => {
        if (records.get('length') === 0) {
          resolve(store.createRecord('user', { uid, username, avatar }));
        } else {
          resolve(records.get('firstObject'));
        }
      });
  });
}
