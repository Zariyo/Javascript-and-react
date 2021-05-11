
//  1. Zdefiniuj pola 'title' i 'author' i funkcjÄ print(), ktĂłra wypisuje author - title

const book0 = {
    author: "Jan",
    title: "Zycie Jana",
    print(){
        console.log(this.author + " - " + this.title);
    }
    };
    
    //book0.print();
    
    const book = {};
    //properties
    
    
    
    
    //book.print();
    
    const book2 = Object.create({});
    //properties
    
    //book2.print();
    
    function BookCreator(title, author) {
        const b = {
            title: title,
            author: author,
            print(){
                console.log(this.title + " - " + this.author);
            }
        };
        return b

    }
    
    const book3 = BookCreator('CieĹ wiatru', 'Carlos Ruiz Zafon');
    const book4 = BookCreator('Ojciech Chrzestny', 'Mario Puzo');
    
    //  console.log("/////////////////////////////");
    //  book3.print();
    //  book4.print();
    
    // 2. Przetestuj poniĹźszy kod i odpowiedz na pytania
    
   
    function testThis() {       //Odwoluje sie do Object [global]
        console.log("testThis");
        console.log(this);
        console.log("testThisEnd");
    }
    
    testThis();

    function testThis2() {      //Odwoluje sie do niczego - undefined
        "use strict"
        console.log("testThis2");
        console.log(this);
        console.log("testThis2End");
    }
    
    testThis2();
    
    
    // 2.1. Czym jest this?
    // 2.2. Do czego odwoĹuje siÄ this w obu przypadkach
    
    const person = {
        name: 'Oscar Wilde',
        print() {
            console.log(this.name);
    
            function a() {
                console.log(this);
            }
            a();
        }
    }
    person.print();
    
    // 2.3. Jakie wartoĹci przyjmuje this w powyĹźszych przypadkach i dlaczego?
    // 2.4. Zmodyfikuj powyĹźszy kod w ten sposĂłb, aby funkcja a wyĹwietlaĹa w konsoli 'a: Oscar Wilde'. Nie uĹźywaj arrow function.
    
    const printName = function() {
        console.log(this.name);
    }
    
    const person1 = {
        name: 'Aaron Towels' 
    }
    
    const person2 = {
        name: 'Tom Clancy' 
    }
    
    // 2.5. Za pomocÄ funkcji printName wypisz 'name' obu autorĂłw. Nie zmieniaj implementacji funkcji printName!
    
    
    const person3 = {
        name: 'Arthur Conan Doyle',
        print() {
            const a = () => {
                console.log(this);
            };
            a();
        }
    }
    person3.print();
    
    // 2.6. Co wydrukuje w konsoli powyĹźszy kod? Jaki scope ma arrow function? 
    
    // 3. owrĂłÄmy do zadania 1. 
    // Dlaczego nasza funkcja BookCreator nie jest najlepszym rozwiÄzaniem do tworzenia obiektĂłw?
    
    // Zmodyfikuj funkcjÄ BookCreator tak, aby inicjalizowaĹa pola author i title. 
    // FunkcjÄ print zadeklaruj jako wspĂłlnÄ dla wszystkich obiektĂłw tworzonych przez BookCreator.
    // Dopisz do tworzonych obiektĂłw pole readers, ktĂłre bÄdzie zawieraĹo liczbÄ czytelnikĂłw.
    // Zadeklaruj funkcjÄ addReader, ktĂłra inkrementuje pole readers. addReader powinna byÄ funkcjÄ wspĂłlnÄ, tak jak print.
    
    
    // 4. Na stworzonym obiekcie wywoĹaj funkcjÄ hasOwnProperty('isBestseller'). 
    // Napisz dlaczego nasz obiekt ma do niej dostÄp. (jeĹli wyskakuje bĹÄd - powrĂłÄ do poprzedniego zadania lub spytaj prowadzÄcego)
    
    
    
    // 5. OdwoĹaj siÄ do zmiennej __proto__ w stworzonym obiekcie, co zawiera ta zmienna i do czego sĹuĹźy?