import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  router:service(),
  model(params) {
    return this.store.findRecord('brewery', params.id);
  },

  // redirect(brewery) {
  //   if (brewery.description) {
  //   this.router.transitionTo('breweries.brewery.details');
  //   } else {
  //   this.router.transitionTo('breweries.brewery.songs');
  //   }
  //   }
});
