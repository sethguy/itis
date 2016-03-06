    var extra = function(w,t){ 
    	
    	return function(word){

    	 alert(word+"  "+t+"  "+w )

    	 	console.log( word+"  "+t+"  "+w );

    	 	// you could even do something like:

    	 		// t( word , w )  or  word( t , w )   or   w( word , t )

    	 			// if any of those were callbacks

    	 };  

   };


var lake = function(calli){  

 calli('dog');  

};

lake( extra('table','obj') );