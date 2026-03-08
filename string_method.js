var a
a="hello world"
var b="merhaba"
var c=`${a} ${b} test2 ${3+4} test3`
// Alt GR + ,,
console.log(a);
console.log(b);
console.log(a+"     "+b);
console.log("1"+"1");
console.log(c);

//stringlerin belirli parçalarını almak
var d="merhaba dünya"
console.log(d[0]);//ındex
//console.log(d[1]);
//console.log(d[13]);//undefined

//console.log(d.charAt(3));

// belirli bir karakterin indexsini bulmak
console.log(d.indexOf("d",5));//ilk bulduğu a'nın indexini verir
 console.log(d.lastIndexOf("a"),11);//son bulduğu a'nın indexini verir

//stringin uzunluğunu bulmak
console.log(d.length);