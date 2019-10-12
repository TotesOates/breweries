import Controller from '@ember/controller';
import { action } from '@ember/object';

export default Controller.extend({
  isAddingBrewery: false,
  newBreweryName: '',

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
