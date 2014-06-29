import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createPost: function() {
      var newPost = this.store.createRecord('post', {title: 'bla', name: 'bla'});
      var result = newPost.save();
      console.log("POST created", result);
    }
  }
});
