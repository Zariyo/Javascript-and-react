'use strict';

// Poniższe fragmenty kodu zostały zakomentowane w celu utrzymania porządku. 
// Odkomentowuj je na bieżąco i zapisuj odpowiedzi w komentarzu. 
// Ostatecznie przed wrzuceniem pliku na repozytorium zakomentowane powinny być tylko dodane odpowiedzi i fragmenty kodu powodujące ewentualne błędy.

// ========================= Zadanie 1 =========================
// Co zwróci funkcja poniższa funkcja w każdym z poniższych przypadków?
// Wyjaśnij, dlaczego w niektórych przypadkach wyniki różnią się.

// ========================== UWAGA =============================
// Zapis 
// (impression) ? console.log('A') : console.log('B');
// Jest skróconą wersją:
// if (impression) {
//     console.log('A');
// } else {
//     console.log('B');
// }
// ==============================================================

function isEquals(val_1, val_2) {
    (val_1 == val_2) ? console.log('A') : console.log('B');
    (val_1 === val_2) ? console.log('C') : console.log('D');
}

 isEquals(2, '2');                                  //A, D, wartość taka sama, ale różny typ
 isEquals(null, undefined);                         //A, D, wartość taka sama, ale rózny typ
 isEquals(undefined, NaN);                          //B, D, wartość różna, typ też
 isEquals(['a', 'b', 'c'], ['b', 'c', 'd']);        //B, D, wartość różna, typ ten sam
 isEquals(0, '');                                   //A, D, taka sama wartość, ale rózny typ
 isEquals('0', '');                                 //B, D, różna wartość, ten sam typ
 isEquals(+0, -0);                                  //A, C, taka sama wartość i typ
 isEquals(0, false);                                //A, D, taka sama wartość, ale rózny typ
 isEquals(0, 'false');                              //B, D, różna wartość i typ
 isEquals([1, 2], '1,2');                           //A, D, taka sama wartość, różny typ

!!false;
!!true;
!!undefined;
!!null;

// ========================= Zadanie 2 =========================
// Jaki będzie efekt działania poniższego fragmentu kodu?
// Wyjaśnij wynik

const person = {
    firstName: 'Jan',
    lastName: 'Kowalski'
}

 console.log(person);       // wypisuje do konsoli zawartość const: firstName: 'Jan', lastName: 'Kowalski"
// person = {};             // wyrzuca błąd ponieważ nie można przypisać ponownie do stałej
// console.log(person);

// ========================= Zadanie 3 =========================
// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

 let number = 3;
 console.log(number); {
     let number = 4;
     console.log(number);
 }
 console.log(number);

 // Zostało wyświetlone 3, 4, 3, ponieważ let ma zasięg funkcyjny, więc zadeklarowana zmienna number
 // wewnątrz funkcji nie zmieniła wartości zmiennej number poza nią

// ========================= Zadanie 4 =========================
// Czym się różnią poniższe dwa fragmenty kodu?
// Jak działa operator '...'?

 const arr = [1, 2];
 const newArr1 = [arr, 3, 4];
 console.log(newArr1);
 const newArr2 = [...arr, 3, 4];
 console.log(newArr2);

 // NewArr1 składa się z podtablicy arr oraz dwóch wartości 3 i 4 a NewArr2 składa się z wartości
 // z tablicy arr oraz dwóch kolejnych - 3 i 4
 // operator '...' "rozpakowuje" zawartość tablicy arr rozkładając ją w tablicy a nie dodając jako podtablice

// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

 const word = 'react';
 const arrWord = [...word];
 console.log(arrWord);

 // Zostanie wyświetlona tablica składająca się z liter słowa react, ponieważ operator '...' rozkłada
 // to słowo po tablicy jako pojedyncze wpisy

// ========================= Zadanie 5 =========================
// Zapoznaj się z kodem poniżej. Jaki będzie jego wynik i dlaczego?

 var hello = 'Hello world!';
 var result = hello / 2;
 
 result;
 
 (Number.isNaN(result));         // zwróci true ponieważ operacja arytmetyczna na typie string zmienia typ na NaN
 (Number.isNaN(hello));          // zwróci false ponieważ typ string nie jest typem NaN

// ========================= Zadanie 6 =========================
// Zapoznaj się z przykładami poniżej. Jaka jest różnica między var a let/const?

 var car = 'BMW';

 function showCar() {
     car = 'Audi';
//     model = 'A5';
     console.log('Great car!');
 }
 showCar();

 car;
// model;

// typ var ma zasięg globalny, więc podczas wykonania funkcji showCar zostanie zmieniona wartość również poza funkcją
// a typy let i const mają zasięg funkcyjny, czyli podczas zmiany wartości w funkcji, wartość poza funkcją nie uległaby zmianie
// przypisanie wartości zmiennej model nie działa, ponieważ nie jest ona wcześniej zadeklarowana

//-------

 var name = 'Bryan';

 (function differentName() {
     var name = 'Adam';
     console.log(name);
 })();

 console.log(name);

 // ponieważ w funkcji zmienna name jest zadeklarowana na nowo, jest to oddzielna zmienna, więc nie ma wpływu
 // na zmienną name poza funkcją

//-------

 var a = 5;
 if (true) {
     var a = 2;
 }
 console.log(a);

//  if (true) {
//      const b = 2;
//  }
//  console.log(b);

 // Ponieważ wartość zmiennej a jest zmieniona wewnątrz wyrażenia warunkowego, to wyświetlona zostanie zmieniona wartość
 // Ponieważ const ma zasięg lokalny to wartość nie zostanie przekazana poza wyrażenie warunkowe, więc wyświetlenie
 // wartości nie zadziała

//-------

 for (var i = 0; i < 10; i++) {
     console.log(i);
 }
 console.log(i);

 for (let i = 0; i < 10; i++) {
     console.log(i);
 }
 console.log(i);

 // typ var ma zasięg globalny więc zostaniy wyświetlona poza pętlą for, a typ let ma zasięg blokowy, więc nie zostanie
 // poza nią wyświetlony, a wyświetlane i po pętli z let jest wywołaniem typu var

//-------

 var test = "var1";
 var test = "var2";

// let test2 = "let1";
// let test2 = "let2";

 // ponowna deklaracja dla var jest dozwolona, a dla let nie, dlatego wyrzuca błąd

// ========================= Zadanie 7 =========================
// Do czego używany jest 'use strict' w pierwszej linijce skryptu?

// Wprowadza on interpretację kodu w tryb restrykcyjny przez co wiele pomyłek w kodzie teraz będzie rzucało błędami,
<<<<<<< HEAD
// ma on wpływ na semantykę, może być stosowany do pojedynczych funkcji jak i całych programów
=======
// ma on wpływ na semantykę, może być stosowany do pojedynczych funkcji jak i całych programów
>>>>>>> 3c8fcb84045b62b6df7e1179e74fc96b11faeb93
