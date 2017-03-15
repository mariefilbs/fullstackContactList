function Config ($stateProvider, $urlRouterProvider) {
  console.log($stateProvider);
  console.log($urlRouterProvider);

  $stateProvider
     .state('home', {
       url: '/home',
       template: '<h1> Hellloooo Woooorld!!</h1>'
     });
}

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config;
