function outer(){
    var outtervalue=100;

    function inner(){
        var innervalue=200;
        console.log("Inner value",innervalue);
    }
    inner();
}

outer();

