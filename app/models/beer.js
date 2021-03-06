import DS from 'ember-data';
import { attr, belongsTo } from '@ember-data/model';
const { Model } = DS;

export default Model.extend({
  name: attr('string'),
  type: attr('string'),
  alcoholPercentage: attr('number'),

  brewery: belongsTo(),
});
