var app = angular.module('chatApp',['ngMaterial']);


app.config(function($mdThemingProvider) {
     $mdThemingProvider.theme('default')
       .primaryPalette('brown')
       .accentPalette('orange');
   });



app.controller('chatController', function($scope) {

	$scope.messages=[
	{
		sender:"BOT",
		text:"What can I do for you today?",
		time:"1.12pm"

	},
	{
		sender:"USER",
		text:"Dance around a tree",
		time:"9.00"
		
	}
	];
    var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");

    exampleSocket.onmessage  =   function  (event) {
           var jsonData = JSON.parse(event.data);
           console.log(jsonData);
       };
});


