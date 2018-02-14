angular.module('app.controllers', [])
  
.controller('bizConnectListingCtrl', ['$scope', '$stateParams', '$ionicScrollDelegate', '$timeout', '$ionicLoading', 'Result', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicScrollDelegate,$timeout, $ionicLoading, Result) {
   
   
   
    $ionicLoading.show({
         template: 'Loading...',
         duration: 3000,
         animation: 'fade-in',
         showBackdrop: true,
        showDelay: 0
      });
  
 
    $scope.results = [];
	$scope.loadData = function(){
    	Result.all().then(function(res){
    	$scope.results = res;
    	})
	}
	
	$scope.loadData();
	
    
    $scope.scrollTop = function() {
      $ionicScrollDelegate.scrollTop();
      
    };
    
    
      $scope.doRefresh = function() {
    
    console.log('Refreshing!');
    $timeout( function() {
    
     window.location.reload(false);
      $scope.$broadcast('scroll.refreshComplete');
    
    }, 250);
      
  };
  
   

     
    
}])
   
.controller('listingResultCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    
     
    
    $scope.list = {
        "Name" : $stateParams.name,
        "Website" : $stateParams.website,
        "Majors" : $stateParams.majors,
        "Position" : $stateParams.position,
        "Title" : $stateParams.title,
        "OCI" : $stateParams.oci
        
    }


}])
 