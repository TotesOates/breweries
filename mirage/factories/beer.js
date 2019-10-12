import { Factory, belongsTo } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  beer: belongsTo(),

  afterCreate(post, server) {

  },

  name(){
    return faker.name.firstName();
  },

  type() {
    return faker.name.title();
  },

  alcoholPercentage() {
    return faker.random.number();
  },
});
