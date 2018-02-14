angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('bizConnectListing', {
    url: '/page1',
    templateUrl: 'templates/bizConnectListing.html',
    controller: 'bizConnectListingCtrl'
  })

  .state('page2', {
    url: '/page2',
	params: {
		name: "",
		website: "",
		majors: "",
		position: "",
		title: "",
		oci: ""		
},
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  })

$urlRouterProvider.otherwise('/page1')


});