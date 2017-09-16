var app = angular.module('chatApp',['ngMaterial']);


app.config(function($mdThemingProvider) {
     $mdThemingProvider.theme('default')
       .primaryPalette('indigo')
       .accentPalette('indigo')
       .dark;
   });



app.controller('chatController', function($scope, $sce) {

	$scope.messages=[{sender:"BOT",text:"Hey Human!What do you wanna know?"}];

   
var  exampleSocket =  new  WebSocket("wss://swiftcode-newsobot.herokuapp.com/chatSocket"); 
   exampleSocket.onmessage  =   function  (event) {    
       var jsonData = JSON.parse(event.data);   
       jsonData.time = new Date().toLocaleTimeString();  
       $scope.messages.push(jsonData);    
       $scope.$apply();     
       console.log(jsonData);     
        };



    $scope.sendMessage = function () {    
    	exampleSocket.send($scope.userMessage);     
   		$scope.userMessage = "";
        $("#message-pane").animate({ scrollTop: $('#message-pane').prop("scrollHeight") }, 1000);

    };
                   $scope.trust = $sce.trustAsHtml;


});


