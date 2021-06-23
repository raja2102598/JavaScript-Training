var numbers=[1,2,3,4,5,6];

var afterFilter=numbers.filter(function (value,index){
    if(value>2)
        return true;
    else
        return false;
});

console.log(afterFilter);

console.log(numbers);


var afterMap=numbers.map(function (value,index){
    value=value+100;
    return value;
});



console.log(afterMap);

console.log(numbers);
