import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://083642f6753749ffb0eea864a7c2ed27@sentry.io/302369',
  integrations: [new Sentry.Integrations.Ember()],
  release: config.EmberENV.release
});

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
