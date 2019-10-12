import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  name(i) {
    return `Movie ${i}`;
  },

  location(){
    return faker.address.streetAddress();
  },

  description(){
    return faker.lorem.paragraph();
  }

});
