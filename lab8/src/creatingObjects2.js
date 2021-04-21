// Brawo, na poprzednich laboratoriach dowiedziaĹeĹ/aĹ siÄ jak dziaĹa sĹowo kluczowe new :) 
// 1. UproĹÄ funkcjÄ BookCreator tak, aby zawieraĹa tylko nadawanie wartoĹci polom. (uĹźyj operatora this) 
// Dodaj wywoĹanie sĹowa kluczowego new, przy wywoĹaniu BookCreator(). 

function BookCreator(title, author) {
    this.title = title;
    this.author = author;
}

const book1 = new BookCreator("Dziady", "Mickiewicz")
console.log(book1);

// BookCreator jest konstruktorem, a je zawsze (ZAWSZE) deklarujemy zaczynajÄc nazwÄ od wielkiej litery

// 1.1. UĹźyj zmiennej prototype, aby dodaÄ funkcje print() i addReader() do tworzonych obiektĂłw.

BookCreator.prototype.print = function(){
    console.log(this.title);
    console.log(this.author);
}

book1.print()


// 2. Tworzymy alternatywnÄ wersjÄ powyĹźszego kodu. UĹźyj sĹĂłw kluczwych class i constructor, aby osiÄgnÄÄ powyĹźszy efekt.

class Book{
    constructor(title, author){
        this.title = title
        this.author = author
    }
}
const book2 = new Book("Wesele", "Wyspiański")
console.log(book2);


// 3. Znasz juĹź wiele sposĂłb na stworzenie obiektu. Dlaczego wiÄc nie uĹźyÄ arrow function?
// UzupeĹnij poniĹźszy kod o inicjalizacjÄ pola name i age. Dodaj wewnÄrz funkcjÄ addAge, ktĂłra inkrementuje wiek. 

const Person = name => {
    this.name = name
}
const person1 = new Person("Adam")
console.log(person1);


// Przetestuj dziaĹanie tak stworzonego obiektu, korzystajÄc z wiedzy, ktĂłrÄ juĹź masz. Jakie sÄ rĂłznice pomiÄdzy stworzeniem obiektu za pomocÄ poprzednich metod?
// (przetestuj prototype, new itd.)
