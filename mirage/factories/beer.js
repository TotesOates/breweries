import { Factory } from 'ember-cli-mirage';
import faker from 'faker';
export default Factory.extend({
  // name
  // type
  // alcohol percentage

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
