angular.module('scheduleApp', ['firebase'])

.controller('mainController', function($scope, $firebase) {
  
  var ref = new Firebase("https://redditclonesample.firebaseio.com/");
  var fb = $firebase(ref);

  var syncObject = fb.$asObject();

  syncObject = fb.$asObject();

  syncObject.$bindTo($scope, 'days');

});