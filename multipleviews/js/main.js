var app = angular.module('demo', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home',{
            url: '/',
            views: {
                'header': {
                    templateUrl: 'templates/partials/header.html'
                },
                'content': {
                    templateUrl: 'templates/partials/content.html'
                },
                'footer': {
                    templateUrl: 'templates/partials/footer.html'
                }
            }
        })

        .state('dashboard', {
            url: '/dashboard',
            views: {
                'header': {
                    templateUrl: 'templates/partials/header.html'
                },
                'content': {
                    templateUrl: 'templates/dashboard.html'
                    //controller: 'DashboardController'
                }
            }

        })

        .state('campaigns', {
            url: '/campaigns',
            views: {
                'content': {
                    templateUrl: 'templates/campaigns.html'
                    //controller: 'CampaignController'
                },
                'footer': {
                    templateUrl: 'templates/partials/footer.html'
                }
            }

        })
}])
