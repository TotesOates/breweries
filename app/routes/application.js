import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      breweries: this.store.findAll('brewery'),
      beers: this.store.findAll('beer')
    });
  }
});
