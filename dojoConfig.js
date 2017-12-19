window.dojoConfig = {
  async: true,
  deps: ['app/bundle'],
  packages: [{
    name: 'app',
    location: `${window.location.origin}${window.location.pathname}dist`,
    main: 'bundle',
  }],
  has: {
    'esri-promise-compatibility': 1,
  },
};
