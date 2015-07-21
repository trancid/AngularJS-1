// Notice the creation of a new module, specific for filters
angular.module("customFilters", [])
.filter("unique", function(){
   return function(data, propertyName){
       if(angular.isArray(data) && angular.isString(propertyName)){
           // Generate a unique array
           var results = [];
           var keys = [];// Temporary array to check unique keys
           for (var i = 0; i < data.length; i++){
               var val = data[i][propertyName];
               if(angular.isUndefined(keys[val])){// Key does not exist yet
                   keys[val] = true;// Add the key to the array
                   results.push(val);
               }
           }
           return results;
       }else{// Something wrong with the input
           return data;
       }
   } 
})
.filter("range", function($filter){// Notice injection of '$filter'
    // For a given page and size, return list of elements
    return function(data, page, size){
        if(angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)){
            var start_index = (page-1)*size;
            if(data.length < start_index){
                return [];
            }else{
                // limitTo will return 'size' elements at maximum, and less if there are not that much elements anymore
                return $filter("limitTo")(data.splice(start_index), size);// use of built-in service '$filter'
            }
        }else{// should not happen
            return data;
        }
    }
})
.filter("pageCount", function(){
    return function(data, size){
        if(angular.isArray(data) && angular.isNumber(size)){
            var result = [];
            for(var i = 0; i < Math.ceil(data.length / size); i++){
                result.push(i)
            }
            return result;
        }else{// should not happen
            return data;
        }
    }
})
;