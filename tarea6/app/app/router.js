import EmberRouter from '@ember/routing/router';
import config from 'tarea6/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('products');
  this.route('shop');
  this.route('checkout');
  this.route('login');
  this.route('not-found', { path: '/*path' });
});
