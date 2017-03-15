function Config ($stateProvider, $urlRouterProvider) {
  console.log($stateProvider);
  console.log($urlRouterProvider);

  $stateProvider
     .state('home', {
       url: '/home',
       templateURL: 'templates/contacts-home.html'
     })
     .state('page-not-found', {
       url: '/not-found',
       template: `<h2>So sorry! Unable to find that URL.</h2>`
     })

  $urlRouterProvider.when('', '/home');
  $urlRouterProvider.otherwise('/not-found');
}


Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config;
