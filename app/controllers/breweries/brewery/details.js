import Controller from '@ember/controller';
import action from '@ember/object';

export default Controller.extend({
  isEditing: false,
  
  edit: action(function() {
    this.set('isEditing', true);
  }),

  save: action(function() {
    let brewery = this.model;
    brewery.save();
    this.set('isEditing', false);
  })
});
