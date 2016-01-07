import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  titleURL: DS.attr('string'),
  date: DS.attr('date'),

  comments: DS.hasMany('comment'),
  user: DS.belongsTo('user')
});
