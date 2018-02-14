angular.module('app.services', [])

.service('Result', ['$http', function($http){

    var api_url = 'https://sheetsu.com/apis/v1.0bu/7a199d27bc00';
    var currentID = 1;
    
    function filterBlankRows(l){
        return l.filter(function(obj){
            return obj.id != '';
        });
    }

    var ret = {
        all: function(){
            
            return $http.get(api_url).then(function(resp){
                var results = filterBlankRows(resp.data);
                if (results.length > 0) currentID = parseInt(results[results.length-1].id);
                return results;
            });
        }
    }
    
    ret.all();
    
    return ret;

}]);