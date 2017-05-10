export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('newTweet', {
      url: '/new-tweet',
      templateUrl: 'app/newTweet/new-tweet.html',
      controller: 'NewTweetController',
      controllerAs: 'newTweet'
    });

  $urlRouterProvider.otherwise('/');
}
