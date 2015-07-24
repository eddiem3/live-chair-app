angular.module('starter.services', [])



    .factory('Barbers', function() {

	
	
	// var barbers = [{
	//     id: 0,
	//     name: 'Michael DeVore',
	//     shop: 'Live Chair',
	//     photo: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
	//     skills: ['fade', 'tape up'],
	//     rating: 5
	// },

	// 	       {
	// 		   id:1,
	// 		   name: 'Eddie Massey',
	// 		   shop: 'Live Chair',
	// 		   photo: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460',
	// 		   skills: ['fade', 'tape up'],
	// 		   rating: 4
			   
	// 	       }];
	
	
	return {
	    get_barbers: function(){
		var barbers = [];
		
		var Barber = Parse.Object.extend("Barber")
		var query = new Parse.Query(Barber);
		
		query.find({
		    success: function(results) {
			for (var i =0; i < results.length; i++) {
			    barbers.push(results[i].toJSON());
			}
		    },

		    error: function(error) {
			alert("Error: " + error.code + " " + error.message);
		    }

		    
		})
		console.log(barbers);
		return barbers;
	    },
	    
	    all: function() {
		return barbers;
	    },
	    
	    get: function(barberId) {
		for (var i = 0; i < barbers.length; i++) {
		    if (barbers[i].id === parseInt(barberId)) {
		 	return barbers[i];
	 	    }
 		}
 		return null;
	    }	    
	};
    });




// .factory('Chats', function() {
// 	// Might use a resource here that returns a JSON array
// 	// Some fake testing data
// 	var chats = [{
// 	    id: 0,
// 	    name: 'Ben Sparrow',
// 	    lastText: 'You on your way?',
// 	    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
// 	}, {
// 	    id: 1,
// 	    name: 'Max Lynx',
// 	    lastText: 'Hey, it\'s me',
// 	    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
// 	},{
// 	    id: 2,
// 	    name: 'Adam Bradleyson',
// 	    lastText: 'I should buy a boat',
// 	    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
// 	}, {
// 	    id: 3,
// 	    name: 'Perry Governor',
// 	    lastText: 'Look at my mukluks!',
// 	    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
// 	}, {
// 	    id: 4,
// 	    name: 'Mike Harrington',
// 	    lastText: 'This is wicked good ice cream.',
// 	    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
// 	}];

// 	return {
// 	    all: function() {
// 		return chats;
// 	    },
// 	    remove: function(chat) {
// 		chats.splice(chats.indexOf(chat), 1);
// 	    },
// 	    get: function(chatId) {
// 		for (var i = 0; i < chats.length; i++) {
// 		    if (chats[i].id === parseInt(chatId)) {
// 			return chats[i];
// 		    }
// 		}
// 		return null;
// 	    }
// 	};
// });
