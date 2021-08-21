var addto = function (passed){
var add=function(inner){
    return passed+inner;
}
return add;
}
var addthree=new addto(3);
var addfour=new addto(4);
console.dir(addthree);
console.dir(addfour);
console.log(addthree(1));
console.log(addfour(1));
