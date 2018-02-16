angular.module('app.controllers', [])
  
.controller('bizConnectListingCtrl', ['$scope', '$stateParams', '$ionicScrollDelegate', '$timeout', '$ionicLoading', 'Result', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicScrollDelegate,$timeout, $ionicLoading, Result) {
   
    $scope.goBack = function(){
       window.location="../index.html";
   }
   
    $ionicLoading.show({
         template: 'Loading...',
         animation: 'fade-in',
         showBackdrop: true,
        showDelay: 0
      });
  
    $scope.results = [];
	$scope.loadData = function(){
    	Result.all().then(function(res){
    	if(res == ""){
    	         $ionicLoading.show({
         template: 'Loading...',
         animation: 'fade-in',
         showBackdrop: true,
        showDelay: 0
            });
        }
            
        else {
    	    $scope.results = res;
    	    $ionicLoading.show({
         template: 'Loading...',
         duration: 500,
         animation: 'fade-in',
         showBackdrop: true,
        showDelay: 0
        });
        }
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
    
    }, 1000);
      
  };   
  
  $scope.hideScroll = function(){
      
      $scope.scrollHide = true;
  };
  
  
   
}])
   
.controller('page2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    
     // description page
    
    $scope.list = {
        "Name" : $stateParams.name,
        "Website" : $stateParams.website,
        "Majors" : $stateParams.majors,
        "Position" : $stateParams.position,
        "Title" : $stateParams.title,
        "OCI" : $stateParams.oci
        
    }


}])
 