angular.module('app.services', [])

.service('Result', ['$http', function($http){

    var api_url = 'https://sheetsu.com/apis/v1.0bu/7a199d27bc00';
    var currentID = 1;
    
    // codes added to remove the issue of blank rows (Added on 180111)
   
    function filterBlankRows(l){
        return l.filter(function(obj){
            return obj.id != '';
        });
    }
    
    // (This is the original code... code before adding filterBlankRows function. If we deleted filterBlankRows function, we need to have
   // the following code)
    
    /*
    var ret = {
        all: function(){
            
            return $http.get(api_url).then(function(resp){
                if (resp.data.length > 0) currentID = parseInt(resp.data[resp.data.length-1].id);
                return resp.data;
            });
            
         
        }
    }
    */
    // Added on 180111
   
   
    var ret = {
        all: function(){
            
            return $http.get(api_url).then(function(resp){
                var results = filterBlankRows(resp.data);
                if (results.length > 0) currentID = parseInt(results[results.length-1].id);
                return results;
            });
        }
    }
    
    // this will be the same for both condition
    
    ret.all();
    
    return ret;

}]);