import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('breweries', function() {
    this.route('brewery', { path: ':slug '}, function() {
      this.route('beers');
      // add types?
      this.route('types');
    });
  });

  this.route('beers');
});

export default Router;
