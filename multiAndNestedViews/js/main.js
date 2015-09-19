var app = angular.module('demo', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app',{
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

        .state('app.dashboard', {
            url: '/dashboard',
            views: {
                'content@': {
                    templateUrl: 'templates/dashboard.html'
                    //controller: 'DashboardController'
                }
            }
        })

        .state('app.campaigns', {
            url: '/campaigns',
            views: {
                'content@': {
                    templateUrl: 'templates/campaigns.html'
                    //controller: 'CampaignController'
                }
            }

        })
        .state('app.subscribers', {
            url: 'subscribers',
            views: {
                'content@': {
                    templateUrl: 'templates/subscribers.html',
                    controller: 'SubscriberController'
                }
            }
        })
        .state('app.subscribers.detail', {
            url: '/:id',
            views: {
                'detail@app.subscribers': {
                    templateUrl: 'templates/partials/subscriber-detail.html',
                    controller: 'SubscriberDetailController'
                }
            }
        });
}])

app.controller('SubscriberController', ['$scope', 'SubscribersService', function ($scope, SubscribersService) {
    $scope.subscribers = SubscribersService.list();
}]);

app.controller('SubscriberDetailController', ['$scope', '$stateParams', 'SubscribersService', function ($scope, $stateParams, SubscribersService) {
    $scope.selected = SubscribersService.find($stateParams.id);
}]);

app.factory('SubscribersService', function () {
    var subscribers = [{
        id: 1,
        name: 'John',
        email: 'john.doo@gmail.com',
        description: 'John is a great guy'
    },
        {
            id: 2,
            name: 'Smith',
            email: 'Smith.doo@gmail.com',
            description: 'Smith is a great guy'
        },
        {
            id: 3,
            name: 'Tim',
            email: 'Tim.doo@gmail.com',
            description: 'Tim is a great guy'
        }];


    return {
        list: function () {
            return subscribers;
        },
        find: function (id) {
            return _.find(subscribers, function (subscriber) {
                return subscriber.id == id
            });
        }
    }
});