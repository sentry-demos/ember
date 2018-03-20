# ember-sentry-awesome

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Installation

1. Install the Raven JS package by running the following command.

`npm install raven-js --save`

That will add the Raven package to the package.json file as a dependency.

2. Install sentry-cli, a command line executable that connects to the Sentry API and manage some data for your projects.

`npm install @sentry/cli`


3. Import raven.js and ember.js to your ember-cli-build.js file.

`app.import('node_modules/raven-js/dist/raven.js');
app.import('node_modules/raven-js/dist/plugins/ember.js');`

4. Configure your Raven object in index.html, the entry point of your application, and should be between vendor.js and your-app.js. The following configuration example will set the DSN and the release version.


```
<script src="assets/vendor.js"></script>
<script>
  Raven.config('https://123234@sentry.io/1', {
               release: EmberENV.release
               }).addPlugin(Raven.Plugins.Ember).install();
</script>
<script src="assets/your-app.js"></script>
```


### Deploying

This will build, create release, and deploy
* `npm run deploy`

