var str = "Welcome"

//tolowercase
console.log(str.toLowerCase())


// toUpperCase
console.log(str.toUpperCase())


//Char at index 3
console.log(str.charAt(3));

//Index of given string,Position- Starting index 
console.log(str.indexOf("come",1));


//Concat two or more Strings
console.log(str.concat(" To Onebill"));


//Includes Given String 
console.log(str.includes('lc',4));


//Replace a String
var replacedStr=str.replace("Welcome","Hi");
console.log(replacedStr);

//split
console.log(str.split(""));

//Substring(start,Length)
console.log(str.substr(1,2));

//Search
console.log(str.search('l'));


var Str1="                  Hello                        ";

console.log(Str1.trim());