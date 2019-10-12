import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let breweries = this.modelFor('breweries');
    return breweries.find( brewery => brewery.slug === params.slug);
  }
});
