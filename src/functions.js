 const functions = {
     head: function(arr){
         if(arr.length==0) return undefined;
         return arr[0];

     },

     tail: function(arr){
         if(arr.length==0) return arr;
         return arr.slice(1);
     },

     min: function(arr){
         if(arr.length==0) return undefined;
         arr.sort()
         return arr[0];
     },
     max: function(arr){
         if(arr.length==0) return undefined;
         arr.sort();
         return arr[arr.length-1];
     }
 }
 module.exports=functions;