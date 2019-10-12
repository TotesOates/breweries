import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  router: service(),
  model() {
    return this.modelFor('breweries.brewery');
  },
})