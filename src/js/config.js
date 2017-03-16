function Config ($stateProvider, $urlRouterProvider) {
  //console.log($stateProvider);
  //console.log($urlRouterProvider);

  $stateProvider
     .state('home', {
       url: '/home',
       templateUrl: 'templates/contacts-home.tpl.html',
       controller: 'ContactController'
     })
     .state('page-not-found', {
       url: '/not-found',
       template: `<h2>So sorry! Unable to find that URL.</h2>`
     })
     .state('add-contact', {
       url: '/contacts',
       templateUrl: 'templates/add-contact.tpl.html',
       controller: 'ContactController'
     })
    //  .state('list-contact', {
    //    url: '/contacts/:id',
    //    template: 'templates/list-contact.tpl.html',
    //    controller: 'ContactController'
    //  })

  $urlRouterProvider.when('', '/home');
  $urlRouterProvider.otherwise('/not-found');
}


Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config;
