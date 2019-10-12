import { Factory, hasMany } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  beer: hasMany(),
  name() {
    return `${faker.company.companyName()} brewery`;
  },

  location(){
    return faker.address.streetAddress();
  },

  description(){
    return faker.lorem.paragraph();
  }
});
