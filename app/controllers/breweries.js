import Controller from '@ember/controller';
import { action } from '@ember/object';
import { empty } from '@ember/object/computed';

export default Controller.extend({
  isAddingBrewery: false,
  newBreweryName: '',
  isAddButtonDisabled: empty('newBreweryName'),
  
  addBrewery: action(function() {
    this.set('isAddingBrewery', true);
  }),

  cancelAddBrewery: action(function() {
    this.set('isAddingBrewery', false);
  }),
  saveBrewery: action(function() {
    // todo
  }),
});
