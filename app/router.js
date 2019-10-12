import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('breweries', function() {
    this.route('brewery', { path: ':id'}, function() {
      this.route('beers');
      this.route('details');
    });
  });

  this.route('beers');
});

export default Router;
