import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findAll('brewery', params.id);
  }

  // model: function(params) {
  //   return this.store.findAll('brewery', params.id);
  // },
});
