var a=5.2

console.log(parseInt(a)); //5,a yı değiştirmez yalnızca ekrana yazmaya yarar
var b="5.2"
console.log(parseFloat(b));// NaN: Not a Number
b=Number.NaN
console.log(isNaN(b)); //true,bir sayı değilse true dur
// sonsuz sayo var c=Number.POSITIVE_INFINITY
// sonsuz sayı var d=Number.NEGATIVE_INFINITY
//isFinite() fonksiyonu, bir değerin sonlu bir sayı olup olmadığını kontrol eder. Eğer değer sonlu bir sayı ise true, aksi takdirde false döner.
//isInteger() fonksiyonu, bir değerin tam sayı olup olmadığını kontrol eder. Eğer değer tam sayı ise true, aksi takdirde false döner.
//toFixed() fonksiyonu, bir sayıyı belirtilen ondalık basamak sayısına yuvarlar ve sonucu bir string olarak döner.bu fonksiyon yuvarlama yapar etrafındakilere göre
//!----- DERS1-----

// Basit operatörler(+,-,*,/,%,**)
// "17"+"5" // 175, stringleri birleştirir
//! STRİNG->INTEGER
//parseInt-parseFloat-Number()
var o="13.456",l="2.98"
console.log(parseFloat(l));
console.log(parseInt(o)+parseFloat(l));
var total=parseInt(o)
console.log(total);

//!Number()
var m="5.2"
console.log(Number(m));
var n="5.2abc"
console.log(Number(n)); //NaN, çünkü stringin içinde sayı olmayan karakterler var
var ol=null
var total=Number(ol)
console.log(total); // *null değeri sayıya çevrildiğinde 0 olur
var ol2=undefined
var total2=Number(ol2)
console.log(total2); // undefined değeri sayıya çevrildiğinde NaN olur

//x->string
var x=5.2
console.log(typeof(x.toString())); //5.2, number ı stringe çevirir
//* yukarıdakinden farklı olarak:
var total=String(x)
console.log(typeof(total)); //5.2, number ı stringe çevirir
console.log(total);
//null u stinge çevirirse onu ekrana "null" olarak yazdırır,aynı şekilde undefined i stringe çevirirse onu ekrana "undefined" olarak yazdırır
//! null veya undifened da toString methodlarını kullanamiyoruz
var l=true
console.log(l.toString()); //true, boolean ı stringe çevirir
//*MATEMATİKSEL İŞLEMLER
console.log(5+null); //5, null değeri sayıya çevrildiğinde 0 olur
console.log(5+undefined); //NaN, undefined değeri sayıya çevrildiğinde NaN olur
console.log(5+true); //6, true değeri sayıya çevrildiğinde 1 olur
console.log(5+false); //5, false değeri sayıya çevrildiğinde 0 olur
console.log(5+"5"); //55, number ı stringe çevirir ve birleştirir
console.log("3"+undefined); //undefined, undefined değeri stringe çevrildiğinde "3undefined" olur ve birleştirir