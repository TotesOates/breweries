import DS from 'ember-data';
const { Model } = DS;
import { attr, hasMany } from '@ember-data/model';
export default Model.extend({
  // name
  // location

  name: attr(),
  description: attr(),
  location: attr(),
  beers: hasMany(),

});
