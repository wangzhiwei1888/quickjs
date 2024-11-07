(function(){
    if(typeof scriptArgs != 'undefined'){
        print(scriptArgs);
        console.log(scriptArgs[1]);
        console.log(scriptArgs[2]);
        console.log(scriptArgs[3]);

        console.log( +scriptArgs[2] + +scriptArgs[3]);
    }
})()