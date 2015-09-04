angular.module('starter.controllers',[])


    .controller('LoginCtrl', function($scope, $ionicPopup, $state) {
    	$scope.data = {};

	$scope.login = function() {
	    Parse.User.logIn($scope.data.email, $scope.data.password, {
		success: function(user) {
		    $state.go('tab.barbers');
		},
		error: function(user, error) {
		    var alertPopup = $ionicPopup.alert({
 			title: 'Login failed!',
			template: 'Please check your credentials!'
		    });
		}
	    })
	}
    })

    
    .controller('ChatsCtrl', function($scope, Chats) {
	$scope.chats = Chats.all();
	$scope.remove = function(chat) {
	    Chats.remove(chat);
	}
    })

    .controller('BarbersCtrl', function($scope, Barbers) {
	$scope.barbers = Barbers.get_barbers();

    })


    .controller('BarberDetailCtrl', function($scope,$stateParams, Barbers) {
    	$scope.barber = Barbers.get_barber($stateParams.barberId);
    	console.log($stateParams);
    	console.log($stateParams.objectId);


    	$scope.images = [];

    	$scope.loadImages = function() {
    	    for(var i = 0; i < 100; i++) {
    		$scope.images.push({id: i, src: "http://placehold.it/50x50"});
    	    }
    	};

    	$scope.getTimes=function(n){
    	    return new Array(parseInt(n));
    	};

    	//Calendar Settings

    	$scope.calendarView = 'month';
    	$scope.calendarDay = Date(2013,1,1,1);

    	$scope.events = [
    	    {
    		title: 'My event title', // The title of the event
    		type: 'info', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
    		startsAt: new Date(2013,5,1,1), // A javascript date object for when the event starts
    		endsAt: new Date(2014,8,26,15), // Optional - a javascript date object for when the event ends
    		editable: false, // If edit-event-html is set and this field is explicitly set to false then dont make it editable.
    		deletable: false, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
    		draggable: true, //Allow an event to be dragged and dropped
    		resizable: true, //Allow an event to be resizable
    		incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
    		recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month
    		cssClass: 'a-css-class-name' //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
    	    }
    	];

    })



    .controller('AccountCtrl', function($scope) {
	$scope.settings = {
	    enableFriends: true
	};
    });

