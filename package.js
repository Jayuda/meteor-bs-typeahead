Package.describe({
  name: 'comerc:bs-typeahead',
  summary: 'Typeahead-plugin with Bootstrap-style',
  version: '1.0.2',
  git: 'https://github.com/comerc/meteor-bs-typeahead.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use('jquery', 'client');
  api.addFiles([
    'typeahead.css',
    'typeahead.bundle.js',
  ], 'client');
});
