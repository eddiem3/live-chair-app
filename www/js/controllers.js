angular.module('starter.controllers', ['ui.bootstrap.datetimepicker'])

    .controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
	$scope.data = {};

	$scope.login = function() {
	    LoginService.loginUser($scope.data.email, $scope.data.password).success(function(data) {
		$state.go('tab.dash');
	    }).error(function(data) {
		var alertPopup = $ionicPopup.alert({
		    title: 'Login failed!',
		    template: 'Please check your credentials!'
		});
	    });
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


    .controller('BarberDetailCtrl', function($scope, $stateParams, Barbers) {
	$scope.barber = Barbers.get($stateParams.barberId);

	$scope.images = [];

	$scope.loadImages = function() {
	    for(var i = 0; i < 100; i++) {
		$scope.images.push({id: i, src: "http://placehold.it/50x50"});
	    }
	};

	$scope.getTimes=function(n){
	    return new Array(parseInt(n));
	};  
	
    })

    .controller('AccountCtrl', function($scope) {
	$scope.settings = {
	    enableFriends: true
	};
    });
