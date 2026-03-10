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
    console.log(a.startsWith("merhaba")) // stringin belirli bir karakterle başlayıp başlamadığını kontrol eder
    console.log(a.endsWith("world")) // stringin belirli bir karakterle bitip bitmediğini kontrol eder
    console.log(a.includes("lo")) // stringin belirli bir karakteri içerip içermediğini kontrol eder
    var e="herkes fazla konuşabilir mi?"
    //stringi parçalama
    console.log(e);
    //console.log(e.slice(1));
    console.log(a.substring(1));

    //Büyük ve küçük harflere çevirme
    console.log(a.toUpperCase());
    console.log(a.toLowerCase());

    //stringi bölme
    var f="123456 "
    console.log(f.trim());//başında ve sonundaki boşlukları siler
    