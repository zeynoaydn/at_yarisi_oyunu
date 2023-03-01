var at1 = document.getElementById("atbir");
var at2 = document.getElementById("atiki");
var at3 = document.getElementById("atuc");
var rdn1 = 0, rdn2 = 0, rdn3 = 0;
function Baslat() {
    yarisma = setInterval(Yarisma, 1000);
}
var Yarisma = function () {
    atbir();
    atiki();
    atuc();
    //yukarıdaki fonksiyon çalıştığuı sürece atbir hareket edecek

}

//offsetleft bitis çizgisinin soldan olan uzaklığını verir
var bitis = document.getElementById("bitis").offsetLeft - 100;
//-100 diyerek atın çizgiden taşmasını önleyeceğiz

var randomSayi = function () {
    //floor küsüratı siliyor,tam sayı olmasını sağlıyor
    //100 ile çarparak 0 ile 100 arasında bir sayı oluşturduk
    var rdn = Math.floor(Math.random() * 100);
    //üretilen dsyıyı döndürüryoruz
    return rdn;
}

function atbir() {
    if (rdn1 < bitis) {

        //rdn1 bitis küçük olduğu sürece rdn1 e sayı üret ve bulduğu sayıyı ekle dedik
        rdn1 += randomSayi();

        if (rdn1 >= bitis) {
            rdn1 = bitis;//atın durması gerekiyor
            //atın çizgiyi geçmemesi için yarışmayı temizledik
            clearInterval(yarisma);//bu metod ile intervali kapato-ıyoruz interval çalışmayacak
            at1.style.marginLeft = bitis + "px";
            //atın son marjin değeride bitis noktasındaki değer olacak2 x
        }
        else {
            //eğer küçüükse at hareket etmeye devam eer
            //atların sola doğru etmesi için margin-left değerini sürekli arttırıcaz
            at1.style.marginLeft = rdn1 + "px";
        }
    }
}
function atiki() {
    if (rdn2 < bitis) {
        rdn2 += randomSayi();

        if (rdn2 >= bitis) {
            rdn2 = bitis;
            clearInterval(yarisma);
            at2.style.marginLeft = bitis + "px";
        }
        else {
            at2.style.marginLeft = rdn2 + "px";
        }
    }
}

function atuc() {
    if (rdn3 < bitis) {
        rdn3 += randomSayi();

        if (rdn3 >= bitis) {
            rdn3 = bitis;
            clearInterval(yarisma);
            at3.style.marginLeft = bitis + "px";
        }
        else {
            at3.style.marginLeft = rdn3 + "px";
        }
    }
}