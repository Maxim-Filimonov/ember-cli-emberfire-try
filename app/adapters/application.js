import DS from 'ember-data';
/* globals Firebase */

export default DS.FirebaseAdapter.extend({
  firebase: new Firebase('https://amber-fire-869.firebaseio.com/')
});
