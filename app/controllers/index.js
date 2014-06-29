import Ember from 'ember';

export default Ember.Controller.extend({
  init: function() {
    this.set('post',  Ember.Object.create());
  },
  actions: {
    createPost: function() {
      var newPost = this.store.createRecord('post', {
        title: this.get('post.title'),
        name: this.get('post.name')
      });
      var result = newPost.save();
      console.log("POST created", result);
    }
  }
});
