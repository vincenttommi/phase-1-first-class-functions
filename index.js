function receivesAFunction(callback){


   callback();    //callback function


}


function returnsANamedFunction(){


    //Define the named function

     function namedFunction(){
       //function body

     }


     return  namedFunction;  // return the named function


}



function returnsAnAnonymousFunction(){

// returns anonymous function
    return function(){
    
        //function body

    }
}