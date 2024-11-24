import EmberRouter from '@ember/routing/router';
import config from 'ember-test/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('articles');
  this.route('article', { path: '/articles/:article_id' });
  this.route('not-found', { path: '/404' });
});
