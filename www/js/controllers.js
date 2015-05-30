angular.module('starter.controllers', [])

    .controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
	$scope.data = {};

	$scope.login = function() {

		$state.go('tab.dash');

	}
    })


    .controller('DashCtrl', function($scope) {})

    .controller('ChatsCtrl', function($scope, Chats) {
	$scope.chats = Chats.all();
	$scope.remove = function(chat) {
	    Chats.remove(chat);
	}
    })

    .controller('BarbersCtrl', function($scope, Barbers) {
	$scope.barbers = Barbers.all();	
    })


    .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('AccountCtrl', function($scope) {
	$scope.settings = {
	    enableFriends: true
	};
    });
